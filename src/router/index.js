import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Table from '@/components/table'
// import CourseTable from '@/components/CourseTable'
import WeekTable from '@/components/WeekTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: WeekTable
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/list',
      component: Table
    }
  ]
})
