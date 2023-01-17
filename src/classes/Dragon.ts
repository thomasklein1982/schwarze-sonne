import Item from "./Item";

export default class Dragon{
  items: Item[]=[];
  vitality: number=4;
  equipment=[
    {
      name: "Reiterdorn",
      lost: false
    },
    {
      name: "Reiterbogen",
      lost: false
    },
    {
      name: "Reitermantel",
      lost: false
    },
    {
      name: "Drachenhorn",
      lost: false
    }
  ]
}