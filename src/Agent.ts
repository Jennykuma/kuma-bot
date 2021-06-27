export interface IAgent {
    name: string;
    role: string;
    imgUrl: string;
}
const DUELIST = 'Duelist';
const INITIATOR = 'Initiator';
const CONTROLLER = 'Controller';
const SENTINEL = 'Sentinel';

export const getAgents = (): IAgent[] => {
    return [
        { name: "Astra", role: CONTROLLER, imgUrl: "https://static.wikia.nocookie.net/valorant/images/8/8a/Astra_artwork.png/revision/latest/scale-to-width-down/326?cb=20210302170140" } as IAgent,
        { name: "Breach", role: INITIATOR, imgUrl: "https://static.wikia.nocookie.net/valorant/images/5/5c/Breach_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020225" } as IAgent,
        { name: "Brimstone", role: CONTROLLER, imgUrl: "https://static.wikia.nocookie.net/valorant/images/3/37/Brimstone_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020239" } as IAgent,
        { name: "Cypher", role: SENTINEL, imgUrl: "https://static.wikia.nocookie.net/valorant/images/b/bb/Cypher_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020329" } as IAgent,
        { name: "Jett", role: DUELIST, imgUrl: "https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020209" } as IAgent,
        { name: "Killjoy", role: SENTINEL, imgUrl: "https://static.wikia.nocookie.net/valorant/images/8/8c/Killjoy.png/revision/latest/scale-to-width-down/220?cb=20200729134445" } as IAgent,
        { name: "Omen", role: CONTROLLER, imgUrl: "https://static.wikia.nocookie.net/valorant/images/0/06/Omen_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020233" } as IAgent,
        { name: "Phoenix", role: DUELIST, imgUrl: "https://static.wikia.nocookie.net/valorant/images/f/fa/Phoenix_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020246" } as IAgent,
        { name: "Raze", role: DUELIST, imgUrl: "https://static.wikia.nocookie.net/valorant/images/c/c4/Raze_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020217" } as IAgent,
        { name: "Reyna", role: DUELIST, imgUrl: "https://static.wikia.nocookie.net/valorant/images/4/41/Reyna_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020340" } as IAgent,
        { name: "Sage", role: SENTINEL, imgUrl: "https://static.wikia.nocookie.net/valorant/images/1/1e/Sage_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020306" } as IAgent,
        { name: "Skye", role: INITIATOR, imgUrl: "https://static.wikia.nocookie.net/valorant/images/b/b9/Skye_Keyart_final.png/revision/latest/scale-to-width-down/326?cb=20201013182515" } as IAgent,
        { name: "Sova", role: INITIATOR, imgUrl: "https://static.wikia.nocookie.net/valorant/images/6/61/Sova_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020314" } as IAgent,
        { name: "Viper", role: CONTROLLER, imgUrl: "https://static.wikia.nocookie.net/valorant/images/9/91/Viper_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020322" } as IAgent,
        { name: "Yoru", role: DUELIST, imgUrl: "https://static.wikia.nocookie.net/valorant/images/a/a1/Yoru2.png/revision/latest/scale-to-width-down/326?cb=20210112180407" } as IAgent,
        { name: "KAY/O", role: INITIATOR, imgUrl: "https://static.wikia.nocookie.net/valorant/images/8/83/KAYO_KeyArt.png/revision/latest/scale-to-width-down/587?cb=20210622163116" } as IAgent
    ]
}