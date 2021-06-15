import { getAgents } from '../Agent';
import { maps } from '../static_data.json';
import { getChannel, getUsers } from './discord';
import { getWeapons, IWeapon } from '../Weapon';
import { shuffleArray } from './common';
import { Client } from 'discord.js';

const agents = getAgents();

const weapons = getWeapons();

export const assignAgents = (discordClient: Client, msg: any): string => {
  const channel = getChannel(discordClient, msg);

  if (!channel) {
    return "You aren't connected to a voice channel so I cannot create a team, sorry! Please join a voice channel and retry! 🐻"
  }

  const users = getUsers(channel);
  const usersLength = users.length;

  let response = "has decided! \n\n";

  if (usersLength <= 5) {
    const agents = chooseAgents(usersLength);
    for (let member of users) {
      response += `I choose ${member.toString()} to play **${agents.pop()}**!\n`;
    }
  } else {
    let shuffledUsers: Array<string> = shuffleArray(users);

    if (usersLength > 10) {
      const chosenUsers = shuffledUsers.splice(0, 10);
      const unchosenUsers = shuffledUsers;
      shuffledUsers = chosenUsers;

      for (let user of unchosenUsers) {
        response += `Sorry ${user.toString()}, I didn't pick you to play this time!\n`;
      }
      response += '\n';
    }

    const team1 = shuffledUsers.slice(0, usersLength / 2);
    const team2 = shuffledUsers.slice(- usersLength / 2);
    const team1Agents = chooseAgents(team1.length);
    const team2Agents = chooseAgents(team2.length);

    response += `**Team A:**\n`
    for (let member of team1) {
      response += `I choose ${member.toString()} to play **${team1Agents.pop()}**!\n`;
    }

    response += '\n';

    response += `**Team B:**\n`
    for (let member of team2) {
      response += `I choose ${member.toString()} to play **${team2Agents.pop()}**!\n`;
    }
  }

  response += '\n🐻 Good luck friends 🐻';
  return response;
}

export const chooseAgent = (): string => {
  return agents[Math.floor(Math.random() * agents.length)].name;
}

export const chooseAgents = (size:number) : Array<String> => {
  let team: Set<String> = new Set();
  while (team.size < size) { team.add(chooseAgent()) }
  return [...team];
}

export const chooseMap = (): string => {
  return maps[Math.floor(Math.random() * maps.length)]
}

const randomWeapon = (): IWeapon => {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

export const chooseWeapon = (price: Number): IWeapon => {
  let weaponOfChoice = randomWeapon();
  while(price < weaponOfChoice.price){
    weaponOfChoice = randomWeapon();
  }

  return weaponOfChoice;
}