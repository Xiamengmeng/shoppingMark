import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'
import indexPage from '@/components/indexPage'
import mapset from '@/components/mapset'
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
    }
  ]
})
