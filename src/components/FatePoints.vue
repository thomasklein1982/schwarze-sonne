<template>
  <Inplace closable>
    <template #display>
      Schicksalspunkte: {{fatepointsString}}
    </template>
    <template #content>
      <div>Schicksalspunkte:</div>
      <template v-if="character">
        <template v-for="f in character.fatePoints">
          <Button :label="f.nr+''" @click="f.found=!f.found" :class="f.found? 'p-button-primary':'p-button-outlined'"/>
        </template>
      </template>
    </template>
  </Inplace>

</template>

<script lang="ts">
import Inplace from "primevue/inplace";
import Character from "../classes/Character";
import Checkbox from "primevue/checkbox";
import Button from "primevue/button";

export default{
  props: {
    character: Character
  },
  computed: {
    fatepointsString():string{
      if(!this.character) return "";
      let fp=this.character.fatePoints;
      let text=[];
      for(let f of fp){
        if(f.found){
          text.push(f.nr);
        }
      }
      if(text.length>0){
        return text.join(", ");
      }else{
        return "keine";
      }
    }
  },
  data(){
    return {
      fatePoints: []
    };
  },
  components: {
    Inplace,Checkbox,Button
  }
};
</script>