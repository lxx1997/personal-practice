<template>
  <div class="about">
    <h1>This is an about page</h1>
    <time-slot>
      <template slot="time">
        {{ timer }}
      </template>
      <template slot="bot-btn">
        <button @click="handleAlert">alert</button>
      </template>
    </time-slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import TimeSlot from '@/components/slot/TimeSlot.vue'
@Component({
  components: {
    TimeSlot
  }
})

export default class About extends Vue{
  private timer: number = Date.now()
  created() {
    this.setTimeInterval()
  }
  private setTimeInterval() {
    setInterval(() => {
      this.timer = Date.now()
    }, 1000)
  }
  private handleAlert() {
    alert(this.timer)
  }
}
</script>