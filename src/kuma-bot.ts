import ENV from './config';
import { prefix } from './static_data.json';
import { initDiscordClient, getCommandFiles } from './helpers/discord';

const discordClient : any = initDiscordClient(ENV.TOKEN);
const commandFiles = getCommandFiles(discordClient, __dirname);
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	discordClient.commands.set(command.name, command);
}

discordClient.on('ready', () => {
  console.log(`Logged in as ${discordClient?.user?.tag}!`);
});

discordClient.on('message', (msg:any) => {
  if (!msg.content.toLowerCase().startsWith(prefix) || msg.author.bot) return;

	const args = msg.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

  if (!discordClient.commands.has(command)) return;

  try {
    discordClient.commands.get(command).execute(discordClient, msg, args);
  } catch (error) {
    msg.reply('Sorry! There was an error trying to execute that command 🐻')
  }
});