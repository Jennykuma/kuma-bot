import { Message, MessageEmbed } from "discord.js";
import { nonFreeAgents } from '../static_data.json';
import { getAgents } from '../Agent';
import { getStoredAgents, setDatabase } from "../helpers/database";
const Pagination = require('discord-paginationembed');

module.exports = {
    name: 'agents',
    description: 'Interactive agent selection that tells Kuma which agents you own',
    async execute(discordClient: any, message: Message, args: Array<string>) {

        let userId = message.author.id;
        let path = userId + '/agents/'

        const ownedAgents = await getStoredAgents(userId);
        const agentEmbeds = []

        for (let agent of nonFreeAgents) {
            let agentObj: any = getAgents().find(element => element.name == agent)
            let owned = ownedAgents.agents[agent] ? "Yes" : "No";

            agentEmbeds.push(new MessageEmbed()
                .addField('Name', agent, true)
                .addField('Owned', owned, true)
                .setImage(agentObj?.imgUrl))
        }

        new Pagination.Embeds()
            .setArray(agentEmbeds)
            .setAuthorizedUsers([message.author.id])
            .setChannel(message.channel)
            .setPageIndicator(true)
            .setDeleteOnTimeout(true)
            .setDisabledNavigationEmojis(['jump', 'delete'])
            .setNavigationEmojis({ 'back': '👈', 'forward': '👉' })
            .setTitle("Tell Kuma which agents you own!")
            .setDescription("🟢 - If you own the agent \n\n 🔴 - If you do not own the agent \n\n 👈 - Navigate left \n\n 👉 - Navigate right")
            .setFunctionEmojis({
                '🟢': (_: any, instance: any) => {
                    let agent = nonFreeAgents[instance.page - 1]

                    instance.array[instance.page - 1].fields[1].value = "Yes"

                    setDatabase(path, agent, true);
                },
                '🔴': (_: any, instance: any) => {
                    let agent = nonFreeAgents[instance.page - 1]

                    instance.array[instance.page - 1].fields[1].value = "No"

                    setDatabase(path, agent, false);
                }
            })
            .build()
    },
};
