import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../pages/About.vue'
import foods from '../components/menus/foods'

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
        path: '/hanji',
        name: 'hanji',
        component: import('../components/talents/hanji.vue')
      },
      {
        path: '/meguru',
        name: 'meguru',
        component: import('../components/talents/meguru.vue')
      },
      {
        path: '/ren',
        name: 'ren',
        component: import('../components/talents/ren.vue')
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
        component: foods
      },
      {
        path: '/drinks',
        component: import('@/components/menus/drinks.vue')
      },
      {
        path: '/others',
        component: import('../components/menus/others.vue')
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
