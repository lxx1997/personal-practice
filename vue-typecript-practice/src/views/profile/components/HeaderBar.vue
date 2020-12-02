<template>
  <div class="blog-user-header">
    <div class="blog-user-header-detail">
      <el-avatar :size="80" :src="circleUrl"></el-avatar>
      <div class="blog-user-header-detail-desc">
        <p>username</p>
        <p>desc</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
// 定义require
declare function require(string: any): string
@Component({
  name: 'ProfileHeaderBar'
})
export default class extends Vue{
  [x: string]: any
  // 通过require 引入·图片
  private circleUrl: string = require("@/assets/test1.png")
  constructor() {
    super()
  }
}
</script>

<style lang="scss" scoped>
.blog-user-header {
  width: 100%;
  height: 100%;
  position: relative;
  // 背景
  background: url('//bpic.588ku.com/back_origin_min_pic/19/08/28/738d7018d9a6bc76b2a11a74a2debfc5.jpg!/fw/640/quality/90/unsharp/true/compress/true') no-repeat;
  background-size: 100% 100%;
  &-detail {
    width: 80%;
    min-width: 800px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: flex-start;
    .el-avatar {
      margin-top: 35px;
    }
    &-desc {
      margin-top: 35px;
      p {
        font-size: 18px;
        line-height: 40px;
        padding-left: 10px;
        color: #ffffff;
      }
    }
  }
}
</style>