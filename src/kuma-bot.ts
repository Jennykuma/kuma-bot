import ENV from './config';
import { getAgents } from './Agent';
import { maps, prefix } from './config.json';
import { initDiscordClient, getChannel, getUsers } from './helpers/discord';
const agents = getAgents();

const discordClient = initDiscordClient(ENV.TOKEN);

const shuffleArray = (array:Array<any>): Array<any> => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const chooseAgent = (): string => {
  return agents[Math.floor(Math.random() * agents.length)].name;
}

const chooseAgents = (size:number): Array<String> => {
  let team: Set<String> = new Set();
  while (team.size < size) { team.add(chooseAgent()) }
  return [...team];
}

const chooseMap = (): string => {
  return maps[Math.floor(Math.random() * maps.length)]
}

const assignAgents = (msg:any): string => {
  const channel: any = getChannel(discordClient, msg);

  if(!channel){
    return "You aren't connected to a voice channel so I cannot create a team, sorry! Please join a voice channel and retry! 🐻"
  }

  const users = getUsers(channel);
  const usersLength = users.length;

  var response = "has decided! \n\n";

  if(usersLength < 5){   
    const agents = chooseAgents(usersLength);
    for(let member of users){
      response += `I choose ${member.toString()} to play **${agents.pop()}**!\n`;
    }
  } else {
    var shuffledUsers = shuffleArray(users);

    if(usersLength > 10){
      const chosenUsers = shuffledUsers.slice(0,10);
      shuffledUsers.splice(0,10);
      const unchosenUsers = shuffledUsers;
      shuffledUsers = chosenUsers;

      for(let user of unchosenUsers){
        response += `Sorry ${user.toString()}, I didn't pick you to play this time!\n`;
      }
      response += '\n';
    }

    const team1 = shuffledUsers.slice(0, usersLength/2);
    const team2 = shuffledUsers.slice(- usersLength/2);
    const team1Agents = chooseAgents(team1.length);
    const team2Agents = chooseAgents(team2.length);

    response += `**Team A:**\n`
    for(let member of team1){
      response += `I choose ${member.toString()} to play **${team1Agents.pop()}**!\n`;
    }

    response += '\n';

    response += `**Team B:**\n`
    for(let member of team2){
      response += `I choose ${member.toString()} to play **${team2Agents.pop()}**!\n`;
    }
  }

  response += '\n Good luck friends 🐻';
  return response;
}

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient?.user?.tag}!`);
});

discordClient.on('message', msg => {
  const cmd = msg.content.toLowerCase();
  if (!cmd.startsWith(prefix) || msg.author.bot) return;

  
  if (cmd === `${prefix} map`) {
    msg.reply('Kuma chooses **' + chooseMap() + '**! Good luck friends 🐻')
  } else if (cmd === `${prefix} agent`) {
    msg.reply('Kuma chooses **' + chooseAgent() + '**! 🐻')
  } else if (cmd === `${prefix} racist`) {
    msg.reply('This is an inclusive community. There is no room for racism here! 😠')
  } else if (cmd === `${prefix} team`) {
    msg.channel.send(assignAgents(msg));
  }
});
