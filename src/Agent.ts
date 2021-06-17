export interface IAgent {
    name: string;
    role: string;
}
const DUELIST = 'Duelist';
const INITIATOR = 'Initiator';
const CONTROLLER = 'Controller';
const SENTINEL = 'Sentinel';

export const getAgents = (): IAgent[] => {
    return [
        { name: "Astra", role: CONTROLLER } as IAgent,
        { name: "Breach", role: INITIATOR } as IAgent,
        { name: "Brimstone", role: CONTROLLER } as IAgent,
        { name: "Cypher", role: SENTINEL } as IAgent,
        { name: "Jett", role: DUELIST } as IAgent,
        { name: "Killjoy", role: SENTINEL } as IAgent,
        { name: "Omen", role: CONTROLLER } as IAgent,
        { name: "Phoenix", role: DUELIST } as IAgent,
        { name: "Raze", role: DUELIST } as IAgent,
        { name: "Reyna", role: DUELIST } as IAgent,
        { name: "Sage", role: SENTINEL } as IAgent,
        { name: "Skye", role: INITIATOR } as IAgent,
        { name: "Sova", role: INITIATOR } as IAgent,
        { name: "Viper", role: CONTROLLER } as IAgent,
        { name: "Yoru", role: DUELIST } as IAgent
    ]
}