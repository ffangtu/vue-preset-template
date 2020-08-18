import Vue from 'vue';
import VueRouter from 'vue-router';
import define from '@/router/define';

Vue.use(VueRouter);

const { HomePage } = define;
/**
 * @Description: 路由相关操作写于此文件
*/
// HomePage.children = []
const routes = [
  HomePage
];

const router = new VueRouter({
  routes
});

export default router;
