<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    style="width:200px"
    >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>年份</span>
      </template>
      <el-menu-item-group>
        <template slot="title">2020年</template>
        <el-menu-item index="1-1">12月</el-menu-item>
        <el-menu-item index="1-2">11月</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="2019年">
        <el-menu-item index="1-3">10月</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <template slot="title">2018年</template>
        <el-menu-item index="1-4-1">9月</el-menu-item>
        <el-menu-item index="1-4-2">8月</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">标签</span>
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