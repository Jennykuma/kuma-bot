const dotenv = require('dotenv')
const Discord = require('discord.js')
const { agents, maps, prefix } = require('./config.json');
const client = new Discord.Client()
dotenv.config()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
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
})

client.login(process.env.TOKEN)

function chooseAgent() {
  return agents[Math.floor(Math.random() * agents.length)]
}

function chooseAgents() {
  team = new Set()
  while (team.size < 5) { team.add(chooseAgent()) }
  return [...team].join(', ')
}

function chooseMap() {
  return maps[Math.floor(Math.random() * maps.length)]
}