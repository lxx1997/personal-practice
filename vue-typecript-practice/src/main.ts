import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引用element-ui
import ElementUI from 'element-ui'
// 引入md编辑器
import mavonEditor from 'mavon-editor'
import marked from 'marked'
// 引入样式
import "element-ui/lib/theme-chalk/index.css"
import "@/style/index.scss"
import "@/style/markdown.scss"
import "@/style/style.scss"
import "@/style/animation.scss"
// 引入md样式
import 'mavon-editor/dist/css/index.css'


Vue.config.productionTip = false;
Vue.prototype.$marked = marked
Vue.use(ElementUI)
Vue.use(mavonEditor)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
