import Ability, { getAbility } from "./Ability";

export default class Clothing{
  name: string;
  defense: number;
  position: number;
  sections: string[];
  abilities: Ability[];

  constructor(name: string, defense: number, position: number, sections: string[], abilities: Ability[]){
    this.name=name;
    this.defense=defense;
    this.position=position;
    this.sections=sections;
    this.abilities=abilities;
  }

  static parse(raw: string): Clothing{
    let data=raw.split("/");
    let abilities=[];
    let names=data[4].split(";");
    for (const n of names) {
      let a=getAbility(n);
      if(a){
        abilities.push(a);
      }
    }
    let clothing=new Clothing(data[0],Number.parseInt(data[1]), Number.parseInt(data[2]), data[3].split(";"),abilities);
    return clothing;
  }

}

export const clothes: Clothing[]=[
  Clothing.parse("Leinenhemd/0/6/14;54/"),
Clothing.parse("Gefangenengewand/0/6/101/"),
Clothing.parse("Wolltunika/0/6/123/"),
Clothing.parse("Krollriesen-Manschetten/2/5/142/"),
Clothing.parse("Edelgewand/0/6/289/"),
Clothing.parse("Schienen der Bewahrerin/1/2/483/"),
Clothing.parse("Fischersmantel/0/6/462/"),
Clothing.parse("Empire-Uniform/1/4/306/"),
Clothing.parse("Soldatenstiefel/1/3/306/"),
Clothing.parse("Reiterstiefel/2/3/729/"),
Clothing.parse("Kars Sonnenmaske/1/1/796/Karma-Verteidigung"),
Clothing.parse("Beinschienen/1/5/843/"),
Clothing.parse("Panzerschienen/2/2/854/"),
Clothing.parse("Reitermontur/2/4/Z24/"),
Clothing.parse("Sonnenmaske des Kesra/2/1/B12/Karma-Verteidigung;Starke Karma-Verteidigung"),
]