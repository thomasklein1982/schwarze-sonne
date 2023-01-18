import Ability, { abilities, getAbilityByID } from "./Ability";
import Clothing from "./Clothing";
import Item from "./Item";
import SpecialItem from "./SpecialItem";
import Weapon from "./Weapon";
import Dragon from "./Dragon";

export interface ExpertSettings{
  noFighterAbility: boolean;
  lesserKarmaCapacity: number;
  woundMalus: boolean;
}

export default class Character{
  strength: number=5;
  dexterity: number=5;
  weapons: Array<Weapon|string>=[];
  clothes: Array<Clothing|string>=[];
  abilities: Array<Ability|string>=[];
  specialItems: Array<SpecialItem|string>=[];
  items: Array<Item|string>=[];
  vitality: number=4;
  dragon: Dragon=new Dragon();
  riderRank: number=1;
  rage: number=0;
  rageComments: string[]=["",""];
  money={
    dinar: 0,
    sekel: 0
  };
  expertSettings={
    noFighterAbility: false,
    lesserKarmaCapacity: 0,
    woundMalus: false
  };
  notes: string[]=[];
  specialNotes=[
    {
      label: "Calderel",
      note: ""
    },
    {
      label: "Wagengasse",
      note: ""
    },
    {
      label: "Einsatz",
      note: ""
    },
    {
      label: "Handspiegel",
      note: ""
    },
    {
      label: "Beistand",
      note: ""
    },
    {
      label: "Benthos",
      note: ""
    }
  ];
  extraDamage: number=0;
  nephatari: number=-1;
  fatePoints;

  constructor(){
    this.fatePoints=[];
    for(let i=1;i<=14;i++){
      let f={
        nr: i,
        found: false
      };
      this.fatePoints.push(f);
    }
  }

  static fromJSON(o:Character){
    let c=new Character();
    c.strength=o.strength;
    c.dexterity=o.dexterity;
    c.fatePoints=o.fatePoints;
    c.abilities=[];
    for(let a of o.abilities){
      let ab=getAbilityByID(a as string);
      if(ab){
        c.abilities.push(ab);
      }
    }
    return c;
  }
}