import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/views/Home.vue';
import HeaderBar from '@/layout/mian/index.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/table/operation',
    name: 'TableOperation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/TableOperation.vue'),
  },
  {
    path: '/image/scale',
    name: 'ImageScale',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/ImageScale.vue'),
  },
  {
    path: '/blog',
    name: 'HeaderBar',
    component: HeaderBar,
    children: [
      {
        path: 'index',
        name: 'HomePage',
        component: () => import('@/views/main/home-page/index.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes,
});

export default router;
