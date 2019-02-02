// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 插件安装
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Home.vue'),
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          // 首页
          path: 'films',
          // name: 'films',
          component: () => import('./views/Films.vue'),
          children: [
            {
              path: '',
              redirect: '/films/nowPlaying'
            },
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: () => import('./components/NowPaly/index.vue')
            },
            {
              path: 'comingSoon',
              name: 'comingSoon',
              component: () => import('./components/SoonPlay/index.vue')
            }
          ]
        },
        {
          // 影院页
          path: 'cinemas',
          name: 'cinemas',
          component: () => import('./views/Cinema.vue')
        },
        {
          // 个人中心页
          path: 'center',
          name: 'center',
          beforeEnter (to, from, next) {
            if (localStorage.getItem('userName')) {
              next({
                path: '/user'
              });
            } else {
              next({
                path: '/login'
              })
            }
          },
          component: () => import('./views/Login.vue')
        }
      ]
    },
    // 搜索页...跟用户,详情页同级,从影院页(/cinemas)跳到搜索页(/search)
    {
      path: '/cinemas/search',
      name: 'search',
      component: () => import('./views/Search.vue')
    },
    {
      // 城市列表页
      path: '/city',
      name: 'city',
      component: () => import('./components/city/city.vue')
    },
    {
      // 详情页面
      path: '/film/:filmId',
      name: 'filmDetail',
      component: () => import('./views/FilmDetail.vue')
    },
    // 登录页
    {
      path: '/login',
      name: '/login',
      component: () => import('./views/Login.vue')
    },
    {
      // 用户
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue'),
      children: [
        {
          path: 'lookfilm',
          name: 'lookfilm',
          component: () => import(/* webpackChunkName: "lookfilm" */ './views/Lookfilm.vue')
        },
        {
          path: 'discount',
          name: 'discount',
          component: () => import(/* webpackChunkName: "Discount" */ './views/Discount.vue')   
        },
        {
          path: 'rebate',
          name: 'rebate',
          component: () => import(/* webpackChunkName: "Rebate" */ './views/Rebate.vue')
        }
      ]
    },
    {
      path: '*',
      redirect: '/films/nowPlaying'
    }
  ]
});

/**
 * 全局前置守卫
 * @param {Object} to 要去哪里
 * @param {Object} from 从哪里来
 * @param {Function} next 结束当前的钩子函数，进入到下一个相应的钩子函数，如果没有的话，即最终来控制是否可以切换路由
 *  */
router.beforeEach((to, from, next) => {
  NProgress.start();
  console.log(to);
  console.log(from);

  next();
})

/**
 * 全局后置守卫
 * @param {Object} to 要去哪里
 * @param {Object} from 从哪里来
 */
router.afterEach((to, from) => {
  // 做一些额外处理，比如进度条的效果
  NProgress.done();
})

// 需要暴露
export default router;
