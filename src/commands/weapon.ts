import { Message } from "discord.js";
import { chooseWeapon } from "../helpers/valorant";
import { successMsgEmbeded, failMsgEmbeded } from "../helpers/discord";
import { MSG_TIMEOUT } from "../properties";

module.exports = {
    name: 'weapon',
    description: 'Returns a random weapon base on budget',
    execute(discordClient: any, message: Message, args: Array<string>) {
        if (args.length === 1) {
            const budget = args[0];

            if (!/^[0-9]*$/.test(budget)){
                return message.channel.send(failMsgEmbeded(message.author, "must input number!!"))
                .then(msg => msg.delete({ timeout: MSG_TIMEOUT}));
            } 

            const weapon = chooseWeapon(parseInt(budget));

            const msgEmbeded = successMsgEmbeded(message.author, 
                weapon.imgUrl,
                weapon.name,
                `${weapon.category} - $${weapon.price}`);

            message.channel.send(msgEmbeded);
        }
    },
};