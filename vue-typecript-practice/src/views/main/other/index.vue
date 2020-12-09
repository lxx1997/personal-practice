<template>
  <div class="home-page">
    <div class="home-page-index">
      <el-container>
        <el-aside width="210px">
          <sider-bar></sider-bar>
        </el-aside>
        <el-main>
          <echarts-index></echarts-index>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import SiderBar from './components/SiderBar.vue'
import EchartsIndex from './echarts/index.vue'

@Component({
  name: 'HomePageIndex',
  components: {
    SiderBar,
    EchartsIndex
  }
})
export default class extends Vue {
  
}
</script>

<style lang="scss">
  .home-page {
    width: 100%;
    position: relative;
    &-index {
      width: 100%;
      height: 100%;
      min-width: 800px;
      border: 1px solid #ee55ee;
      .el-container {
        height: 100%;
        .el-aside {
          ul {
            height: 100%;
          }
        }
      }
      .el-main {
        height: 100%;
      }
    }
  }
</style>