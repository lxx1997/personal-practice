<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
@Component({
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