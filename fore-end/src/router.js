// 路由相关的代码
import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 引入路由组件
import Home from './views/Home.vue';
import Films from './views/Films.vue';
import NowPaly from './components/NowPaly';
import SoonPlay from './components/SoonPlay';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import FilmDetail from './views/FilmDetail.vue';

// 插件安装
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          redirect: '/films/nowPlaying'
        },
        {
          // 首页
          path: 'films',
          name: 'films',
          component: Films,
          children: [
            {
              path: 'nowPlaying',
              name: 'nowPlaying',
              component: NowPaly
            },
            {
              path: 'comingSoon',
              name: 'comingSoon',
              component: SoonPlay
            }
          ]
        },
        {
          // 影院页
          path: 'cinemas',
          name: 'cinemas',
          component: Cinema
        },
        {
          // 个人中心页
          path: 'center',
          name: 'center',
          component: Center
        }
      ]
    },
    {
      // 详情页面
      path: '/film/:filmId',
      name: 'filmDetail',
      component: FilmDetail,
      beforeEnter (to, from, next) {
        console.log('我是一个路由独享的钩子函数');
        next();
      }
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

  // 请一定记得要做 next
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
