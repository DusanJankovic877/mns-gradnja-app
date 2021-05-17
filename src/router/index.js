import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AboutUs from '../views/AboutUs.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Plastering from '../views/Plastering.vue'
import Liner from '../views/Liner.vue'
import Painting from '../views/Painting.vue'


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
  {
    path: '/services',
    name: 'services',
    component: Services

  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact

  },
  {
    path: '/plastering',
    name: 'plastering',
    component: Plastering

  },
  {
    path: '/liner',
    name: 'liner',
    component: Liner

  },
  {
    path: '/painting',
    name: 'painting',
    component: Painting

  },
]

const router = new VueRouter({
  routes,
  
  scrollBehavior () {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 500)
    })
  }
})

export default router
