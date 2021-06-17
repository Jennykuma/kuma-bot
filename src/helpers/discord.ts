import { Client, Channel, Message, MessageEmbed ,Collection, User } from 'discord.js';
import { ANGRY_BEAR_GIF, ANGRY_BEAR_STATIC, VALORANT_LOGO } from '../properties';
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
    .setFooter(`Kuma chooses ${contentTitle}! 🐻`,VALORANT_LOGO);

    return msgEmeded;
}

export const failMsgEmbeded = (author: User, errorMessage: string): MessageEmbed => {
    const msgEmeded = new MessageEmbed()
    .setColor('#ff3333')
    .setAuthor(author.username, author.avatarURL() || undefined)
    .addField("Kuma is angry", errorMessage)
    .setImage(ANGRY_BEAR_GIF)
    .setFooter("Hmmmppfff!!", ANGRY_BEAR_STATIC);

    return msgEmeded;
}
