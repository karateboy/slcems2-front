import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: '首頁',
        breadcrumb: [
          {
            text: '',
            active: true,
          },
        ],
      },
    },
    {
      path: '/smart-grid',
      name: 'smart-grid',
      component: () => import('@/views/card-analytic/CardAnalytic.vue'),
      meta: {
        pageTitle: '智能電網',
        breadcrumb: [
          {
            text: '',
            active: true,
          },
        ],
      },
    },
    {
      path: '/energy-map',
      name: 'energy-map',
      component: () => import('@/views/leaflet/Leaflet.vue'),
      meta: {
        pageTitle: '能源地圖',
        breadcrumb: [
          {
            text: '',
            active: true,
          },
        ],
      },
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('@/views/Download.vue'),
      meta: {
        pageTitle: '下載及連結',
        breadcrumb: [
          {
            text: '',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
});

export default router;
