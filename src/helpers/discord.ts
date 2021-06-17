import { Client, Channel, Message, MessageEmbed ,Collection, User } from 'discord.js';
import fs from 'fs';
import p from 'path';

export const initDiscordClient = (token: string): Client => {
    const discordClient = new Client();
    discordClient.login(token);
    return discordClient;
}

export const getCommandFiles = (discordClient: any, path: string): Array<String> => {
    discordClient.commands = new Collection();
    return fs.readdirSync(p.join(path, 'commands'));
}

export const getChannel = (discordClient: Client, msg: Message): Channel => {
    const channelID = msg.member?.voice.channelID;
    return discordClient.channels.cache.get(channelID!)!;
}

export const getUsers = (channel: any): Array<String> => {
    return channel.members.map((member: any) => member.user);
}

export const successMsgEmbeded = (author: User, imageUrl: string, 
    contentTitle: string, contentBody: string): MessageEmbed => {
    const msgEmeded = new MessageEmbed()
    .setColor('#00ffff')
    .setAuthor(author.username, author.avatarURL() || undefined)
    .addField(contentTitle, contentBody)
    .setImage(imageUrl)
    .setFooter(`Kuma chooses ${contentTitle}! 🐻`,`https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagepngbase64iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQ-5c25ab474761c20eff12f3747706b967.jpg`);

    return msgEmeded;
}

export const failMsgEmbeded = (author: User, errorMessage: string): MessageEmbed => {
    const msgEmeded = new MessageEmbed()
    .setColor('#ff3333')
    .setAuthor(author.username, author.avatarURL() || undefined)
    .addField("Kuma is angry", errorMessage)
    .setImage('https://media1.tenor.com/images/387adb2cfa06323f299aec4ab5e399c7/tenor.gif?itemid=12620072')
    .setFooter("Hmmmppfff!!", "https://i.pinimg.com/originals/99/bd/db/99bddb525be85bb8619a75db8675d268.png");

    return msgEmeded;
}
