import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/components/views/goodsList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})