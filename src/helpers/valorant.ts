import { getAgents, IAgent } from '../Agent';
import { getMaps, IMap } from '../Map';
import { getChannel, getUsers } from './discord';
import { getWeapons, IWeapon } from '../Weapon';
import { shuffleArray } from './common';
import { Client } from 'discord.js';
import { clone } from 'lodash';

const agents = getAgents();
const maps = getMaps();
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
    let chosenUsers = clone(shuffledUsers);

    if (usersLength > 10) {
      chosenUsers = shuffledUsers.splice(0, 10);
      let unchosenUsers = shuffledUsers;

      response += `**👀 Spectators 👀**\n`
      for (let user of unchosenUsers) {
        response += `Sorry ${user.toString()}, I didn't pick you to play this time!\n`;
      }
      response += '\n';
    }

    const team1 = chosenUsers.splice(0, 5);
    const team2 = chosenUsers
    const team1Agents = chooseAgents(team1.length);
    const team2Agents = chooseAgents(team2.length);

    response += `**⚔ Attackers ⚔**\n`
    for (let member of team1) {
      response += `I choose ${member.toString()} to play **${team1Agents.pop()}**!\n`;
    }

    response += '\n';

    response += `**🛡 Defenders 🛡**\n`
    for (let member of team2) {
      response += `I choose ${member.toString()} to play **${team2Agents.pop()}**!\n`;
    }
  }

  response += "\nI'm sorry if I picked an agent you don't own, please type `kuma agent` to re-roll.\n";

  response += '\n🐻 Good luck friends 🐻';
  return response;
}

export const chooseAgent = (): string => {
  return agents[Math.floor(Math.random() * agents.length)].name;
}

export const chooseAgentDetails = (): IAgent => {
  return agents[Math.floor(Math.random() * agents.length)];
};

export const chooseAgents = (size: number): Array<String> => {
  let team: Set<String> = new Set();
  while (team.size < size) { team.add(chooseAgent()) }
  return [...team];
}

export const chooseMap = (): IMap => {
  return maps[Math.floor(Math.random() * maps.length)];
}

const randomWeapon = (): IWeapon => {
  return weapons[Math.floor(Math.random() * weapons.length)];
}

export const chooseWeapon = (price: Number): IWeapon => {
  let weaponOfChoice = randomWeapon();
  while (price < weaponOfChoice.price) {
    weaponOfChoice = randomWeapon();
  }

  return weaponOfChoice;
}
