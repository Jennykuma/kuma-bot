import {Message} from 'discord.js';
import {chooseAgentDetails} from '../helpers/valorant';
import {successMsgEmbeded} from '../helpers/discord';

module.exports = {
  name: 'agent',
  description: 'Returns a random agent',
  execute(discordClient: any, message: Message, args: Array<string>) {
    const agent = chooseAgentDetails();
    const msgEmeded = successMsgEmbeded(message.author,
        agent.imgUrl,
        agent.name,
        agent.role);

    message.channel.send(msgEmeded);
  },
};
