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
import Taichi from '../components/talents/taichi.vue'
import Syunki from '../components/talents/syunki.vue'
import Jion from '../components/talents/jion.vue'
import Yuki from '../components/talents/yuki.vue'
import Shinta from '../components/talents/shinta.vue'
import Aotyan from '../components/talents/aoshi.vue'
import Kaetyan from '../components/talents/kaede.vue'
import Reiko from '../components/talents/reiwa.vue'



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
        path: 'hatyan',
        name: 'hatyan',
        component: Hanji
      },
      {
        path: 'meguru',
        name: 'meguru',
        component: Meguru
      },
      {
        path: 'nasukama',
        name: 'nasukama',
        component: Ren
      },
      {
        path: 'haruharu',
        name: 'haruharu',
        component: Syunki
      },
      {
        path: 'shinshin',
        name: 'shinshin',
        component: Shinta
      },
      {
        path: 'yui',
        name: 'yui',
        component: Yuki
      },
      {
        path: 'mamadona',
        name: 'mamadona',
        component: Taichi
      },
      {
        path: 'reiko',
        name: 'reiko',
        component: Reiko
      },
      {
        path: 'shion',
        name: 'shion',
        component: Jion
      },
      {
        path: 'kaetyan',
        name: 'kaetyan',
        component: Kaetyan
      },
      {
        path: 'aotyan',
        name: 'aotyan',
        component: Aotyan
      },
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "about" */'../pages/Menu.vue'),
    children: [
      {
        path: '',
        name: '',
        component: Foods
      },
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
    path: '/access',
    name: 'access',
    component: () => import(/* webpackChunkName: "stuff" */ '../pages/Access.vue')
  },
  {
    path: '/pay',
    name: 'pay',
    component: () => import(/* webpackChunkName: "stuff" */ '../pages/Access.vue')
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0
    }
  },
  history: createWebHashHistory(),
  routes
})

export default router
