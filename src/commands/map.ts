import {Message} from 'discord.js';
import {chooseMap} from '../helpers/valorant';
import {successMsgEmbeded} from '../helpers/discord';

module.exports = {
  name: 'map',
  description: 'Returns a randomized Valorant map',
  execute(discordClient: any, message: Message, args: Array<string>) {
    const map = chooseMap();
    const msgEmbeded = successMsgEmbeded(message.author,
        map.imgUrl,
        map.name,
        map.location);
    message.channel.send(msgEmbeded);
  },
};
