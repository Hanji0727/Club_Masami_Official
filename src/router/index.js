import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    component: import('../pages/Staff.vue'),
    children: [
      {
        path: '/hanji',
        name: 'hanji',
        component: import('../components/talent/hanji.vue')
      },
      {
        path: '/meguru',
        name: 'meguru',
        component: import('../components/talent/meguru.vue')
      },
      // {
      //   path: '/ren',
      //   name: 'ren',
      //   component: import('../components/talent/ren.vue')
      // },
      // {
      //   path: '/syunki',
      //   name: 'syunki',
      //   component: import('../components/talent/syunki.vue')
      // },
      // {
      //   path: '/yoshiki',
      //   name: 'yoshiki',
      //   component: import('../components/talent/yoshiki.vue')
      // },
      // {
      //   path: '/shinta',
      //   name: 'shinta',
      //   component: import('../components/talent/shinta.vue')
      // },
      // {
      //   path: '/yuki',
      //   name: 'yuki',
      //   component: import('../components/talent/yuki.vue')
      // },
      // {
      //   path: '/taichi',
      //   name: 'taichi',
      //   component: import('../components/talent/taichi.vue')
      // },
      // {
      //   path: '/yanma',
      //   name: 'yanma',
      //   component: import('../components/talent/yanma.vue')
      // },
      // {
      //   path: '/jyon',
      //   name: 'jyon',
      //   component: import('../components/talent/jyon.vue')
      // },
      // {
      //   path: '/kaede',
      //   name: 'kaede',
      //   component: import('../components/talent/kaede.vue')
      // },
      // {
      //   path: '/takeru',
      //   name: 'takeru',
      //   component: import('../components/talent/takeru.vue')
      // },
    ]
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "menu" */ '../pages/Menu.vue')
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
