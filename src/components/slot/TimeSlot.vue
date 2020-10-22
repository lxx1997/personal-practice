<template>
  <div>
    <slot name="top-btn"></slot>
    <slot name="time"></slot>
    <slot name="bot-btn"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class TimeSlot extends Vue {
  
}
</script>

<style>

</style>