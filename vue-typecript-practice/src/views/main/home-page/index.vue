<template>
  <div class="home-page">
    <div class="home-page-index">
      <el-container>
        <el-aside width="210px">
          <sider-bar></sider-bar>
        </el-aside>
        <el-main>
          this is home page index
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import SiderBar from './components/SiderBar.vue'

@Component({
  name: 'HomePageIndex',
  components: {
    SiderBar
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
      width: 90%;
      min-width: 800px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid #ee55ee;
    }
  }
</style>