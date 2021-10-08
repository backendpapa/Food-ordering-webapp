import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Checkout from '../views/Checkout.vue'
import Category from '../views/Category.vue'
import CategoryDetail from '../views/CategoryDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/payment/checkout',
    name: 'Cart',
    component: Checkout
  },
  {
    path: '/categories',
    name: 'Catgegory',
    component: Category
  },
  {
    path: '/categories/detail',
    name: 'CatgegoryDetail',
    component: CategoryDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
