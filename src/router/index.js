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
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/journal',
      name: 'Journal',
      component: Journal,
    },
    {
      path: '/journal/add',
      name: 'JournalAdd',
      component: JournalAdd
    },
    {
      path: '/journal/:id',
      name: 'JournalDetail',
      component: JournalDetail
    },
    {
      path: '/mood',
      name: 'Mood',
      component: Mood
    },
    {
      path: '/mood/add',
      name: 'MoodAdd',
      component: MoodAdd
    },
    {
      path: '/mood/:id',
      name: 'MoodDetail',
      component: MoodDetail
    },
    {
      path: '/resources',
      name: 'Resources',
      component: Resources
    },
    {
      path: '/resources/add',
      name: 'ResourcesAdd',
      component: ResourcesAdd
    },
    {
      path: '/resources/:id',
      name: 'ResourcesDetail',
      component: ResourcesDetail
    },
    {
      path: '/challenge',
      name: 'Challenge',
      component: Challenge
    },
    {
      path: '/challenge/add',
      name: 'ChallengeAdd',
      component: ChallengeAdd
    },
    {
      path: '/challenge/:id',
      name: 'ChallengeDetail',
      component: ChallengeDetail
    },
  ]
})

export default router
