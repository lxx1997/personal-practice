<template>
  <div class="scale-box">
    <div class="scale-img-box">
      <img class="scale-img" src="@/assets/test1.png" alt="" srcset="">
      <div class="scale-img-btn"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { Component, Watch } from 'vue-property-decorator'

  @Component
  export default class TableOperation extends Vue{
    // 存放图片以及限制图片的移动范围
    private scaleBox!: HTMLElement
    // 图片移动容器
    // 图片移动容器
    private scaleImgBox!: HTMLElement
    // 图片拖拽缩放按钮
    private scaleImgBtn!: HTMLElement
    constructor() {
      super()
    }
    // 图片移动容器
    get scaleBoxX():number {
      return this.scaleBox ? this.scaleBox.offsetLeft : 0
    }
    get scaleBoxY():number {
      return this.scaleBox ? this.scaleBox.offsetTop : 0
    }
    mounted() {
       this.scaleBox = <HTMLDivElement>document.querySelector('.scale-box')
    // 图片移动容器
      this.scaleImgBox = <HTMLDivElement>document.querySelector('.scale-img-box')
    // 图片拖拽缩放按钮
      this.scaleImgBtn  = <HTMLDivElement>document.querySelector('.scale-img-btn')
      this.addEventListener()
    }
    private addEventListener() {
      this.scaleImgBox.addEventListener('mousedown', this.mouseDown)
    }
    private mouseDown() {
      console.log('mousedown')
      this.scaleImgBox.addEventListener('mousemove', this.mouseMove)
      this.scaleImgBox.addEventListener('mouseup', this.mouseUp)
    }
    private mouseMove() {
      console.log('mousemove')
    }
    private mouseUp() {
      console.log('mouseup')
      this.scaleImgBox.removeEventListener('mousemove', this.mouseMove)
    }
  }
</script>

<style lang="scss">
  .scale-box {
    position: absolute;
    top: 100px;
    left: 100px;
    width: 500px;
    height: 500px;
    background-color: #f5f5f5;
  }
  .scale-img-box {
    width: 50px;
    height: 50px;
    position: relative;
    .scale-img {
      height: 100%;
      width: 100%;
    }
  }
  .scale-img-btn {
    z-index: 999;
    width: 5px;
    height: 5px;
    bottom: 0;
    right: 0;
    cursor: move;
    position: absolute;
  }
</style>
