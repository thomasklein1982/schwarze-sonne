import Ability, { getAbilityByID } from './Ability';
import {abilities as allAbilities} from './Ability';

export default class Weapon{
  id: string;
  name: string;
  toHitBonus: number;
  abilities: Ability[];
  sections: string[];

  constructor(id: string,name: string, toHitBonus: number, abilities: Ability[], sections: string[]){
    this.id=id;
    this.name=name;
    this.toHitBonus=toHitBonus;
    this.abilities=abilities;
    this.sections=sections;
  }

  toJSON():string{
    return this.id;
  }

  static parse(id:string,raw: string): Weapon{
    let data=raw.split("/");
    let abilities: Ability[]=[];
    let names=data[2].split(";");
    for(let n of names){
      let a=getAbilityByID(n);
      if(a){
        abilities.push(a);
      }
    }
    let weapon=new Weapon(id,data[0],Number.parseInt(data[1]), abilities, data[3].split(";"));
    return weapon;
  }
}

export const weapons=[
  Weapon.parse("s","Schwert/3//42;354;385"),
Weapon.parse("m","Messer/1//121"),
Weapon.parse("d","Dolch/1//123;385;354"),
Weapon.parse("ks","Kurzer Speer/2//126"),
Weapon.parse("kh","Kriegshammer/3//198"),
Weapon.parse("ks","Kurzschwert/2//246;K8;K59"),
Weapon.parse("mks","Menokisches Kurzschwert/3//335"),
Weapon.parse("ms","Morgenstern/3/geteilterangriff/354"),
Weapon.parse("fm","Filetiermesser/1//462"),
Weapon.parse("ss","Speer des Soldaten/3//473"),
Weapon.parse("g","Menokische Glefe/4//494"),
Weapon.parse("kr","Krummsäbel/3//536"),
Weapon.parse("mo","Ugars Mondsichel/4/karmaangriff/586"),
Weapon.parse("de","Degen/3//671"),
Weapon.parse("md","Monddorn/2/ueberraschungsschlag/729"),
Weapon.parse("bs","Breitschwert/4//854"),
Weapon.parse("nd","Nergals Dorn/2/zweitwaffe/F23"),
Weapon.parse("sk","Schwert des Kapitäns/4/parade/K41"),
Weapon.parse("sc","Schattenschnitter/5//K77"),
Weapon.parse("ke","Mondsichel des Kesra/0/karmaangriff;starkerkarmaangriff;mondkalender/B9"),
];