<template>
  <card-title>
    <div slot="title">人员</div>
    <div class="work-team">
      <div class="work-team-select">
        <p>班组数统计</p>
        <el-radio-group v-model="date" @change="handleChange">
          <el-radio-button :label="7">最近一周</el-radio-button>
          <el-radio-button :label="14">最近两周</el-radio-button>
          <el-radio-button :label="30">最近一月</el-radio-button>
        </el-radio-group>
      </div>
      <ve-line 
        :data="chartData"
        :settings="chartSettings" 
        :extend="entends"
      />
    </div>
  </card-title>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import CardTitle from './CardTiltle.vue'
const defaultChartData =  {
  columns: ['unit', '1', '2', '3'],
  rows: [
    { 'unit': '1', '1': 100, '2': 230, '3': 300 },
    { 'unit': '2', '1': 120, '2': 260, '3': 300 },
    { 'unit': '3', '1': 150, '2': 23, '3': 300 },
    { 'unit': '4', '1': 40, '2': 254, '3': 300 },
    { 'unit': '5', '1': 70, '2': 100, '3': 300 },
    { 'unit': '6', '1': 80, '2': 400, '3': 300 }
  ]
}
@Component({
  name: 'UserBase',
  components: {
    CardTitle,
  }
})
export default class extends Vue {
  private date: number = 7
  private chartData = JSON.parse(JSON.stringify(defaultChartData))
  private chartSettings = {
    metrics: ['1', '2'],
    dimension: ['unit']
  }
  private entends = {
    legend: {
      textStyle: {
        color: '#ffffff'
      }
    },
    xAxis: {
      axisLabel: {
        color: '#ffffff'
      }
    },
    yAxis: {
      axisLabel: {
        color: '#ffffff'
      }
    },
  }

  private handleChange(value) {
    console.log(value, this.date)
    this.changeLineDate()
  }
  
  private changeLineDate() {
    if(this.date === 7) {
      this.chartData =JSON.parse(JSON.stringify(defaultChartData))
    } else if(this.date === 14) {
      this.chartData =JSON.parse(JSON.stringify(defaultChartData))
      this.chartData.rows = this.chartData.rows.map(item => {
        item['1'] += item['1']
        item['2'] += item['2']
        return item
      })
    } else {
      this.chartData =JSON.parse(JSON.stringify(defaultChartData))
      this.chartData.rows = this.chartData.rows.map(item => {
        item['1'] = item['1'] * 3
        item['2'] = item['2'] * 3
        return item
      })
    }
  }
}
</script>

<style lang="scss">
.work-team {
  .work-team-select {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    line-height: 40px;
    padding: 0 20px;
    .el-radio-group .el-radio-button span {
      background-color: rgba(0, 0, 0, 0)!important;
      color: #ffffff;
    }
    .is-active {
      background-color: #301fcc;
    }
  }
  canvas {
    width: 100%;
    box-sizing: border-box;
    padding: 0 30px!important;
  }
}
</style>