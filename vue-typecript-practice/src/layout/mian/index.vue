<template>
  <div class="layout">
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-container>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import HeaderBar from './Components/headerBar.vue'

@Component({
  components: {
    HeaderBar
  }
})
export default class headerBarIndex extends Vue {

}
</script>

<style lang="scss" scoped>
.el-header {
  border-bottom: 1px dotted #a320a3
}
.layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .el-header {
    width: 100%;
  }
  .el-container {
    flex: 1;
    width: 100%;
  }
}
</style>