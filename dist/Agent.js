"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAgents = void 0;
var DUELIST = 'Duelist';
var INITIATOR = 'Initiator';
var CONTROLLER = 'Controller';
var SENTINEL = 'Sentinel';
var getAgents = function () {
    return [
        { name: "Astra", role: CONTROLLER },
        { name: "Breach", role: INITIATOR },
        { name: "Brimstone", role: CONTROLLER },
        { name: "Cypher", role: SENTINEL },
        { name: "Jett", role: DUELIST },
        { name: "Killjoy", role: SENTINEL },
        { name: "Omen", role: CONTROLLER },
        { name: "Phoenix", role: DUELIST },
        { name: "Raze", role: DUELIST },
        { name: "Reyna", role: DUELIST },
        { name: "Sage", role: SENTINEL },
        { name: "Skye", role: INITIATOR },
        { name: "Sova", role: INITIATOR },
        { name: "Viper", role: CONTROLLER },
        { name: "Yoru", role: DUELIST }
    ];
};
exports.getAgents = getAgents;
