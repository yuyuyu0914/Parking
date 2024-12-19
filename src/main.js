import Vue from "vue";
//清空浏览器的默认样式，通过导入写样式的包
import "normalize.css/normalize.css";
//引入element-ui组件
import ElementUI from "element-ui";
//引入element-ui的样式文件
import "element-ui/lib/theme-chalk/index.css";
//引入样式文件
import "@/styles/index.scss"; // global css
//引入APP根组件
import App from "./App";
//引入Vuex
import store from "./store";
//注册svg
import router from "./router";

// 注册svg
import "@/icons";
//把element-ui到处的所有组件注册成全局组件
Vue.use(ElementUI);
//上线后所有的警告，不要展示
Vue.config.productionTip = false;

// vue实例化
new Vue({
  el: "#app",
  router,
  store,
  render: (h) => h(App),
});
