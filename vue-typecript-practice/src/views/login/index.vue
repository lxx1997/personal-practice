<template>
  <div class="blog-user-login">
    <el-header style="width:100%">
      <login-header-bar></login-header-bar>
    </el-header>
    <el-main>
      <el-carousel trigger="click">
        <el-carousel-item v-for="item in imageList" :key="item.index">
          <img :src="item.url" :alt="item.name">
        </el-carousel-item>
      </el-carousel>
      <el-card class="box-card login-card">
        <!-- <canvas id="login-avatar-canvas" style="height: 100px; width:100px;border-radius: 50px;margin-bottom: 20px;">当前浏览器不支持canvas</canvas> -->
        <el-form :model="form" status-icon :rules="rules" ref="ruleForm" label-width="80px" label-position="left" class="demo-ruleForm">
          <el-avatar class="login-avatar" :src="loginAvatar" :size="100" style="margin-bottom: 20px;"></el-avatar>
          <el-form-item label="用户名" prop="username">
            <el-input type="password" v-model="form.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input :type="showPassword ? 'text' : 'password'" v-model="form.password">
              <i slot="suffix" class="el-icon-view" @click="handleShowPassword" placeholder="请输入密码"></i>
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
  // private loginCanvas!: HTMLCanvasElement
  private form: loginForm= {
    username: '',
    password: ''
  }
  private loginHtml!: HTMLSpanElement
  private showPassword: boolean = false
  private imageList: Array<object> = [
    {
      index: 1,
      name: '哈士奇',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606755441967&di=345df16d9340480ccf8c571ff71f153d&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F27%2F67%2F01300000921826141299672233506.jpg'
    },
    {
      index: 2,
      name: '蛤',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606755441966&di=84eefca60087c5b01df5bd1f33fc7827&imgtype=0&src=http%3A%2F%2Fa2.att.hudong.com%2F86%2F10%2F01300000184180121920108394217.jpg'
    }, 
    {
      index: 3,
      name: '黄昏',
      url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1606755441966&di=6f15a8cceca9c4d01a3a389a583c5d55&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F25%2F99%2F19300000421423134190997943822.jpg'
    }
  ]
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
  mounted() {
    this.LoginAvatarCanvas()
  }

  private LoginAvatarCanvas() {
    // this.loginCanvas = <HTMLCanvasElement>document.querySelector('#login-avatar-canvas')
    // var ctx = this.loginCanvas.getContext('2d') as any
    // ctx.fillStyle = '#ffffff'
    // var img = new Image()
    // img.src = this.loginAvatar
    // img.onload = function() {
    //   ctx.drawImage(this, 0, 0, 360, 180)
    //   console.log(this)
    // }
    this.loginHtml = <HTMLSpanElement>document.querySelector('.login-avatar')
    this.loginHtml.addEventListener('mouseenter', () => {
      console.log('mouseenter')
        this.loginHtml.style.animation = 'avatarRotate 6s infinite'
      })
    this.loginHtml.addEventListener('mouseleave', () => {
      this.loginHtml.style.animation = ''
    })
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
.blog-user-login {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
}
.el-main {
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  &::after {
    clear: both;
  }
  .el-carousel {
    float: left;
    width: 90%;
    height: 100%;
    /deep/ .el-carousel__container {
      height: 100% !important;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .login-card {
    float: right;
    width: 400px;
    height: 600px;
    margin-top: 8%;
    margin-left: 50px;
    margin-right: 200px;
    text-align: center;
    background-color: #fff;
    z-index: 999;
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
}
</style>