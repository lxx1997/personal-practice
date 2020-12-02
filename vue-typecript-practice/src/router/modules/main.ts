
import HeaderBar from '@/layout/mian/index.vue';

export default [
  {
    path: '/blog',
    name: 'HeaderBar',
    component: HeaderBar,
    children: [
      {
        path: 'index',
        name: 'HomePage',
        component: () => import('@/views/main/home-page/index.vue')
      },
      {
        path: 'practice',
        name: 'HomePractice',
        component: () => import('@/views/main/practice/index.vue'),
        redirect: '/blog/practice/2048',
        children: [
          {
            path: '2048',
            name: '2048',
            component: () => import('@/views/main/practice/pages/2048.vue'),
          }
        ]
      },
      {
        path: 'photo',
        name: 'HomePhoto',
        component: () => import('@/views/main/photo/index.vue'),
        redirect: '/blog/photo/wall',
        children: [
          {
            path: 'wall',
            name: 'PhotoWall',
            component: () => import('@/views/main/photo/wall/index.vue')
          }
        ]
      },
      {
        path: 'other',
        name: 'HomeOther',
        component: () => import('@/views/main/other/index.vue')
      },
      {
        path: 'profile',
        name: 'HomeOther',
        component: () => import('@/views/profile/index.vue'),
        redirect: '/blog/profile/detail',
        children: [
          {
            path: 'detail',
            name: 'ProfileDetail',
            component: () => import('@/views/profile/user/index.vue'),
          }
        ]
      },
      {
        path: 'write-blog',
        name: 'WriteBlog',
        component: () => import('@/views/main/writeBlog/index.vue')
      }
    ]
  }
]