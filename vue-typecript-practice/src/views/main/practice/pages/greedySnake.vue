<template>
  <canvas id="snake-canvas"></canvas>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'SnakeIndex'
})
export default class extends Vue {
  private SnakeCanvas!: HTMLCanvasElement
  // 所有网格，蛇所占用网格用1表示，食物用2表示，其他用0表示
  private grid!: Array<Array<number>>
  private gridX: number = 21
  private gridY: number = 21
  // 蛇所占用的网格
  private snakeLine!: Array<Array<number>>
  // 食物的位置
  private food!: Array<number>
  // 贪吃蛇前进方向
  private arrow: string = 'left'
  mounted() {
    this.SnakeCanvas = <HTMLCanvasElement>document.querySelector('#snake-canvas')
    this.SnakeCanvas.width = this.gridX * 20
    this.SnakeCanvas.height = this.gridY * 20
    this.initCanvas()
  }

  private initCanvas() {
    const ctx = this.SnakeCanvas.getContext('2d') as CanvasRenderingContext2D
    this.initGrid(ctx)
    this.paintCanvas(ctx)
  }

  private paintCanvas(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0,0, this.gridX * 20, this.gridY * 20)
    for(let i = 0; i < this.gridX; i++) {
      for(let j = 0; j < this.gridY; j++) {
          if(this.grid[i][j] === 1) {
            ctx.fillStyle = 'rgb(9, 21, 129)'
            ctx.fillRect(i*20, j*20, 20, 20)
          } else if(this.grid[i][j] === 2) {
            ctx.fillStyle = 'rgb(31, 172, 50)'
            ctx.fillRect(i*20, j*20, 20, 20)
          } else if(this.grid[i][j] === 0) {
            ctx.fillStyle = 'rgb(235, 206, 206)'
            ctx.fillRect(i*20, j*20, 20, 20)
          }
      }
    }
  }

  private initGrid(ctx: CanvasRenderingContext2D) {
    this.snakeLine = [[11,9], [11,10], [11,11], [11,12]]
    this.food = [5,7]
    this.grid = []
    for(let i = 0; i < this.gridX; i++) {
      let arr: Array<number> = []
      for(let j = 0; j < this.gridY; j++) {
        if(this.snakeLine.some(item => {
          return item[0] === i && item[1] === j
        })) {
          arr.push(1)
        } else if(this.food[0] === i && this.food[1] === j) {
          arr.push(2)
        } else {
          arr.push(0)
        }
      }
      this.grid.push(arr)
    }
    console.log(this.grid)
  }
}
</script>

<style lang="scss">
#snake-canvas {
  color: rgb(9, 21, 129);
}
</style>