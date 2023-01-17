import Ability from "./Ability";
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
  weapons: Weapon[]=[];
  clothes: Clothing[]=[];
  abilities: Ability[]=[];
  specialItems: SpecialItem[]=[];
  items: Item[]=[];
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
}