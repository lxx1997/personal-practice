<template>
  <div class="blog-header">
    <!-- 存放 logo -->
    <div class="blog-header-left">
      <span  class="blog-header-left-logo">SoulReader の blog</span>
    </div>
    <!-- 存放菜单栏 -->
    <div class="blog-header-center">
      <ul>
        <li>
          <router-link to="/blog/index" class="router-link" >首页</router-link>
        </li>
        <li>
          <router-link to="/blog/practice" class="router-link">练习</router-link>
        </li>
        <li>
          <router-link to="/blog/photo" class="router-link">相册</router-link>
        </li>
        <li>
          <router-link to="/blog/other" class="router-link">其他</router-link>
        </li>
      </ul>
    </div>
    <!-- 存放个人头像及进入个人中心入口 -->
    <div class="blog-header-right">
      <el-dropdown class="blog-header-right-dropdown">
        <span class="el-dropdown-link">
          <el-avatar :size="50" :src="circleUrl"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>我的博客</el-dropdown-item>
          <el-dropdown-item @click.native="handleWriteBlog">写博客</el-dropdown-item>
          <el-dropdown-item>
            <a href="/blog/profile/detail" style="color: #333;">个人中心</a>
          </el-dropdown-item>
          <el-dropdown-item @click.native="handleLoginout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
// 定义require
declare function require(string: any): string
@Component({
  name: 'HeaderBar'
})
export default class extends Vue{
  [x: string]: any
  // 通过require 引入·图片
  private circleUrl: string = require("@/assets/test1.png")
  constructor() {
    super()
  }
  private handleLoginout(): void {
    this.$router.push('/about')
  }
  
  private handleWriteBlog(): void {
    this.$router.push('/blog/write-blog')
  }
}
</script>

<style lang="scss" scoped>
  .router-link-exact-active {
    background-color: #cfd4e6;
    color: #ffffff;
    border-radius: 5px;
  }
  .blog-header {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    box-sizing: border-box;
    flex-wrap: nowrap;
    line-height: 60px;
    &-left{
      &-logo {
        font-size: 30px;
        font-weight: bold;
        font-style: italic;
        font-variant: small-caps;
        font-family: Helvetica;
        color: #333;
        text-shadow: 0 2px 4px #ff0000;
        animation: textColor 5s linear infinite normal;
      }
    }

    &-center {
      flex: 1;
      min-width: 200px;
      max-width: 500px;
      &>ul {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        li {
          width: 100%;
          cursor: pointer;
          text-align: center;
          border-radius: 4px;
          .router-link {
            display: block;
            width: 100%;
            height: 100%;
          }
          &:hover {
            box-shadow: 1px 1px 1px #796e6e;
            background-color: #e5e5e5;
          }
        }
      }
    }

    &-right {
      max-width: 100px;
      &-dropdown {
        margin-top: 5px;
      }
      .el-dropdown-link {
        display: inline-block;
        width: 100%;
        height: 100%;
      }
    }
  }
@keyframes textColor {
  0% {
    color: #333;
    text-shadow: 0 2px 4px #ff0000;
  }
  20% {
    color: rgb(98, 177, 34);
    text-shadow: 0 2px 4px #471010;
  }
  30% {
    color: rgb(117, 82, 214);
    text-shadow: 0 2px 4px #d31515;
  }
  60% {
    color: rgb(20, 10, 24);
    text-shadow: 0 2px 4px #e68b8b;
  }
  80% {
    color: rgb(80, 11, 14);
    text-shadow: 0 2px 4px #c71616;
  }
  100% {
    color: #333;
    text-shadow: 0 2px 4px #ff0000;
  }
}
</style>