import { Message } from "discord.js";
import { chooseAgentDetails } from "../helpers/valorant";
import { successMsgEmbeded } from "../helpers/discord";
import { getOwnedAgents } from "../helpers/database";
import { freeAgents } from "../static_data.json"
import _ from "lodash";

module.exports = {
	name: 'agent',
	description: 'Returns a random agent',
	async execute(discordClient: any, message: Message, args: Array<string>) {

		try {
			const userId = message.author.id;
			let ownedAgents = (await getOwnedAgents(userId));
			let agent = chooseAgentDetails();

			while (!ownedAgents.includes(agent.name)) {
				agent = chooseAgentDetails();
			}

			const msgEmeded = successMsgEmbeded(message.author,
				agent.imgUrl,
				agent.name,
				agent.role);

			message.channel.send(msgEmeded);

			if (_.isEqual(ownedAgents, freeAgents)) {
				message.reply("Hi! I only have the default agents set for you. If you have unlocked agents please type `kuma agents` to let me know!")
			}
		} catch (error) {
			message.reply("You haven't told Kuma which agents you own! Please do `kuma agents` first. 🐻")
		}
	},
};