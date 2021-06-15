import { Client, Channel, Message, Collection } from 'discord.js';
import fs from 'fs';

export const initDiscordClient = (token: string): Client => {
    const discordClient = new Client();
    discordClient.login(token);
    return discordClient;
}

export const getCommandFiles = (discordClient: any, path: string): Array<String> => {
    discordClient.commands = new Collection();
    return fs.readdirSync(path + "/commands").filter(file => file.endsWith('.ts'));
}

export const getChannel = (discordClient: Client, msg: Message): Channel => {
    const channelID = msg.member?.voice.channelID;
    return discordClient.channels.cache.get(channelID!)!;
}

export const getUsers = (channel: any): Array<String> => {
    return channel.members.map((member: any) => member.user);
}
