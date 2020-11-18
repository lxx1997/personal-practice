<template>
  <div>
    <el-header>
      <header-bar></header-bar>
    </el-header>
    <el-container>
      <router-view></router-view>
    </el-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Watch } from 'vue-property-decorator'
import HeaderBar from './Components/headerBar.vue'

@Component({
  components: {
    HeaderBar
  }
})
export default class extends Vue {

}
</script>

<style lang="scss">

</style>