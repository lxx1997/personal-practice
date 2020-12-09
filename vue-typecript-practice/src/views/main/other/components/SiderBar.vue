<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    style="width:200px"
    :router="true"
    >
    <el-menu-item index="/blog/other/echarts">
      <i class="el-icon-menu"></i>
      <span slot="title">echarts</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
export default class extends Vue{
  
}
</script>

<style lang="scss" scoped>

</style>