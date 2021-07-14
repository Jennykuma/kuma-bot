import { MessageEmbed, Message } from "discord.js";
import { prefix } from '../static_data.json';
import { getHelpArguments } from '../helpers/discord';

module.exports = {
	name: 'help',
	description: '❓ See the list of Kuma Bot commands',
	execute(discordClient: any, message: Message, args: Array<string>) {
    const helpEmbed = new MessageEmbed()
      .setTitle('Kuma Bot Command List');

    discordClient.commands.map((command:any) => {
      helpEmbed.addField(command.description, `${prefix} ${command.name}` + getHelpArguments(command));
    });

    message.channel.send(helpEmbed);
	},
};