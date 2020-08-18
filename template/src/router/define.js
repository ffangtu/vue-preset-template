/*
 *
 * 路由名称该大写就大写
 * 最好保证name和文件夹名称能有对应关系，方便后续添加路由模块自动引入
 * */
export default {
  HomePage: {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage')
  }
};
