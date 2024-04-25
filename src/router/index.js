import { createRouter, createWebHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Journal from '../views/Journal.vue'
import JournalAdd from '../views/JournalAdd.vue'
import JournalDetail from '../views/JournalDetail.vue'
import Mood from '../views/Mood.vue'
import MoodAdd from '../views/MoodAdd.vue'
import MoodDetail from '../views/MoodDetail.vue'
import Resources from '../views/Resources.vue'
import ResourcesAdd from '../views/ResourcesAdd.vue'
import ResourcesDetail from '../views/ResourcesDetail.vue'
import Challenge from '../views/Challenge.vue'
import ChallengeAdd from '../views/ChallengeAdd.vue'
import ChallengeDetail from '../views/ChallengeDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/sign-in',
      name: 'Sign In',
      component: SignIn,
      meta: { requiresAuth: true }
    },
    {
      path: '/sign-up',
      name: 'Sign Up',
      component: SignUp,
      meta: { requiresAuth: true }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: { requiresAuth: true }
    },
    {
      path: '/journal',
      name: 'Journal',
      component: Journal,
      meta: { requiresAuth: true }
    },
    {
      path: '/journal/add',
      name: 'JournalAdd',
      component: JournalAdd,
      meta: { requiresAuth: true }
    },
    {
      path: '/journal/:id',
      name: 'JournalDetail',
      component: JournalDetail,
      meta: { requiresAuth: true }
    },
    {
      path: '/mood',
      name: 'Mood',
      component: Mood,
      meta: { requiresAuth: true }
    },
    {
      path: '/mood/add',
      name: 'MoodAdd',
      component: MoodAdd,
      meta: { requiresAuth: true }
    },
    {
      path: '/mood/:id',
      name: 'MoodDetail',
      component: MoodDetail,
      meta: { requiresAuth: true }
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources,
      meta: { requiresAuth: true }
    },
    {
      path: '/resources/add',
      name: 'ResourcesAdd',
      component: ResourcesAdd,
      meta: { requiresAuth: true }
    },
    {
      path: '/resources/:id',
      name: 'ResourcesDetail',
      component: ResourcesDetail,
      meta: { requiresAuth: true }
    },
    {
      path: '/challenge',
      name: 'Challenge',
      component: Challenge,
      meta: { requiresAuth: true }
    },
    {
      path: '/challenge/add',
      name: 'ChallengeAdd',
      component: ChallengeAdd,
      meta: { requiresAuth: true }
    },
    {
      path: '/challenge/:id',
      name: 'ChallengeDetail',
      component: ChallengeDetail,
      meta: { requiresAuth: true }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const token = localStorage.getItem
    if (!token) {
      next('/sign-in')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
