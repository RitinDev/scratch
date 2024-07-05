import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import CardView from '../views/CardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About'
      }
    },
    {
      path: '/create',
      name: 'create',
      component: () => CreateView,
      meta: {
        title: 'Create'
      }
    },
    {
      path: '/card',
      name: 'card',
      component: () => CardView,
      meta: {
        title: 'Card'
      }
    }
  ]
})

export default router
