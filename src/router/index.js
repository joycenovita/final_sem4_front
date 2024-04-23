import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'Sign In',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: SignUp
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    
  ]
})

export default router
