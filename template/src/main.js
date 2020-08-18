import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@style/index.less';

Vue.config.productionTip = false;


<%_
if (options.modules.includes('element')) { _%>
// element ui相关
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Element);
<%_ } _%>


<%_
if (options.modules.includes('vant')) { _%>
// vant相关
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
<%_ } _%>


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


console.log(`vue项目模板 v${process.env.VUE_APP_VERSION} is running`)
