<template>
  <div class="blog-user">
    <el-divider content-position="left">
      <span style="font-weight: bord;font-size: 18px;">账号信息</span>
    </el-divider>
    <el-row>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">姓名</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">SoulReader</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">姓名</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">SoulReader</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">姓名</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">SoulReader</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">姓名</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">SoulReader</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">姓名</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">SoulReader</span>
        </div>
      </el-col>
    </el-row>
    <el-divider content-position="left">
      <span style="font-weight: bord;font-size: 18px;">个人喜好</span>
    </el-divider>
    <el-row>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">颜色</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">blue,black</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">食物</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">龙虾</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">运动</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">跑步</span>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="blog-user-account">
          <!-- 标题 -->
          <span class="blog-user-account-title">爱好</span>
          <!-- 内容 -->
          <span class="blog-user-account-content">读书，玩游戏</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'HomePageIndex',
  components: {
  }
})
export default class extends Vue {
  
}
</script>

<style lang="scss">
  .blog-user {
    width: 100%;
    position: relative;
    &-account {
      margin-top: 20px;
      &-title {
        display: inline-block;
        text-align: right;
        width: 100px;
        font-weight: bolder;
      }
      &-content {
        margin-left: 20px;
        color: red;
      }
    }
  }
</style>