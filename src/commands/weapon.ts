import { Message } from "discord.js";
import { chooseWeapon, chooseImage } from "../helpers/valorant";
import { successMsgEmbeded, failMsgEmbeded } from "../helpers/discord";

module.exports = {
    name: 'weapon',
    description: 'Returns a random weapon base on budget',
    execute(discordClient: any, message: Message, args: Array<string>) {
        if (args.length === 1) {
            const budget = args[0];

            if (!/^[0-9]*$/.test(budget)){
                return message.channel.send(failMsgEmbeded(message.author, "must input number!!"))
                .then(msg => msg.delete({ timeout: 5000}));
            } 

            const weapon = chooseWeapon(parseInt(budget));

            const msgEmeded = successMsgEmbeded(message.author, 
                chooseImage(weapon.name),
                weapon.name,
                `${weapon.category} - $${weapon.price}`);

            message.channel.send(msgEmeded);
        }
    },
};