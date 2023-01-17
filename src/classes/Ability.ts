import Character from "./Character";

export default class Ability{
  name: string="";
  description: string="";
  usable: boolean=false;
  sections: string[];
  special: ((c: Character)=>void)|null;

  constructor(name: string,description: string, usable: boolean, sections: string[], special: ((c: Character)=>void)|null){
    this.name=name;
    this.description=description;
    this.usable=usable;
    this.sections=sections;
    this.special=special;
  }

  static parse(raw: string, special: ((c: Character)=>void)|null): Ability{
    let data=raw.split("/");
    let ability=new Ability(data[0],data[2],data[3]==='ja',data[1].split(";"),special);
    return ability;
  }
}

export const abilities=[
  Ability.parse("Geschichtswissen/332//",null),
  Ability.parse("Geschärfte Sinne/302//",null),
  Ability.parse("Vorahnung/302//",null),
  Ability.parse("Geist über Körper/302/Jederzeit: Wandle 1 Punkt Vitalität in 2 Punkte um, die du für die Dauer einer Sektion oder eines Kampfes frei auf Stärke und Geschick verteilen kannst.\nNicht einsetzbar, wenn die Vitalität verletzt oder kritisch ist./ja",null),
  Ability.parse("Atemfreiheit/302//",null),
  Ability.parse("Mentaler Fokus/302//",null),
  Ability.parse("Kriegsführung/329//",null),
  Ability.parse("Macht des Vollmonds/334/Bei Test oder Kampf: Ein Vollmond ist immer ein Erfolg./ja",null),
  Ability.parse("Immunität gegen Sonnenlicht/341//",null),
  Ability.parse("Macht des Xorox/566//",null),
  Ability.parse("Ahimsa/791;866//",null),
  Ability.parse("Kesrani/886/Du stirbst erst, wenn du bei Vitalität 'tot' eine weitere Stufe Vitalität verlierst. Für Experten: Die Abzüge für 'tot' sind wie bei 'kritisch'./",null),
  Ability.parse("Meisterlicher Schütze /K98/für alle Geschick-Tests mit dem Bogen: +3/ja",null),
  Ability.parse("Guter Schütze/K98/für alle Geschick-Tests mit dem Bogen: +2/ja",null),
  Ability.parse("Passabler Schütze/K98/für alle Geschick-Tests mit dem Bogen: +1/ja",null),
  Ability.parse("Meisterlicher Kämpfer/K99/Trefferbonus +3 für alle Angriffe im Nahkampf/",null),
  Ability.parse("Guter Kämpfer/K99/Trefferbonus +2 für alle Angriffe im Nahkampf/",null),
  Ability.parse("Passabler Kämpfer/K99/Trefferbonus +1 für alle Angriffe im Nahkampf/",null),
  Ability.parse("Immunität gegen Hitze/B4//",null),
  Ability.parse("Schattenlauf/B8//",null),
  Ability.parse("Karma-Angriff//Für 1 Karmapunkt gelingt ein Angriff automatisch./ja",null),
  Ability.parse("Geteilter Angriff//Angriff gegen mehrere Gegner verursachen 2 Punkte Schaden, die aber aufgeteilt werden müssen./ja",null),
  Ability.parse("Überraschungsschlag//Der erste gelungene Angriff verursacht 2 Punkte Schaden./ja",null),
  Ability.parse("Zweitwaffe//Kann zusätzlich zu anderer Waffe ausgerüstet werden. Jede KR entscheiden: Zusätzlicher Angriff oder Boni addieren./ja",null),
  Ability.parse("Parade//Bei Stärke 10+: Verteidigung+1/",null),
  Ability.parse("Starker Karma-Angriff//Für 2 Karmapunkte gelingt ein Angriff automatisch und verursacht 2 Punkte Schaden./ja",null),
  Ability.parse("Mondkalender//Trefferbonus entspricht aktueller Mondphase/ja",null),
  Ability.parse("Karma-Verteidigung//Für 1 Karmapunkt gelingt eine Verteidigung automatisch./ja",null),
  Ability.parse("Starke Karma-Verteidigung//Für 2 Karmapunkte gelingt eine Verteidigung automatisch und heilt 1 Stufe Vitalität./ja",null),
  Ability.parse("Schutz//In der 1. Kampfrunde bist du gegen Angriffe immun./ja",null),
];

export function getAbility(name: string):Ability|null{
  for(let a of abilities){
    if(a.name===name){
      return a;
    }
  }
  return null;
}