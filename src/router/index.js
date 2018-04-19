import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Login from '@/components/structure/login'
import dashboard from '@/components/pages/dashboard'
import blogs from '@/components/pages/blogs'
import tags from '@/components/pages/tags'
import media from '@/components/pages/media'
import newblog from '@/components/pages/newblog'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home/dashboard'
        },
        {
            path: '/home',
            redirect: '/home/dashboard'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/home',
            component: Home,
            children:[
                { path: '/home/dashboard', component: dashboard},
                { path: '/home/blogs', component: blogs},
                { path: '/home/tags', component: tags},
                { path: '/home/media', component: media}
            ]
        }
        ,
        {
            path: '/home/blogs',
            component: Home,
            children:[
                { path: '/home/blogs/new', component: newblog}
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