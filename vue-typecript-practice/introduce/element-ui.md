**安装**

~~~js
  npm install element-ui -S
~~~

如果需要按需引入，减少打包后文件的大小

~~~js
  npm install babel-plugin-component -D
~~~

然后修改babel.config.js

~~~js
// babel.config.js
module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
}

~~~

使用
~~~js
import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue'

Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
/*
* 或者写成
* Vue.use(Button)
* Vue.use(Select)
*/

new Vue({
  el: '#app',
  render: h => h(App)
})

~~~
