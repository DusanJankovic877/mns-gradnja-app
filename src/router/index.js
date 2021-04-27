import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
// import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
// import Literatures from '../views/Literatures.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: AboutUs
  },
  // {
  //   path: '/services',
  //   name: 'services',
  //   component: Services

  // },
  // {
  //   path: '/literatures',
  //   name: 'literatures',
  //   component: Literatures

  // },
  {
    path: '/contact',
    name: 'contact',
    component: Contact

  }
]

const router = new VueRouter({
  routes
})

export default router
