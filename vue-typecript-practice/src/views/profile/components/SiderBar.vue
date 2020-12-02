<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    style="width:200px"
    :router="true"
    >
    <el-menu-item index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">个人资料</span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">我的博客</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-menu"></i>
      <span slot="title">我的收藏</span>
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