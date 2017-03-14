import Login from './components/Login.vue'
import Create from './components/Create.vue'
import PressReleases from './components/PressReleases.vue'
import Assistance from './components/Assistance.vue'
import About from './components/About.vue'
import LatestNews from './components/LatestNews.vue'

export default {
  
  routes: [
    { 
      path: '/login',
      name: 'login', 
      component: Login
    },
    { 
      path: '/news/create',
      name: 'create', 
      component: Create
    },
    { 
      path: '/comunicados-de-prensa/:lang',
      name: 'pressReleases', 
      component: PressReleases,
      alias: [
        '/press-releases/:lang', 
        '/comunicados-da-imprensa/:lang'
      ] 
    },
    { 
      path: '/sobre-nosotros/:lang',
      name: 'aboutUs', 
      component: About,
      alias: ['/about-us/:lang', '/acerca-de-copa-airlines/:lang'] 
    },
    { 
      path: '/assistance-to-family/:lang', 
      name: 'assistanceToFamily',
      component: Assistance,
      alias: ['/assistencia-a-familia/:lang', '/asistencia-familiar/:lang'] 
    },
    { 
      path: '/latest-news/:lang', 
      name: 'latestNews',
      component: LatestNews,
      alias: ['ultimas-noticias/:lang', '/ultimas-noticias/:lang']
    }
  ]
  
}