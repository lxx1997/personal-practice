<template>
  <div class="blog-user-login">
    <el-header>
      <login-header-bar></login-header-bar>
    </el-header>
    <el-main>
      <el-card class="box-card login-card">
        <el-form :model="form" status-icon :rules="rules" ref="ruleForm" label-width="80px" label-position="left" class="demo-ruleForm">
          <el-avatar :src="loginAvatar" :size="100" style="margin-bottom: 20px;"></el-avatar>
          <el-form-item label="用户名" prop="username">
            <el-input type="password" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input :type="showPassword ? 'text' : 'password'" v-model="form.password">
              <i slot="suffix" class="el-icon-view" @click="handleShowPassword"></i>
            </el-input>
          </el-form-item>
          <div class="login-tip">
            <span>没有账号，前往<a href="/register">注册</a></span>
          </div>
          <el-button type="primary" style="width: 80%; margin-left: 10%; margin-top:10px;" @click="handleSubmit">提交</el-button>
          <div class="login-other">
            <span class="link-type">第三方登录</span>
          </div>
        </el-form>
      </el-card>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'
import Components from './assemble/index.js'
declare function require(string: any): string
interface loginForm {
  username: string,
  password: string
}

@Component({
  name: 'LoginIndex',
  components: {
    ...Components
  }
})

export default class extends Vue {
  // login avatar
  private loginAvatar: string = require('@/assets/test1.png')

  private form: loginForm= {
    username: '',
    password: ''
  }

  private showPassword: boolean = false

  // 登录验证
  private rules = {
    username: [
      {validator: (rule: Array<object>, value: string, callback: any) => {
        if(!value) {
          return callback(new Error('用户名不能为空'))
        }
      }, tigger: 'blur', require: true}
    ],
    password: [
      {validator: (rule: Array<object>, value: string, callback: any) => {
        if(!value) {
          return callback(new Error('密码不能为空'))
        }
      }, tigger: 'blur', require: true}
    ]
  }

  private handleSubmit() {
    console.log('submit')
  }

  private handleShowPassword() {
    this.showPassword = !this.showPassword
  }
}
</script>

<style lang="scss" scoped>
.login-card {
  width: 400px;
  height: 600px;
  position: absolute;
  top: 50%;
  right: 50px;
  transform: translateY(-50%);
  text-align: center;
  .login-tip {
    height: 14px;
    line-height: 14px;
    font-size: 12px;
    text-align: right;
  }
  .login-other {
    height: 16px;
    line-height: 16px;
    font-size: 14px;
    text-align: center;
    margin-top: 5px;
  }
}
</style>