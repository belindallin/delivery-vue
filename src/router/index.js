import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/delivery/address'
  },
  {
    path: '/delivery/address',
    name: 'address',
    component: () => import('../views/Address.vue'),
  },
  {
    path: '/delivery/shipping',
    name: 'shipping',
    component: () => import('../views/Shipping.vue'),
  },
  {
    path: '/delivery/checkout',
    name: 'checkout',
    component: () => import('../views/Checkout.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router
