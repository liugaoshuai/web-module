import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Subfield from '@/components/module/Subfield'
import AddNewPage from '@/components/AddNewPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/module/subfield',
      name: 'Subfield',
      component: Subfield
    }, {
      path: '/newpage',
      name: 'AddNewPage',
      component: AddNewPage
    }
  ]
})
