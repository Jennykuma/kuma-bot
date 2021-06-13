import ENV from './config';
import { getAgents } from './Agent';
import { maps, prefix } from './config.json';
import { initDiscordClient, getChannel } from './helpers/discord';
const agents = getAgents();

const discordClient = initDiscordClient(ENV.TOKEN);

const chooseAgent = (): string => {
  return agents[Math.floor(Math.random() * agents.length)].name;
}

const chooseAgents = (): string => {
  let team: Set<String> = new Set();
  while (team.size < 5) { team.add(chooseAgent()) }
  return [...team].join(', ');
}

const chooseMap = (): string => {
  return maps[Math.floor(Math.random() * maps.length)]
}

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient?.user?.tag}!`);
});

discordClient.on('message', msg => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  if (msg.content === `${prefix} map`) {
    msg.reply('Kuma chooses **' + chooseMap() + '**! Good luck friends 🐻')
  } else if (msg.content === `${prefix} agent`) {
    msg.reply('Kuma chooses **' + chooseAgent() + '**! 🐻')
  } else if (msg.content === `${prefix} team`) {
    msg.reply('Kuma chooses **' + chooseAgents() + '** in that order! Good luck friends 🐻')
  } else if (msg.content === `${prefix} racist`) {
    msg.reply('This is an inclusive community. There is no room for racism here! 😠')
  }
});