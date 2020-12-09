declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
declare module 'marked' {}

declare module 'v-charts' {}
// 解决 '@jiaminghi/data-view'插件在typescript中数据结构效验问题
declare module '@jiaminghi/data-view' {
  import dataV from '@jiaminghi/data-view'
  export default dataV
}

declare module 'echarts' {
  const echarts: any;
  export default echarts;
}

declare module '*.js'

declare module '*.ts'

declare module "vue/types/vue" {
  import VueRouter, {Route} from 'vue-router'
  interface Vue {
    $router: VueRouter;
    $route: Route;
    $http: any;
    $Message: any;
    $Modal: any;
  }
}
