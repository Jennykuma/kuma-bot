"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var config_1 = __importDefault(require("./config"));
var Agent_1 = require("./Agent");
var config_json_1 = require("./config.json");
var discordClient = new discord_js_1.Client();
var agents = Agent_1.getAgents();
discordClient.login(config_1.default.TOKEN);
var chooseAgent = function () {
    return agents[Math.floor(Math.random() * agents.length)].name;
};
var chooseAgents = function () {
    var team = new Set();
    while (team.size < 5) {
        team.add(chooseAgent());
    }
    return __spreadArray([], __read(team)).join(', ');
};
var chooseMap = function () {
    return config_json_1.maps[Math.floor(Math.random() * config_json_1.maps.length)];
};
discordClient.on('ready', function () {
    var _a;
    console.log("Logged in as " + ((_a = discordClient === null || discordClient === void 0 ? void 0 : discordClient.user) === null || _a === void 0 ? void 0 : _a.tag) + "!");
});
discordClient.on('message', function (msg) {
    var cmd = msg.content.toLowerCase();
    if (!cmd.startsWith(config_json_1.prefix) || msg.author.bot)
        return;
    if (cmd === config_json_1.prefix + " map") {
        msg.reply('Kuma chooses **' + chooseMap() + '**! Good luck friends 🐻');
    }
    else if (cmd === config_json_1.prefix + " agent") {
        msg.reply('Kuma chooses **' + chooseAgent() + '**! 🐻');
    }
    else if (cmd === config_json_1.prefix + " team") {
        msg.reply('Kuma chooses **' + chooseAgents() + '** in that order! Good luck friends 🐻');
    }
    else if (cmd === config_json_1.prefix + " racist") {
        msg.reply('This is an inclusive community. There is no room for racism here! 😠');
    }
});
