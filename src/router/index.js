import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Howto from '@/components/Howto'
import Categories from '@/components/Categories'
import Sources from '@/components/Sources'
import Source from '@/components/Source'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/howto/:id',
      component: Howto
    },
    {
      path: '/categories',
      component: Categories
    },
    {
      path: '/sources',
      component: Sources
    },
    {
      path: '/source/:group/:artifact',
      component: Source
    }
  ]
})
