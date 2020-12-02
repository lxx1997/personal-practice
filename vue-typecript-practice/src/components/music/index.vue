<template>
  <div class="video-play">
    <div class="video-play-title">
      <p>【泠鸢翻唱】横竖撇点折 - 泠鸢yousa.mp3 -- {{ status }}</p>
    </div>
    <video :src="videoUrl" :controls="true"></video>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
// 定义require
declare function require(string: any): string
@Component({
  name: 'VideoPlay'
})
export default class headerBarIndex extends Vue {
  private videoUrl: string = require("@/assets/video/【泠鸢翻唱】横竖撇点折 - 泠鸢yousa.mp3")
  private status: string = '已暂停'
  private video!: HTMLVideoElement
  mounted() {
    console.log('mounted')
    this.video = <HTMLVideoElement>document.querySelector('video')
    // 监听播放
    this.video.addEventListener('play', () => {
      this.status = '正在播放'
    })
    // 监听暂停
    this.video.addEventListener('pause', () => {
      this.status = '已暂停'
    })
  }
}
</script>

<style lang="scss" scoped>
.video-play {
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 2000;
  background-color: #ffffff;
  border: 1px solid #e5e5e5;
  padding: 5px 2px;
  border-radius: 15px;
  box-shadow: 2px 2px 2px 2px #ff00ff;
  &-title {
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    p {
      white-space: nowrap;
      animation: textScroll 4s linear infinite normal;
    }
  }
  video {
    height: 50px;
    width: 300px!important;
    outline: none;
  }
}
@keyframes textScroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>