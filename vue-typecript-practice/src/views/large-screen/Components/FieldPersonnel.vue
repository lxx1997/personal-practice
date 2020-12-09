
<template>
  <card-title class="field-personnel-container">
    <div slot="title">
      hhhhhhhh
    </div>
    <dv-loading class="field-personnel" v-if="loading"></dv-loading>
    <div v-else class="field-personnel">
      <div class="field-personnel-date">
        <el-date-picker v-model="date" :clearable="false" value-format="yyyy-MM-dd" format="yyyy-MM-dd" size="small" @change="handleTimeChange" />
        <div class="clear-both"></div>
      </div>
      <div class="field-personnel-svg">
        <personal-number v-for="i in [1,2,3]" :key="i" icon-class="yuanzhu" class-name="yuanzhu">
          <span slot="title">人数{{i}}</span>
        </personal-number>
      </div>
      <div class="field-personnel-ring">
        <ve-ring 
          ref="chart-ring1"
          style="height: 250px;"
          class="field-personnel-ring1"
          :data="departData"
          :extend="extendSetting"
          :settings="departSettings"
        />
        <p></p>
        <ve-ring
          ref="chart-ring2"
          class="field-personnel-ring2"
          :data="departData"
          :extend="extendSetting"
          :settings="departSettings"
        />
      </div>
    </div>
  </card-title>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import CardTitle from './CardTiltle.vue'
import PersonalNumber from './PersonalNumber.vue'
import { GetDateTime } from '@/utils/index.ts'
@Component({
  name: 'FieldPersonnel',
  components: {
    CardTitle,
    PersonalNumber
  }
})
export default class extends Vue {
  private loading: boolean = false
  private date: string = ''
  private departData = {
    columns: ['日期', '访问用户'],
    rows: [
      { '日期': '1/1', '访问用户': 1393 },
      { '日期': '1/2', '访问用户': 3530 },
      { '日期': '1/3', '访问用户': 2923 },
      { '日期': '1/4', '访问用户': 1723 },
      { '日期': '1/5', '访问用户': 3792 },
      { '日期': '1/6', '访问用户': 4593 }
    ]
  }

  private departSettings = {
    limitShowNum: 3,
    radius: [60, 40],
    offsetY: 120,
    hoverAnimation: false,
    label: {
      show: false
    }
  }

  private extendSetting = {
    legend: {
      orient: 'vertical',
      y: 'center',
      x: 'right',
      textStyle: {
        color: '#ffffff'
      }
    }
  }


  mounted() {
    this.date = GetDateTime('yyyy-MM-dd')
    this.$nextTick(() => {
      const chartring1 = (this.$refs['chart-ring1'] as any).echarts
      chartring1.resize({
        height: 250,
      })
      const chartring2 = (this.$refs['chart-ring2'] as any).echarts
      chartring2.resize({
        height: 250,
      })
    })
  }

  private handleTimeChange(value: string) {
    console.log('date time has changed please resend request')
  }
}
</script>

<style lang="scss">
.field-personnel-container {
  .field-personnel {
    min-height: 200px;
    .field-personnel-date {
      .el-date-editor {
        float: right;
        margin-bottom: 20px;
        margin-right: 30px;
        input  {
          background-color: rgba(0,0,0,0);
          color: #ffffff;
          border: none;
        }
      }
    }
    .field-personnel-svg {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      text-align: center;
    }
    .field-personnel-ring {
      display: flex;
      justify-content: space-evenly;
      .field-personnel-ring1 {
        flex: 1;
      }
      .field-personnel-ring2 {
        flex: 1;
        height: 250px!important;
        padding-right: 30px;
      }
      canvas {
        width: 100%;
        height: 100%;
        margin-left: 50%!important;
        transform: translateX(-50%);
      }
    }
  }
}
.yuanzhu {
  width: 140px!important;
  height: 100px!important;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>