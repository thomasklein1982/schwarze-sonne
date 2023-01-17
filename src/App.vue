<script lang="ts">
import Main from './components/Main.vue';

export default{
  data: ()=>{
    return {
      version: "0.0"
    }
  },
  components: {
    Main
  }
}
</script>

<template>
  <div :style="{display: 'flex', 'flex-direction': 'column'}" style="width: 100%; height: 100%; overflow: hidden">
    <Main/>  
  </div>
</template>