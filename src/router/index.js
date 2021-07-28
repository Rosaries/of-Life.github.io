import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import('../views/About.vue'),
},
{
  path: '/introduction',
  name: 'Introduction',
  component: () => import('../views/Introduction.vue'),
},
{
  path: '/life-and-death',
  name: 'LifeAndDeath',
  component: () => import('../views/Trees.vue'),
},
{
  path: '/rosary',
  name: 'RosaryPrayers',
  component: () => import('../views/Rosary.vue'),
},
{
  path: '/joyful',
  name: 'Joyful',
  component: () => import('../views/Joyful.vue'),
},
{
  path: '/luminous',
  name: 'Luminous',
  component: () => import('../views/Luminous.vue'),
},
{
  path: '/sorrowful',
  name: 'Sorrowful',
  component: () => import('../views/Sorrowful.vue'),
},
{
  path: '/glorious',
  name: 'Glorious',
  component: () => import('../views/Glorious.vue'),
},
{
  path: '/final-prayers',
  name: 'FinalPrayers',
  component: () => import('../views/FinalPrayers.vue'),
},
{
  path: '/what-is-prayer',
  name: 'WhatPrayer',
  component: () => import('../views/WhatPrayer.vue'),
},
{
  path: '/scripture-tips',
  name: 'Scripture',
  component: () => import('../views/Scripture.vue'),
}


]

const router = new VueRouter({
  routes
})

export default router
