<template>
  <FatePoints :character="character"/>

</template>

<script lang="ts">
import Character from '../classes/Character';
import FatePoints from './FatePoints.vue';

export default {
  props: {
    character: Character
  },
  components: {
    FatePoints
  }
}
</script>