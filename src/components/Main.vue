<template>
  <div :style="{display: 'flex', 'flex-direction': 'column', flex: 1}">
    <MyMenubar/>
    Test
  </div>
</template>

<script lang="ts">
  import MyMenubar from './MyMenubar.vue';

  export default {
    components: {
      MyMenubar
    }
  }
</script>