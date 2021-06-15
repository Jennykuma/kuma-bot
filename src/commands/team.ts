import { Message } from "discord.js";
import { assignAgents } from "../helpers/valorant";

module.exports = {
	name: 'team',
	description: 'Returns randomized teams assigned to agents',
	execute(discordClient:any, message:Message, args:Array<string>) {
		message.channel.send(assignAgents(discordClient, message));
	},
};