import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../pages/About.vue'

// 各メニューのインポート
import Foods from '../components/menus/foods.vue'
import Drinks from '../components/menus/drinks.vue'
import Others from '../components/menus/others.vue'

// 個人のページのインポート
import Hanji from '../components/talents/hanji.vue'
import Meguru from '../components/talents/meguru.vue'
import Ren from '../components/talents/ren.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: About
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/staff',
    name: 'staff',
    component: () => import(/* webpackChunkName: "about" */'../pages/Staff.vue'),
    children: [
      {
        path: 'hanji',
        name: 'hanji',
        component: Hanji
      },
      {
        path: 'meguru',
        name: 'meguru',
        component: Meguru
      },
      {
        path: 'ren',
        name: 'ren',
        component: Ren
      },
      // {
      //   path: '/syunki',
      //   name: 'syunki',
      //   component: import('../components/talents/syunki.vue')
      // },
      // {
      //   path: '/yoshiki',
      //   name: 'yoshiki',
      //   component: import('../components/talents/yoshiki.vue')
      // },
      // {
      //   path: '/shinta',
      //   name: 'shinta',
      //   component: import('../components/talents/shinta.vue')
      // },
      // {
      //   path: '/yuki',
      //   name: 'yuki',
      //   component: import('../components/talents/yuki.vue')
      // },
      // {
      //   path: '/taichi',
      //   name: 'taichi',
      //   component: import('../components/talents/taichi.vue')
      // },
      // {
      //   path: '/yanma',
      //   name: 'yanma',
      //   component: import('../components/talents/yanma.vue')
      // },
      // {
      //   path: '/jyon',
      //   name: 'jyon',
      //   component: import('../components/talents/jyon.vue')
      // },
      // {
      //   path: '/kaede',
      //   name: 'kaede',
      //   component: import('../components/talents/kaede.vue')
      // },
      // {
      //   path: '/takeru',
      //   name: 'takeru',
      //   component: import('../components/talents/takeru.vue')
      // },
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "about" */'../pages/Menu.vue'),
    children: [
      {
        path: '/foods',
        component: Foods
      },
      {
        path: '/drinks',
        component: Drinks
      },
      {
        path: '/others',
        component: Others
      },
    ]
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: () => import(/* webpackChunkName: "reserve" */ '../pages/Reserve.vue')
  },
  {
    path: '/access',
    name: 'access',
    component: () => import(/* webpackChunkName: "stuff" */ '../pages/Access.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
