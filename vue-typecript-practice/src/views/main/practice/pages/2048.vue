<template>
  <div>
    <canvas id="canvas-2048"></canvas>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'DragIndex',
})

export default class extends Vue {
  private canvas!: HTMLCanvasElement
  private numberList!: Array<Array<number>>
  private attribute = {
    w: 4,
    h: 4
  }
  mounted() {
    this.initCanvas()
  }

  private initCanvas() {
    this.canvas = <HTMLCanvasElement>document.querySelector('#canvas-2048')
    this.canvas.width = this.attribute.w * 100
    this.canvas.height = this.attribute.h * 100
    const ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>this.canvas.getContext('2d')
    this.initNumber()
    this.paintBlock(ctx)
    this.keyboardListener(ctx)
  }
  // 初始化数组
  private initNumber() {
    this.numberList = []
    for(let i = 0; i< this.attribute.w; i++) {
      let arr = []
      for(let j = 0; j< this.attribute.h; j++) {
        if(i < 2 && j < 1 || i < 1 && j <3 ) {
          arr.push(2)
        } else {
          arr.push(0)
        }
      }
      this.numberList.push(arr)
    }
  }

  // 绘制方块并填充数字
  private paintBlock(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ctx.fillStyle = 'rgb(194, 194, 238)'
    ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    for(let i = 0; i < this.attribute.w; i++) {
      for(let j = 0; j < this.attribute.h; j++) {
        const text = this.numberList[i][j] ? this.numberList[i][j] + '': ''
        ctx.fillStyle = 'rgb(24, 22, 145)'
        ctx.fillRect(10 + 100 * j, 10 + 100 * i, 80, 80)
        ctx.fillStyle = '#ffffff'
        ctx.font = '30px "微软雅黑"'
        ctx.fillText(text , 15 + 100 * j, 60 + 100 * i)
      }
    }
  }

  private keyboardListener(ctx: CanvasRenderingContext2D) {
    document.onkeydown = (e) => {
      switch (e.key){
        case 'ArrowUp':
          this.arrowKeyUp()
          for(let i = 0; i < this.attribute.w; i++) {
            if(this.numberList[i][0] === 0) {
              this.numberList[i][0] = 2
              break;
            }
          }
          this.paintBlock(ctx)
          break;
        case 'ArrowDown':
          this.arrowKeyDown()
          for(let i = this.attribute.w - 1; i >= 0 ; i--) {
            if(this.numberList[i][0] === 0) {
              this.numberList[i][0] = 2
              break;
            }
          }
          this.paintBlock(ctx)
          break;
        case 'ArrowLeft':
          this.arrowKeyLeft()
          for(let i = 0; i < this.attribute.h; i++) {
            if(this.numberList[0][i] === 0) {
              this.numberList[0][i] = 2
              break;
            }
          }
          this.paintBlock(ctx)
          break;
        case 'ArrowRight':
          this.arrowKeyRight()
          // 向
          for(let i = this.attribute.h - 1; i >= 0 ; i--) {
            if(this.numberList[0][i] === 0) {
              this.numberList[0][i] = 2
              break;
            }
          }
          this.paintBlock(ctx)
          break;
      }
    }
  }
  // 按向左键
  private arrowKeyLeft() {
    for(let i = 0; i < this.attribute.w; i++) {
      let flag = 0
      for(let j = 0; j < this.attribute.h; j++) {
        // 判断数组的开头部分是否是以0开始的，如果是后续向前补一位
        if(this.numberList[i][j] === 0 && flag < this.attribute.h) {
          for(let k = j; k < this.attribute.h - 1; k++) {
            this.numberList[i][k] = this.numberList[i][k + 1]
          }
          this.numberList[i][this.attribute.h - 1] = 0
          j--
          flag++
        } else {
          // 相邻的两个相同的数字相加，后续向前进一位
          flag = this.attribute.h
          if(j < this.attribute.h - 1) {
            if(this.numberList[i][j] === this.numberList[i][j + 1]) {
              this.numberList[i][j] += this.numberList[i][j + 1]
              for(let k = j + 1; k < this.attribute.h - 1; k++) {
                this.numberList[i][k] = this.numberList[i][k + 1]
              }
              this.numberList[i][this.attribute.h - 1] = 0
            }
          }
        }
      }
    }
  }

  // 按向右键
  private arrowKeyRight() {
    this.arrowKeyLeft()
    for(let i = this.attribute.w - 1; i >= 0; i--) {
      let flag = 0
      for(let j = this.attribute.h - 1; j >= 0; j--) {
        // 判断数组的开头部分是否是以0开始的，如果是后续向前补一位
        if(this.numberList[i][j] === 0 && flag < this.attribute.h) {
          for(let k = j; k >= 1 ; k--) {
            this.numberList[i][k] = this.numberList[i][k-1]
          }
          this.numberList[i][0] = 0
          j++
          flag++
        } else {
          flag = this.attribute.h
        }
      }
    }
  }
  // 按向上键
  private arrowKeyUp() {
    for(let j = 0; j < this.attribute.h; j++) {
      let flag = 0
      for(let i = 0; i < this.attribute.w; i++) {
        // 判断数组的开头部分是否是以0开始的，如果是后续向前补一位
        if(this.numberList[i][j] === 0 && flag < this.attribute.w) {
          for(let k = i; k < this.attribute.w - 1; k++) {
            this.numberList[k][j] = this.numberList[k + 1][j]
          }
          this.numberList[this.attribute.w - 1][j] = 0
          i--
          flag++
        } else {
          // 相邻的两个相同的数字相加，后续向前进一位
          flag = this.attribute.w
          if(i < this.attribute.w - 1) {
            if(this.numberList[i][j] === this.numberList[i + 1][j]) {
              this.numberList[i][j] += this.numberList[i + 1][j]
              for(let k = i + 1; k < this.attribute.w - 1; k++) {
                this.numberList[k][j] = this.numberList[k + 1][j]
              }
              this.numberList[this.attribute.w - 1][j] = 0
            }
          }
        }
      }
    }
  }
  // 按向下键
  private arrowKeyDown() {
    this.arrowKeyUp()
    for(let j = this.attribute.h - 1; j >= 0; j--) {
      let flag = 0
      for(let i = this.attribute.w - 1; i >= 0; i--) {
        // 判断数组的开头部分是否是以0开始的，如果是后续向前补一位
        if(this.numberList[i][j] === 0 && flag < this.attribute.w) {
          for(let k = i; k >= 1 ; k--) {
            this.numberList[k][j] = this.numberList[k - 1][j]
          }
          this.numberList[0][j] = 0
          i++
          flag++
        } else {
          flag = this.attribute.w
        }
      }
    }
  }
}
</script>

<style lang="scss">
.drag-image {
  width: 100px;
  height: 100px;
  margin-left: 50px;
  margin-top: 50px;
  color: rgb(194, 194, 238);
}
</style>