import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import login from '@/components/structure/login'
import dashboard from '@/components/pages/dashboard'
import blogs from '@/components/pages/blogs'
import tags from '@/components/pages/tags'
import category from '@/components/pages/category'
import media from '@/components/pages/media'
import newblog from '@/components/pages/newblog'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: login
        },
        {
            path: '/',
            redirect: '/dashboard',
            component: home,
            children:[
                { path: '/dashboard', component: dashboard},
                { path: '/blogs', component: blogs},
                { path: '/category', component: category},
                { path: '/tags', component: tags},
                { path: '/media', component: media}
            ]
        },
        {
            path: 'blogs',
            component: home,
            children: [
                { path: '/blogs/new', component: newblog}
            ]
        }
    ]
})



// 登录中间验证，页面需要登录而没有登录的情况直接跳转登录
/*
router.beforeEach((to, from, next) => {
  (new Vue()).$http.get(commonConfig.back.url + '/api/',).then(response => {
    if(response.body.result.login){
      if (to.path === '/login') {
          next({
            path: '/home/dashboard'
          });
      } else {
          next();
        }
    } else {
      if (to.path === '/login') {
          next();
      } else {
          next({
            path: '/login'
          });
      }
    }
  }, response => {
  });
});
*/

export default router