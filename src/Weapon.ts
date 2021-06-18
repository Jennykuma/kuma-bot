export interface IWeapon {
    name: string;
    category: string;
    price: Number;
    imgUrl: string;
}
const SIDEARM = 'Side Arm';
const ASSAULTRIFLE = 'Assault Rifle';
const SUBMACHINEGUN = 'Sub Machine Gun';
const MACHINEGUN = 'Machine Gun';
const SNIPER = 'Sniper';
const SHOTGUN = 'Shotgun';
const MELEE = 'Melee';


export const getWeapons = (): IWeapon[] => {
  return [
        {name: 'Classic', category: SIDEARM, price: 0, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/5/57/Classic.png/revision/latest/scale-to-width-down/130?cb=20200404154125'} as IWeapon,
        {name: 'Shorty', category: SIDEARM, price: 200, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/7/77/Shorty.png/revision/latest/scale-to-width-down/170?cb=20200404154222'} as IWeapon,
        {name: 'Frenzy', category: SIDEARM, price: 500, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/f/f1/Frenzy.png/revision/latest/scale-to-width-down/130?cb=20200404154617'} as IWeapon,
        {name: 'Ghost', category: SIDEARM, price: 500, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/a/ab/Ghost.png/revision/latest/scale-to-width-down/170?cb=20200404154731'} as IWeapon,
        {name: 'Sheriff', category: SIDEARM, price: 800, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/3/3e/Sheriff.png/revision/latest/scale-to-width-down/170?cb=20200404154438'} as IWeapon,
        {name: 'Stinger', category: SUBMACHINEGUN, price: 1000, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/b/b6/Stinger.png/revision/latest/scale-to-width-down/200?cb=20200404170849'} as IWeapon,
        {name: 'Spectre', category: SUBMACHINEGUN, price: 1600, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/9/90/Spectre.png/revision/latest/scale-to-width-down/200?cb=20200404170922'} as IWeapon,
        {name: 'Bulldog', category: ASSAULTRIFLE, price: 2100, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/0/07/Bulldog.png/revision/latest/scale-to-width-down/200?cb=20200404171103'} as IWeapon,
        {name: 'Guardian', category: ASSAULTRIFLE, price: 2400, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/f/fd/Guardian.png/revision/latest/scale-to-width-down/200?cb=20200404171224'} as IWeapon,
        {name: 'Phantom', category: ASSAULTRIFLE, price: 2900, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/e/ec/Phantom.png/revision/latest/scale-to-width-down/200?cb=20200404171302'} as IWeapon,
        {name: 'Vandal', category: ASSAULTRIFLE, price: 2900, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/5/56/Vandal.png/revision/latest/scale-to-width-down/200?cb=20200404171348'} as IWeapon,
        {name: 'Bucky', category: SHOTGUN, price: 900, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/e/eb/Bucky.png/revision/latest/scale-to-width-down/200?cb=20200404171832'} as IWeapon,
        {name: 'Judge', category: SHOTGUN, price: 1600, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/8/8a/Judge.png/revision/latest/scale-to-width-down/200?cb=20200404171858'} as IWeapon,
        {name: 'Marshal', category: SNIPER, price: 1000, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/b/b9/Marshal.png/revision/latest/scale-to-width-down/200?cb=20200404172126'} as IWeapon,
        {name: 'Operator', category: SNIPER, price: 5000, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/1/17/Operator.png/revision/latest/scale-to-width-down/200?cb=20200404172152'} as IWeapon,
        {name: 'Tactical Knife', category: MELEE, price: 0, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/d/d8/TacticalKnife.png/revision/latest/scale-to-width-down/200?cb=20200404172248'} as IWeapon,
        {name: 'Ares', category: MACHINEGUN, price: 1600, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/0/05/Ares.png/revision/latest/scale-to-width-down/200?cb=20200404171957'} as IWeapon,
        {name: 'Odin', category: MACHINEGUN, price: 3200, imgUrl: 'https://static.wikia.nocookie.net/valorant/images/5/58/Odin.png/revision/latest/scale-to-width-down/200?cb=20200404172022'} as IWeapon,
  ];
};
