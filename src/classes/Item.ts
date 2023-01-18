export default class Item{
  id: string;
  name: string;
  sections: string[];
  description: string;
  count: number;
  usable: boolean;

  constructor(id: string,name: string, sections: string[],description: string,count: number, usable: boolean){
    this.id=id;
    this.name=name;
    this.sections=sections;
    this.description=description;
    this.count=count;
    this.usable=usable;
  }

  toJSON():string{
    return this.id;
  }

  static parse(id: number,raw: string): Item{
    let data=raw.split("/");
    let count=data[3];
    let c=0;
    if(count.length===0){
      c=0;
    }else{
      c=Number.parseInt(count);
    }
    let item=new Item(id+"",data[0],data[2].split(";"),data[1],c,data[4]==="ja");
    return item;
  }
}

export const items=[
  Item.parse(1,"Öllaterne//42//"),
Item.parse(2,"Gebetbuch//54//"),
Item.parse(3,"Getrocknetes Fleisch//123/2/"),
Item.parse(4,"Äpfel//123/3/"),
Item.parse(5,"Flasche Pflaumenschnaps//123//"),
Item.parse(6,"Schlüsselbund des Wärters//125;K8;K59//"),
Item.parse(7,"Drachenschüssel//151//"),
Item.parse(8,"Soldatenplakette//174//"),
Item.parse(9,"Verschmierter Plan//224//"),
Item.parse(10,"Schlüsselbund des Wärters//241//"),
Item.parse(11,"Qik-Speichel/Einmalig für 1 Kampf: nach erstem eigenen Treffer wird der Angriff des Gegners um 2 reduziert. Nach Anwendung abstreichen./283//ja"),
Item.parse(12,"Wolldecke//354;385//"),
Item.parse(13,"Beinflöte//354;385//"),
Item.parse(14,"Tabak aus Kyphi//354;385//"),
Item.parse(15,"Reperaturset//354;385//"),
Item.parse(16,"Verbandsmaterial/Heilt einmalig 1 Stufe Vitalität bis höchstens normal. Nicht im Kampf einsetzbar./354;385//ja"),
Item.parse(17,"Schwerer Sprengsatz//389//"),
Item.parse(18,"Sprengsatz//396//"),
Item.parse(19,"einfacher Heiltrank/Heilt einmalig 2 Stufen Vitalität/412//ja"),
Item.parse(20,"Fäustel//449//"),
Item.parse(21,"Bolzenlöser//449//"),
Item.parse(22,"Zange//449//"),
Item.parse(23,"Weidenkorb//462//"),
Item.parse(24,"Branntwein//462//"),
Item.parse(25,"Feige aus Rojah//503//"),
Item.parse(26,"Rote Gebetskerze//536//"),
Item.parse(27,"starker Obsidiantrank/Heilt einmalig 3 Stufen Vitalität, sogar auf fit./551//ja"),
Item.parse(28,"Laterne//551//"),
Item.parse(29,"20 Fuß Seil//551//"),
Item.parse(30,"Handspiegel//632//"),
Item.parse(31,"Bronzeflasche//671//"),
Item.parse(32,"Kletterhaken//671/12/"),
Item.parse(33,"Blendlaterne//671//"),
Item.parse(34,"Flasche Basaltöl/Erhöht einmalig Stärke um 2 für die aktuelle und die nächste Sektion. Nicht im Kampf anwendbar./729//ja"),
Item.parse(35,"beschädigtes Okular//732//"),
Item.parse(36,"Betäubungselixier/für Experten: einmalig einsetzen, um in einem kompletten Kapitel Abzüge wegen niedriger Vitalität zu ignorieren./842//"),
Item.parse(37,"Sonnenschlüssel//854//"),
Item.parse(38,"Eisrosenessenz/Heiltrank für Menschen/854//ja"),
];