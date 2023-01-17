import Ability, { getAbility } from './Ability';
import {abilities as allAbilities} from './Ability';

export default class Weapon{
  name: string;
  toHitBonus: number;
  abilities: Ability[];
  sections: string[];

  constructor(name: string, toHitBonus: number, abilities: Ability[], sections: string[]){
    this.name=name;
    this.toHitBonus=toHitBonus;
    this.abilities=abilities;
    this.sections=sections;
  }

  //Schwert/3//42;354;385
  static parse(raw: string): Weapon{
    let data=raw.split("/");
    let abilities: Ability[]=[];
    let names=data[2].split(";");
    for(let n of names){
      let a=getAbility(n);
      if(a){
        abilities.push(a);
      }
    }
    let weapon=new Weapon(data[0],Number.parseInt(data[1]), abilities, data[3].split(";"));
    return weapon;
  }
}

export const weapons=[
  Weapon.parse("Schwert/3//42;354;385"),
Weapon.parse("Messer/1//121"),
Weapon.parse("Dolch/1//123;385;354"),
Weapon.parse("Kurzer Speer/2//126"),
Weapon.parse("Kriegshammer/3//198"),
Weapon.parse("Kurzschwert/2//246;K8;K59"),
Weapon.parse("Menokisches Kurzschwert/3//335"),
Weapon.parse("Morgenstern/3/Geteilter Angriff/354"),
Weapon.parse("Filetiermesser/1//462"),
Weapon.parse("Speer des Soldaten/3//473"),
Weapon.parse("Menokische Glefe/4//494"),
Weapon.parse("Krummsäbel/3//536"),
Weapon.parse("Ugars Mondsichel/4/Karma-Angriff/586"),
Weapon.parse("Degen/3//671"),
Weapon.parse("Monddorn/2/Überraschungsschlag/729"),
Weapon.parse("Breitschwert/4//854"),
Weapon.parse("Nergals Dorn/2/Zweitwaffe/F23"),
Weapon.parse("Schwert des Kapitäns/4/Parade/K41"),
Weapon.parse("Schattenschnitter/5//K77"),
Weapon.parse("Mondsichel des Kesra/0/Karma-Angriff;Starker Karma-Angriff;Mondkalender/B9"),
];