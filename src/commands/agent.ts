import { Message } from "discord.js";
import { chooseAgent } from "../helpers/valorant";

module.exports = {
	name: 'agent',
	description: 'Returns a random agent',
	execute(discordClient: any, message: Message, args: Array<string>) {
		message.reply('Kuma chooses **' + chooseAgent() + '**! 🐻')
	},
};