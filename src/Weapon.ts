export interface IWeapon {
    name: string;
    category: string;
    price: Number;
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
        {name: "Classic", category: SIDEARM, price: 0 } as IWeapon,
        {name: "Shorty", category: SIDEARM, price: 200 } as IWeapon,
        {name: "Frenzy", category: SIDEARM, price: 500 } as IWeapon,
        {name: "Ghost", category: SIDEARM, price: 500 } as IWeapon,
        {name: "Sheriff", category: SIDEARM, price: 800 } as IWeapon,
        {name: "Stinger", category: SUBMACHINEGUN, price: 1000 } as IWeapon,
        {name: "Spectre", category: SUBMACHINEGUN, price: 1600 } as IWeapon,
        {name: "Bulldog", category: ASSAULTRIFLE, price: 2100 } as IWeapon,
        {name: "Guardian", category: ASSAULTRIFLE, price: 2400 } as IWeapon,
        {name: "Phantom", category: ASSAULTRIFLE, price: 2900 } as IWeapon,
        {name: "Vandal", category: ASSAULTRIFLE, price: 2900 } as IWeapon,
        {name: "Bucky", category: SHOTGUN, price: 900 } as IWeapon,
        {name: "Judge", category: SHOTGUN, price: 1600 } as IWeapon,
        {name: "Marshal", category: SNIPER, price: 1000 } as IWeapon,
        {name: "Operator", category: SNIPER, price: 5000 } as IWeapon,
        {name: "Tactical Knife", category: MELEE, price:0 } as IWeapon,
        {name: "Ares", category: MACHINEGUN, price: 1600 } as IWeapon,
        {name: "Odin", category: MACHINEGUN, price: 3200 } as IWeapon
    ];
}