import Ability, { getAbility } from "./Ability";

export default class Clothing{
  id: string;
  name: string;
  defense: number;
  position: number;
  sections: string[];
  abilities: Ability[];

  constructor(id: string,name: string, defense: number, position: number, sections: string[], abilities: Ability[]){
    this.id=id;
    this.name=name;
    this.defense=defense;
    this.position=position;
    this.sections=sections;
    this.abilities=abilities;
  }

  toJSON():string{
    return this.id;
  }

  static parse(id:string,raw: string): Clothing{
    let data=raw.split("/");
    let abilities=[];
    let names=data[4].split(";");
    for (const n of names) {
      let a=getAbility(n);
      if(a){
        abilities.push(a);
      }
    }
    let clothing=new Clothing(id,data[0],Number.parseInt(data[1]), Number.parseInt(data[2]), data[3].split(";"),abilities);
    return clothing;
  }

}

export const clothes: Clothing[]=[
  Clothing.parse("lh","Leinenhemd/0/6/14;54/"),
Clothing.parse("gw","Gefangenengewand/0/6/101/"),
Clothing.parse("wt","Wolltunika/0/6/123/"),
Clothing.parse("km","Krollriesen-Manschetten/2/5/142/"),
Clothing.parse("eg","Edelgewand/0/6/289/"),
Clothing.parse("sb","Schienen der Bewahrerin/1/2/483/"),
Clothing.parse("fm","Fischersmantel/0/6/462/"),
Clothing.parse("eu","Empire-Uniform/1/4/306/"),
Clothing.parse("ss","Soldatenstiefel/1/3/306/"),
Clothing.parse("rs","Reiterstiefel/2/3/729/"),
Clothing.parse("ks","Kars Sonnenmaske/1/1/796/Karma-Verteidigung"),
Clothing.parse("bs","Beinschienen/1/5/843/"),
Clothing.parse("ps","Panzerschienen/2/2/854/"),
Clothing.parse("rm","Reitermontur/2/4/Z24/"),
Clothing.parse("sk","Sonnenmaske des Kesra/2/1/B12/Karma-Verteidigung;Starke Karma-Verteidigung"),
]