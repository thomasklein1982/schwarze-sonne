import Ability from "./Ability";
import { getAbility } from "./Ability";

export default class SpecialItem{
  id: string;
  name: string;
  ability: Ability|null;
  sections: string[];
  evolvesFrom: SpecialItem|null;

  constructor(id: string,name: string, ability: Ability|null, sections: string[], evolvesFrom: SpecialItem|null){
    this.id=id;
    this.name=name;
    this.ability=ability;
    this.sections=sections;
    this.evolvesFrom=evolvesFrom;
  }

  toJSON():string{
    return this.id;
  }

  setEvolvesFrom(s: SpecialItem): void{
    this.evolvesFrom=s;
  }

  static parse(id: string,raw: string): SpecialItem{
    let data=raw.split("/");
    let evolvesFrom: SpecialItem|null=getSpecialItem(data[3]);
    let item=new SpecialItem(id,data[0],getAbility(data[1]),data[2].split(";"),evolvesFrom);
    return item;
  }
}

export const specialItems: SpecialItem[]=[];
specialItems.push(SpecialItem.parse("sr","Schlangenring//112/"));
specialItems.push(SpecialItem.parse("su","Seelenurne//213/"));
specialItems.push(SpecialItem.parse("sir","Siegelring//239/"));
specialItems.push(SpecialItem.parse("p","Perle der Verständigung//269/"));
specialItems.push(SpecialItem.parse("g","Goldklumpen//339/"));
specialItems.push(SpecialItem.parse("d","Dublone des Kapitäns//627/"));
specialItems.push(SpecialItem.parse("slr","Schlangenreif//729/"));
specialItems.push(SpecialItem.parse("bp","Baronyak-Pfeil//758/"));
specialItems.push(SpecialItem.parse("pb","Pyramiden-Band//803;834/"));
specialItems.push(SpecialItem.parse("ro","Reiterokular//812/"));
specialItems.push(SpecialItem.parse("aa","Auge der Assassine//928/Reiterokular"));
specialItems.push(SpecialItem.parse("rt","Ramins Talisman/Schutz/957/"));
specialItems.push(SpecialItem.parse("ks","Kathums Seele//969/Seelenurne"));
specialItems.push(SpecialItem.parse("si","Sabalith-Idol//979/Idol des Hierarchen"));
specialItems.push(SpecialItem.parse("sa","Statuette der Ahnen//B1/mit Kreuz "));
specialItems.push(SpecialItem.parse("kn","Karte des Nachtturms//B2/"));
specialItems.push(SpecialItem.parse("sf","Stern von Feymar//B3/"));
specialItems.push(SpecialItem.parse("ih","Idol des Hierarchen//B17/Statuette der Ahnen"));

export function getSpecialItem(name: string){
  for(let s of specialItems){
    if(s.name===name){
      return s;
    }
  }
  return null;
}
