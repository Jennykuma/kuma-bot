import { Message } from "discord.js";
import { chooseWeapon } from "../helpers/valorant";

module.exports = {
    name: 'weapon',
    description: 'Returns a random weapon base on budget',
    execute(discordClient: any, message: Message, args: Array<string>) {
        if (args.length === 1) {
            const budget = args[0];

            if (!/^[0-9]*$/.test(budget)) return message.reply("Kuma mad . . . 🔫🐻 , put number!!");

            const weapon = chooseWeapon(parseInt(budget));

            message.reply('Kuma chooses **' + weapon.name + '**! 🐻')
        }
    },
};