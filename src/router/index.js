import Vue from 'vue'
import Router from 'vue-router'
import comicdata from '@/components/comicdata'
import searchcomic from '@/components/searchcomic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'searchcomic',
      component: searchcomic
    },
    {
      path: '/comicdata/:id',
      name: 'comicdata',
      component: comicdata
    },
  ]
})
