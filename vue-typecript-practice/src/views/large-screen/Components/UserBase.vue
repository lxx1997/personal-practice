<template>
  <card-title>
    <div slot="title">人员库</div>
    <div class="user-base">
      <div class="user-base-number">
        <personal-number class="user-base-number-left" icon-class="yuanzhu" class-name="yuanzhu">
          <span slot="title">人数439</span>
        </personal-number>
        <div class="user-base-number-right">
          <p v-for="(item, index) in unitList" :key="index">{{item.label + '  '}} <span>{{item.value}}</span> 个</p>
        </div>
      </div>
      <ve-histogram 
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
import PersonalNumber from './PersonalNumber.vue'
@Component({
  name: 'UserBase',
  components: {
    CardTitle,
    PersonalNumber
  }
})
export default class extends Vue {
  private unitList = [
    {
      label: '建管单位',
      value: 20
    },
    {
      label: '建管单位',
      value: 20
    },
    {
      label: '建管单位',
      value: 20
    },
    {
      label: '建管单位',
      value: 20
    },
    {
      label: '建管单位',
      value: 20
    },
    {
      label: '建管单位',
      value: 20
    }
  ]
  private chartData = {
    columns: ['unit', '1', '2', '3'],
    rows: [
      { 'unit': '1', '1': 100, '2': 200, '3': 300 },
      { 'unit': '2', '1': 100, '2': 200, '3': 300 },
      { 'unit': '3', '1': 100, '2': 200, '3': 300 },
      { 'unit': '4', '1': 100, '2': 200, '3': 300 },
      { 'unit': '5', '1': 100, '2': 200, '3': 300 },
      { 'unit': '6', '1': 100, '2': 200, '3': 300 }
    ]
  }
  private chartSettings = {
    stack: { 
      '用户': ['1', '2', '3'] 
    }
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
    series: {
      type: 'bar',
      barWidth: 40
    }
  }
}
</script>

<style lang="scss">
.user-base {
  .user-base-number {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #ffffff;
    canvas {
      box-sizing: border-box;
      padding: 0 50px!important;
      width: 100%;
    }
    .user-base-number-left {
      width: 30%!important;
    }
    .user-base-number-right {
      display: flex;
      justify-content: space-evenly;
      flex: 1;
      flex-wrap: wrap;
      p {
        width: 33%;
        line-height: 60px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: keep-all;
        span {
          font-size: 23px;
          color: red;
        }
      }
    }
  }
}
</style>