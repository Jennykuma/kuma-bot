import { Message } from "discord.js";
import { chooseMap } from "../helpers/valorant";

module.exports = {
	name: 'map',
	description: 'Returns a randomized Valorant map',
	execute(discordClient:any, message:Message, args:Array<string>) {
		message.reply('Kuma chooses **' + chooseMap() + '**! Good luck friends 🐻')
	},
};