import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '@/components/indexPage'
import mapset from '@/components/mapset'
import duplicateRemoval from '@/components/duplicateRemoval'
import shoppingCart from '@/components/shoppingCart'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'index',
      component:index
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/indexPage',
      name: 'indexPage',
      component: indexPage
    },
    {
      path: '/mapset',
      name: 'mapset',
      component: mapset
    },
    {
      path:'/duplicateRemoval',
      name:'/duplicateRemoval',
      component:duplicateRemoval
    },
    {
      path:'/shoppingCart',
      name:'/shoppingCart',
      component:shoppingCart
    },
    {
      path:'/login',
      name:'/login',
      component:login
    }
  ]
})
