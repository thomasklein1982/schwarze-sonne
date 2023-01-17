import Ability from "./Ability";
import { getAbility } from "./Ability";

export default class SpecialItem{
  name: string;
  ability: Ability|null;
  sections: string[];
  evolvesFrom: SpecialItem|null;

  constructor(name: string, ability: Ability|null, sections: string[], evolvesFrom: SpecialItem|null){
    this.name=name;
    this.ability=ability;
    this.sections=sections;
    this.evolvesFrom=evolvesFrom;
  }

  setEvolvesFrom(s: SpecialItem): void{
    this.evolvesFrom=s;
  }

  static parse(raw: string): SpecialItem{
    let data=raw.split("/");
    let evolvesFrom: SpecialItem|null=getSpecialItem(data[3]);
    let item=new SpecialItem(data[0],getAbility(data[1]),data[2].split(";"),evolvesFrom);
    return item;
  }
}

export const specialItems: SpecialItem[]=[];
specialItems.push(SpecialItem.parse("Schlangenring//112/"));
specialItems.push(SpecialItem.parse("Seelenurne//213/"));
specialItems.push(SpecialItem.parse("Siegelring//239/"));
specialItems.push(SpecialItem.parse("Perle der Verständigung//269/"));
specialItems.push(SpecialItem.parse("Goldklumpen//339/"));
specialItems.push(SpecialItem.parse("Dublone des Kapitäns//627/"));
specialItems.push(SpecialItem.parse("Schlangenreif//729/"));
specialItems.push(SpecialItem.parse("Baronyak-Pfeil//758/"));
specialItems.push(SpecialItem.parse("Pyramiden-Band//803;834/"));
specialItems.push(SpecialItem.parse("Reiterokular//812/"));
specialItems.push(SpecialItem.parse("Auge der Assassine//928/Reiterokular"));
specialItems.push(SpecialItem.parse("Ramins Talisman/Schutz/957/"));
specialItems.push(SpecialItem.parse("Kathums Seele//969/Seelenurne"));
specialItems.push(SpecialItem.parse("Sabalith-Idol//979/Idol des Hierarchen"));
specialItems.push(SpecialItem.parse("Statuette der Ahnen//B1/mit Kreuz "));
specialItems.push(SpecialItem.parse("Karte des Nachtturms//B2/"));
specialItems.push(SpecialItem.parse("Stern von Feymar//B3/"));
specialItems.push(SpecialItem.parse("Idol des Hierarchen//B17/Statuette der Ahnen"));

export function getSpecialItem(name: string){
  for(let s of specialItems){
    if(s.name===name){
      return s;
    }
  }
  return null;
}
