<template>
  <div class="blog-user-detail">
    <div style="height:150px;">
      <header-bar></header-bar>
    </div>
    <div class="blog-user-detail-index">
      <el-container>
        <el-aside width="210px">
          <sider-bar style="height:100%;"></sider-bar>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import SiderBar from './components/SiderBar.vue'
import HeaderBar from './components/HeaderBar.vue'

@Component({
  name: 'HomePageIndex',
  components: {
    SiderBar,
    HeaderBar
  }
})
export default class extends Vue {
  
}
</script>

<style lang="scss">
  .blog-user-detail {
    width: 100%;
    position: relative;
    &-index {
      width: 90%;
      min-width: 800px;
      position: absolute;
      top: 150px;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid #ee55ee;
    }
  }
</style>