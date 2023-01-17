export default class Item{
  name: string;
  sections: string[];
  description: string;
  count: number;
  usable: boolean;

  constructor(name: string, sections: string[],description: string,count: number, usable: boolean){
    this.name=name;
    this.sections=sections;
    this.description=description;
    this.count=count;
    this.usable=usable;
  }

  static parse(raw: string): Item{
    let data=raw.split("/");
    let count=data[3];
    let c=0;
    if(count.length===0){
      c=0;
    }else{
      c=Number.parseInt(count);
    }
    let item=new Item(data[0],data[2].split(";"),data[1],c,data[4]==="ja");
    return item;
  }
}

export const items=[
  Item.parse("Öllaterne//42//"),
Item.parse("Gebetbuch//54//"),
Item.parse("Getrocknetes Fleisch//123/2/"),
Item.parse("Äpfel//123/3/"),
Item.parse("Flasche Pflaumenschnaps//123//"),
Item.parse("Schlüsselbund des Wärters//125;K8;K59//"),
Item.parse("Drachenschüssel//151//"),
Item.parse("Soldatenplakette//174//"),
Item.parse("Verschmierter Plan//224//"),
Item.parse("Schlüsselbund des Wärters//241//"),
Item.parse("Qik-Speichel/Einmalig für 1 Kampf: nach erstem eigenen Treffer wird der Angriff des Gegners um 2 reduziert. Nach Anwendung abstreichen./283//ja"),
Item.parse("Wolldecke//354;385//"),
Item.parse("Beinflöte//354;385//"),
Item.parse("Tabak aus Kyphi//354;385//"),
Item.parse("Reperaturset//354;385//"),
Item.parse("Verbandsmaterial/Heilt einmalig 1 Stufe Vitalität bis höchstens normal. Nicht im Kampf einsetzbar./354;385//ja"),
Item.parse("Schwerer Sprengsatz//389//"),
Item.parse("Sprengsatz//396//"),
Item.parse("einfacher Heiltrank/Heilt einmalig 2 Stufen Vitalität/412//ja"),
Item.parse("Fäustel//449//"),
Item.parse("Bolzenlöser//449//"),
Item.parse("Zange//449//"),
Item.parse("Weidenkorb//462//"),
Item.parse("Branntwein//462//"),
Item.parse("Feige aus Rojah//503//"),
Item.parse("Rote Gebetskerze//536//"),
Item.parse("starker Obsidiantrank/Heilt einmalig 3 Stufen Vitalität, sogar auf fit./551//ja"),
Item.parse("Laterne//551//"),
Item.parse("20 Fuß Seil//551//"),
Item.parse("Handspiegel//632//"),
Item.parse("Bronzeflasche//671//"),
Item.parse("Kletterhaken//671/12/"),
Item.parse("Blendlaterne//671//"),
Item.parse("Flasche Basaltöl/Erhöht einmalig Stärke um 2 für die aktuelle und die nächste Sektion. Nicht im Kampf anwendbar./729//ja"),
Item.parse("beschädigtes Okular//732//"),
Item.parse("Betäubungselixier/für Experten: einmalig einsetzen, um in einem kompletten Kapitel Abzüge wegen niedriger Vitalität zu ignorieren./842//"),
Item.parse("Sonnenschlüssel//854//"),
Item.parse("Eisrosenessenz/Heiltrank für Menschen/854//ja"),
];