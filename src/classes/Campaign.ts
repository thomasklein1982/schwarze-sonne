import Character from "./Character";

export interface CampaignInfos{
  dateStarted: number,
  currentChapter: number
}

export default class Campaign{
  dateStarted: number=Date.now();
  characters: Character[]=[new Character()];
  currentChapter: number=0;

  getRecentCharacter():Character{
    return this.characters[this.currentChapter];
  }

  toJSON():Object{
    return this;
  }

  getInfos():CampaignInfos{
    return {
      dateStarted: this.dateStarted,
      currentChapter: this.currentChapter
    };
  }

  static fromJSON(o:Campaign){
    let c=new Campaign();
    c.dateStarted=o.dateStarted;
    c.currentChapter=o.currentChapter;
    c.characters=[];
    for(let ch of o.characters){
      c.characters.push(Character.fromJSON(ch));
    }
    return c;
  }
}