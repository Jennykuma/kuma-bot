interface IImage {
    name: string;
    url: string;
}

export const getImage = (): IImage[] => {
    return [
        // Weapons
        { name: "Classic", url: "https://static.wikia.nocookie.net/valorant/images/5/57/Classic.png/revision/latest/scale-to-width-down/130?cb=20200404154125"} as IImage,
        { name: "Shorty", url: "https://static.wikia.nocookie.net/valorant/images/7/77/Shorty.png/revision/latest/scale-to-width-down/170?cb=20200404154222" } as IImage,
        { name: "Frenzy", url: "https://static.wikia.nocookie.net/valorant/images/f/f1/Frenzy.png/revision/latest/scale-to-width-down/130?cb=20200404154617" } as IImage,
        { name: "Ghost", url: "https://static.wikia.nocookie.net/valorant/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/170?cb=20200404154731" } as IImage,
        { name: "Sheriff", url: "https://static.wikia.nocookie.net/valorant/images/3/3e/Sheriff.png/revision/latest/scale-to-width-down/170?cb=20200404154438" } as IImage,
        { name: "Stinger", url: "https://static.wikia.nocookie.net/valorant/images/b/b6/Stinger.png/revision/latest/scale-to-width-down/200?cb=20200404170849" } as IImage,
        { name: "Spectre", url: "https://static.wikia.nocookie.net/valorant/images/9/90/Spectre.png/revision/latest/scale-to-width-down/200?cb=20200404170922" } as IImage,
        { name: "Bulldog", url: "https://static.wikia.nocookie.net/valorant/images/0/07/Bulldog.png/revision/latest/scale-to-width-down/200?cb=20200404171103" } as IImage,
        { name: "Guardian", url: "https://static.wikia.nocookie.net/valorant/images/f/fd/Guardian.png/revision/latest/scale-to-width-down/200?cb=20200404171224" } as IImage,
        { name: "Phantom", url: "https://static.wikia.nocookie.net/valorant/images/e/ec/Phantom.png/revision/latest/scale-to-width-down/200?cb=20200404171302" } as IImage,
        { name: "Vandal", url: "https://static.wikia.nocookie.net/valorant/images/5/56/Vandal.png/revision/latest/scale-to-width-down/200?cb=20200404171348" } as IImage,
        { name: "Bucky", url: "https://static.wikia.nocookie.net/valorant/images/e/eb/Bucky.png/revision/latest/scale-to-width-down/200?cb=20200404171832" } as IImage,
        { name: "Judge", url: "https://static.wikia.nocookie.net/valorant/images/8/8a/Judge.png/revision/latest/scale-to-width-down/200?cb=20200404171858" } as IImage,
        { name: "Marshal", url: "https://static.wikia.nocookie.net/valorant/images/b/b9/Marshal.png/revision/latest/scale-to-width-down/200?cb=20200404172126" } as IImage,
        { name: "Operator", url: "https://static.wikia.nocookie.net/valorant/images/1/17/Operator.png/revision/latest/scale-to-width-down/200?cb=20200404172152" } as IImage,
        { name: "Tactical Knife", url: "https://static.wikia.nocookie.net/valorant/images/d/d8/TacticalKnife.png/revision/latest/scale-to-width-down/200?cb=20200404172248" } as IImage,
        { name: "Ares", url: "https://static.wikia.nocookie.net/valorant/images/0/05/Ares.png/revision/latest/scale-to-width-down/200?cb=20200404171957" } as IImage,
        { name: "Odin", url: "https://static.wikia.nocookie.net/valorant/images/5/58/Odin.png/revision/latest/scale-to-width-down/200?cb=20200404172022" } as IImage,
        
        // Agents 
        { name: "Astra", url: "https://static.wikia.nocookie.net/valorant/images/8/8a/Astra_artwork.png/revision/latest/scale-to-width-down/326?cb=20210302170140"} as IImage,
        { name: "Breach", url: "https://static.wikia.nocookie.net/valorant/images/5/5c/Breach_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020225"} as IImage,
        { name: "Brimstone", url: "https://static.wikia.nocookie.net/valorant/images/3/37/Brimstone_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020239"} as IImage,
        { name: "Cypher", url: "https://static.wikia.nocookie.net/valorant/images/b/bb/Cypher_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020329"} as IImage,
        { name: "Jett", url: "https://static.wikia.nocookie.net/valorant/images/7/79/Jett_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020209"} as IImage,
        { name: "Killjoy", url: "https://static.wikia.nocookie.net/valorant/images/8/8c/Killjoy.png/revision/latest/scale-to-width-down/220?cb=20200729134445"} as IImage,
        { name: "Omen", url: "https://static.wikia.nocookie.net/valorant/images/0/06/Omen_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020233"} as IImage,
        { name: "Phoenix", url: "https://static.wikia.nocookie.net/valorant/images/f/fa/Phoenix_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020246"} as IImage,
        { name: "Raze", url: "https://static.wikia.nocookie.net/valorant/images/c/c4/Raze_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020217"} as IImage,
        { name: "Reyna", url: "https://static.wikia.nocookie.net/valorant/images/4/41/Reyna_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020340"} as IImage,
        { name: "Sage", url: "https://static.wikia.nocookie.net/valorant/images/1/1e/Sage_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020306"} as IImage,
        { name: "Skye", url: "https://static.wikia.nocookie.net/valorant/images/b/b9/Skye_Keyart_final.png/revision/latest/scale-to-width-down/326?cb=20201013182515"} as IImage,
        { name: "Sova", url: "https://static.wikia.nocookie.net/valorant/images/6/61/Sova_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020314"} as IImage,
        { name: "Viper", url: "https://static.wikia.nocookie.net/valorant/images/9/91/Viper_artwork.png/revision/latest/scale-to-width-down/326?cb=20200602020322"} as IImage,
        { name: "Yoru", url: "https://static.wikia.nocookie.net/valorant/images/a/a1/Yoru2.png/revision/latest/scale-to-width-down/326?cb=20210112180407"} as IImage


    ]
}