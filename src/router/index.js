import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/app/Dashboard.vue'
import Profile from '../views/app/Profile.vue'
import Google_Ads from '../views/app/Google_Ads.vue'
import Facebook_Ads from '../views/app/Facebook_Ads.vue'
import Reviews from '../views/app/Reviews.vue'
import Iot from '../views/app/Iot.vue'
import Monitoring from '../views/app/Monitoring.vue'
import Email_Marketing from '../views/app/Email_Marketing.vue'
import ToDo from '../views/app/ToDo.vue'
import Upload from '../views/app/Upload.vue'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    component: () => import("@/components/Layout/Layout"),
    redirect: `/dashboard`,
    meta: {
      requireLogin: false
  },

    children: [
      {
        
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/profile',
          name: 'profile',
          component: Profile
        },
        {
          path: '/Email_Marketing',
          name: 'Email Marketing',
          component: Email_Marketing
        },
        {
          path: '/Google_Ads',
          name: 'Google Ads',
          component: Google_Ads
        },
        {
          path: '/Facebook_Ads',
          name: 'Facebook Ads',
          component: Facebook_Ads
        },
        {
          path: '/Reviews',
          name: 'Reviews',
          component: Reviews
        },
        {
          path: '/Iot',
          name: 'Iot',
          component: Iot
        },
        {
          path: '/Monitoring',
          name: 'Monitoring',
          component: Monitoring
        },
        {
          path: '/todo',
          name: 'todo',
          component: ToDo
        },
        {
          path: '/upload',
          name: 'upload',
          component: Upload
        },
        
     
      ]
    },
   
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
