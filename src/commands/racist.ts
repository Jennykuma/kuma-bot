import { Message } from "discord.js";

module.exports = {
	name: 'racist',
	description: '👿 See a message about racism',
	execute(discordClient:any, message:Message, args:Array<string>) {
		message.reply('This is an inclusive community. There is no room for racism here! 😠');
	},
};