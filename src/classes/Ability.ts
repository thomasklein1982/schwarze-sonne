import Character from "./Character";

export default class Ability{
  id: string;
  name: string="";
  description: string="";
  usable: boolean=false;
  sections: string[];
  special: ((c: Character)=>void)|null;

  constructor(id: string,name: string,description: string, usable: boolean, sections: string[], special: ((c: Character)=>void)|null){
    this.id=id;
    this.name=name;
    this.description=description;
    this.usable=usable;
    this.sections=sections;
    this.special=special;
  }

  toJSON():string{
    return this.id;
  }

  static parse(id:string,raw: string, special: ((c: Character)=>void)|null): Ability{
    let data=raw.split("/");
    let ability=new Ability(id,data[0],data[2],data[3]==='ja',data[1].split(";"),special);
    return ability;
  }
}

export const abilities=[
  Ability.parse("gw","Geschichtswissen/332//",null),
  Ability.parse("gs","Geschärfte Sinne/302//",null),
  Ability.parse("va","Vorahnung/302//",null),
  Ability.parse("gk","Geist über Körper/302/Jederzeit: Wandle 1 Punkt Vitalität in 2 Punkte um, die du für die Dauer einer Sektion oder eines Kampfes frei auf Stärke und Geschick verteilen kannst.\nNicht einsetzbar, wenn die Vitalität verletzt oder kritisch ist./ja",null),
  Ability.parse("af","Atemfreiheit/302//",null),
  Ability.parse("mf","Mentaler Fokus/302//",null),
  Ability.parse("kf","Kriegsführung/329//",null),
  Ability.parse("mv","Macht des Vollmonds/334/Bei Test oder Kampf: Ein Vollmond ist immer ein Erfolg./ja",null),
  Ability.parse("is","Immunität gegen Sonnenlicht/341//",null),
  Ability.parse("mx","Macht des Xorox/566//",null),
  Ability.parse("ah","Ahimsa/791;866//",null),
  Ability.parse("ke","Kesrani/886/Du stirbst erst, wenn du bei Vitalität 'tot' eine weitere Stufe Vitalität verlierst. Für Experten: Die Abzüge für 'tot' sind wie bei 'kritisch'./",null),
  Ability.parse("ms","Meisterlicher Schütze /K98/für alle Geschick-Tests mit dem Bogen: +3/ja",null),
  Ability.parse("gs","Guter Schütze/K98/für alle Geschick-Tests mit dem Bogen: +2/ja",null),
  Ability.parse("ps","Passabler Schütze/K98/für alle Geschick-Tests mit dem Bogen: +1/ja",null),
  Ability.parse("mk","Meisterlicher Kämpfer/K99/Trefferbonus +3 für alle Angriffe im Nahkampf/",null),
  Ability.parse("gk","Guter Kämpfer/K99/Trefferbonus +2 für alle Angriffe im Nahkampf/",null),
  Ability.parse("pk","Passabler Kämpfer/K99/Trefferbonus +1 für alle Angriffe im Nahkampf/",null),
  Ability.parse("ih","Immunität gegen Hitze/B4//",null),
  Ability.parse("sl","Schattenlauf/B8//",null),
  Ability.parse("karmaangriff","Karma-Angriff//Für 1 Karmapunkt gelingt ein Angriff automatisch./ja",null),
  Ability.parse("geteilterangriff","Geteilter Angriff//Angriff gegen mehrere Gegner verursachen 2 Punkte Schaden, die aber aufgeteilt werden müssen./ja",null),
  Ability.parse("ueberraschung","Überraschungsschlag//Der erste gelungene Angriff verursacht 2 Punkte Schaden./ja",null),
  Ability.parse("zweitwaffe","Zweitwaffe//Kann zusätzlich zu anderer Waffe ausgerüstet werden. Jede KR entscheiden: Zusätzlicher Angriff oder Boni addieren./ja",null),
  Ability.parse("parade","Parade//Bei Stärke 10+: Verteidigung+1/",null),
  Ability.parse("starkerkarmaangriff","Starker Karma-Angriff//Für 2 Karmapunkte gelingt ein Angriff automatisch und verursacht 2 Punkte Schaden./ja",null),
  Ability.parse("mondkalender","Mondkalender//Trefferbonus entspricht aktueller Mondphase/ja",null),
  Ability.parse("karmaverteidigung","Karma-Verteidigung//Für 1 Karmapunkt gelingt eine Verteidigung automatisch./ja",null),
  Ability.parse("starkekarmaverteidigung","Starke Karma-Verteidigung//Für 2 Karmapunkte gelingt eine Verteidigung automatisch und heilt 1 Stufe Vitalität./ja",null),
  Ability.parse("schutz","Schutz//In der 1. Kampfrunde bist du gegen Angriffe immun./ja",null),
];

export function getAbilityByName(name: string):Ability|null{
  for(let a of abilities){
    if(a.name===name){
      return a;
    }
  }
  return null;
}

export function getAbilityByID(id: string):Ability|null{
  for(let a of abilities){
    if(a.id===id){
      return a;
    }
  }
  return null;
}