<template>
  <div>
    <img :src="imageUrl" class="drag-image" />
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'DragIndex',
})
export default class extends Vue {
  private imageUrl: string = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606755441967&di=345df16d9340480ccf8c571ff71f153d&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg'
  private imageImg!: HTMLImageElement
  private image = {
    x: null,
    y: null,
  }
  private mouse = {
    x: null,
    y: null
  }
  private isMove: boolean = false

  mounted() {
    this.getImage()
  }

  private getImage() {
    this.imageImg = <HTMLImageElement>document.querySelector('.drag-image')
    this.image.x = this.imageImg.offsetLeft as any
    this.image.y = this.imageImg.offsetTop as any
    document.addEventListener('click', (e) => {
      if(this.isMove) {
        document.onmousemove = null
          this.imageImg.style.marginLeft = 50 + e.offsetX - this.mouse.x + 'px'
          this.imageImg.style.marginTop = 50 + e.offsetY - this.mouse.y + 'px'
      }
      else {
        this.mouse.x = e.offsetX as any
        this.mouse.y = e.offsetY as any
        document.onmousemove = (e) => {
          this.imageImg.style.marginLeft = 50 + e.offsetX - this.mouse.x + 'px'
          this.imageImg.style.marginTop = 50 + e.offsetY - this.mouse.y + 'px'
        }
      }
      this.isMove = !this.isMove
    })
  }
}
</script>

<style lang="scss">
.drag-image {
  width: 100px;
  height: 100px;
  margin-left: 50px;
  margin-top: 50px;
}
</style>