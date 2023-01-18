<template>
  <span :style="{display: 'inline-flex', 'flex-direction': 'column'}">
    <Checkbox
      :value="modelValue"
      @input="$emit('update:modelValue', $event.value)"
    />
  </span>
</template>

<script lang="ts">
import Checkbox from "primevue/checkbox";

export default{
  props: {
    modelValue: Boolean,
  },
  emits: [
    "update:modelValue"
  ],
  components: {
    Checkbox
  }
};
</script>