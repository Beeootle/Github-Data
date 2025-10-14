import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/dashboard/Index.vue'
import Repositories from '@/views/dashboard/Repositories.vue'
import Analytics from '@/views/dashboard/Analytics.vue'
import PullRequests from '@/views/dashboard/PullRequests.vue'
import Issues from '@/views/dashboard/Issues.vue'
import Teams from '@/views/dashboard/Teams.vue'
import Settings from '@/views/dashboard/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/reposiories',
      name: 'repositories',
      component: Repositories
    },
    {
      path: '/analytics',
      name: 'analytics',
      component: Analytics
    },
    {
      path: '/pullrequests',
      name: 'pullrequests',
      component: PullRequests
    },
    {
      path: '/issues',
      name: 'issues',
      component: Issues
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
  ],
})

export default router
