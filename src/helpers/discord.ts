import { Client, Channel, Message } from 'discord.js';

export const initDiscordClient = (token:string) : Client => {
    const discordClient = new Client();
    discordClient.login(token);
    return discordClient;
}

export const getChannel = (discordClient:Client, msg:Message) : Channel => {
    const channelID = msg.member?.voice.channelID;
    return discordClient.channels.cache.get(channelID!)!;
}

export const getUsers = (channel:any) : Array<String> => {
    return channel.members.map((member: any) => member.user);
}
