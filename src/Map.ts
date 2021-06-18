export interface IMap {
    name: string;
    location: string;
    imgUrl: string;
}

export const getMaps = (): IMap[] => {
    return[
        {name: "Ascent", location: "Venice, Italy", imgUrl: "https://static.wikia.nocookie.net/valorant/images/e/e7/Loading_Screen_Ascent.png/revision/latest/scale-to-width-down/350?cb=20200607180020"},
        {name: "Bind", location: "Rabat, Morocco", imgUrl: "https://static.wikia.nocookie.net/valorant/images/2/23/Loading_Screen_Bind.png/revision/latest/scale-to-width-down/350?cb=20200620202316"},
        {name: "Breeze", location: "Atlantic Ocean", imgUrl: "https://static.wikia.nocookie.net/valorant/images/1/1e/Valorant_Loading_Breeze.png/revision/latest/scale-to-width-down/350?cb=20210427160616"},
        {name: "Haven", location: "Thrimphu, Bhutan", imgUrl: "https://static.wikia.nocookie.net/valorant/images/7/70/Loading_Screen_Haven.png/revision/latest/scale-to-width-down/350?cb=20200620202335"},
        {name: "Split", location: "Shibuya, Tokyo, Japan", imgUrl: "https://static.wikia.nocookie.net/valorant/images/d/d6/Loading_Screen_Split.png/revision/latest/scale-to-width-down/350?cb=20200620202349"},
        {name: "Icebox", location: "Bennett Island, Sakha, Russia", imgUrl: "https://static.wikia.nocookie.net/valorant/images/3/34/Loading_Icebox.png/revision/latest/scale-to-width-down/350?cb=20201015084446"}
    ];
}