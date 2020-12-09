<template>
  <div class="l-s-n">
    <div class="l-s-n-r">
      <div class="l-s-n-title">
        <span class="l-s-n-t no-wrap">智慧工程大屏展示</span>
        <el-select class="l-s-n-s" size='small' v-model="projectId" placeholder="" clearable filterable @change="handleChangeProject">
          <el-option v-for="item in projectList" :key="item.id" :value="item.id" :label="item.name"></el-option>
        </el-select>
      </div>
      <ul class="l-s-n-router-link">
        <router-link class="no-wrap" v-for="item in flagList" :key="item.name" :class="{'active': item.flag}" :to="item.to">{{item.title}}</router-link>
      </ul>
    </div>
    <div class="l-s-n-profile">
      <span class="no-wrap">{{new Date().toLocaleTimeString()}} | {{name}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue} from 'vue-property-decorator'

@Component({
  name: 'LargeScreenNavBar',
})
export default class extends Vue {
  private projectList = [
    {id: '1', name: 'project one'},
    {id: '2', name: 'project two'},
    {id: '3', name: 'project three'},
  ] 
  private flagList = [
    {title: '首页', to: "/", flag: false},
    {title: '人员区域链', to: "/large-screen", flag: true},
    {title: '设计云', to: "/", flag: false},
    {title: '视频监控', to: "/", flag: false}
  ]
  private projectId: string = '1'
  private name: string = 'hello'
  private handleChangeProject(value: string) {
    console.log(value, typeof this.projectId)
  }
}
</script>

<style lang="scss" scoped>
.l-s-n {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  /deep/ &-r {
    display: flex;
    justify-content:flex-start;
    flex: 1;
    margin-top: 15px;
    .l-s-n-title {
      display: flex;
      justify-content: flex-start;
      padding-left: 20px;
      .l-s-n-t {
        font-size: 30px;
        line-height: 50px;
      }
      .el-select {
        margin-top: 8px;
        margin-left: 10px;
        input  {
          background-color: rgba(0,0,0,0);
          color: #ffffff;
        }
      }
    }
    .l-s-n-router-link {
      display: flex;
      justify-content: flex-start;
      flex: 1;
      a {
        padding:0 30px;
        text-align: center;
        display: block;
        height: 100%;
        line-height: 50px;
        color: #ffffff;
      }
      .active {
        color: #898f70;
        box-sizing: border-box;
        border-bottom: 2px solid #ffffff;
      }
    }
  }
  &-profile {
    margin-top: 15px;
    width: 200px;
    line-height: 50px;
  }
}
 
</style>