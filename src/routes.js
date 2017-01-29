import VueRouter from 'vue-router'
import PressReleases from './components/PressReleases.vue'
import LatestNews from './components/LatestNews.vue'
import PressReleases from './components/PressReleases.vue'
import Assistance from './components/Assistance.vue'
import About from './components/About.vue'


let  routes = [
    { 
      path: '/press-releases/:lang',
      name: 'pressReleases', 
      component: PressReleases,
      alias: [
        '/comunicados-de-prensa/:lang', 
        '/comunicados-da-imprensa/:lang'
      ] 
    },
    { 
      path: '/about-us/:lang',
      name: 'aboutUs', 
      component: About,
      alias: ['/sobre-nosotros/:lang', '/acerca-de-copa-airlines/:lang'] 
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
  ];

  export default new VueRouter({
  	routes
  })