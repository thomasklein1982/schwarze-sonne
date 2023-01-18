<template>
  <div :style="{display: 'flex', 'flex-direction': 'column', flex: 1}">
    <template v-if="campaign">
      <MyMenubar/>
      <ScrollPanel :style="{flex: 1}" style="padding: 0.2rem">
        <CharacterSheet :character="campaign.getRecentCharacter()"/>
      </ScrollPanel>
    </template>
  </div>
</template>

<script lang="ts">
import { PropType } from 'vue';
import MyMenubar from './MyMenubar.vue';
import Character from '../classes/Character';
import CharacterSheet from './CharacterSheet.vue';
import ScrollPanel from 'primevue/scrollpanel';
import Campaign from '../classes/Campaign';
import { loadItem, saveItem } from '../functions/storage';
import {CampaignInfos} from '../classes/Campaign';

interface AllCampaignInfos{
  currentCampaignIndex: number,
  infos: CampaignInfos[]
}

export default {
  data(){
    return {
      campaign: null as Campaign|null,
      campaignInfos: {
        currentCampaignIndex: 0,
        infos: [] as CampaignInfos[]
      } as AllCampaignInfos,
      STORAGE_KEYS: {
        campaignInfos: "BLACK_SUN_CAMPAIGN_INFOS",
        campaignPrefix: "BLACK_SUN_CAMPAIGN_"
      }
    };
  },
  async mounted(){
    setInterval(()=>{
      this.saveCampaignLocally();
    },2000);
    let value=await loadItem(this.STORAGE_KEYS.campaignInfos);
    if(!value){
      this.campaign=new Campaign();
      return;
    } 
    let campaignInfos=value as AllCampaignInfos;
    this.campaignInfos.currentCampaignIndex=campaignInfos.currentCampaignIndex;
    this.campaignInfos.infos=campaignInfos.infos;
    if(this.campaignInfos.currentCampaignIndex<0){
      this.campaignInfos.currentCampaignIndex=0;
    }
    let infos=this.campaignInfos.infos[this.campaignInfos.currentCampaignIndex];
    if(!infos){
      this.campaign=new Campaign();
      return;
    }
    value=await loadItem(this.STORAGE_KEYS.campaignPrefix+infos.dateStarted);
    if(!value){
      this.campaign=new Campaign();
      return;
    }
    this.campaign=Campaign.fromJSON(value as Campaign);
  },
  methods: {
    async saveCampaignLocally(){
      if(!this.campaign) return;
      let infos=this.campaign.getInfos();
      this.campaignInfos.infos[this.campaignInfos.currentCampaignIndex]=this.campaign.getInfos();
      saveItem(this.STORAGE_KEYS.campaignInfos,this.campaignInfos);
      saveItem(this.STORAGE_KEYS.campaignPrefix+infos.dateStarted,this.campaign);
    }
  },
  components: {
    MyMenubar, CharacterSheet, ScrollPanel
  }
}
</script>