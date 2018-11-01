import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import about from '../components/about/about'
import portfolio from '../components/portfolio/portfolio'
import service from '../components/service/service'
import news from '../components/news/news'
import contact from '../components/contact/contact'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        indexFootShow: true,
        footShow: false,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        indexFootShow: false,
        footShow: true,
      }
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio,
      meta: {
        indexFootShow: false,
        footShow: true,
      }
    },
    {
      path: '/service',
      name: 'service',
      component: service,
      meta: {
        indexFootShow: false,
        footShow: true,
      }
    },
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        indexFootShow: false,
        footShow: true,
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
        indexFootShow: false,
        footShow: true,
      }
    }
  ]
})
