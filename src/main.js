import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'

import TopMenu from './components/TopMenu.vue'
import LatestNews from './components/LatestNews.vue'
import PressReleases from './components/PressReleases.vue'
import Assistance from './components/Assistance.vue'
import About from './components/About.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'

import locales from './locales'
import _ from 'lodash'
import news from './news'

// install plugin
Vue.use(VueRouter)
Vue.use(VueI18n)

// set lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

window.Vue = Vue;
window._ = _;
window.news = news;

const router = new VueRouter({
  
  routes: [
    {
      path: '/', redirect: { path: '/latest-news' }
    },
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
  ]
  
})

export default router;

new Vue({

    router,

  	el: '#app',

  	components: {
  		TopMenu,
  		Tabs,
  		Tab
  	},

  	data: {
  		currentLang: 'en'
  	},
  	methods: {
  		changeLanguage(lang){
  			//Change the language
        this.currentLang = lang
        Vue.config.lang = lang
        window.lang = lang
        // Crear los nombres de las rutas con sus respectivos parametros
        //Replace route
        this.replaceRoute()
        //router.replace( '/' + lang )
        //this.replaceRoute()
       //Crear el redireccionamiento a las rutas en su respectivo idioma sin el parametro de lenguage seleccionado
      },

      replaceRoute(){
        let routePath = this.$route.path.split('/')
        
        while( routePath.length >= 3 ){
          routePath.pop()
        }
        routePath = routePath.join().replace(',', '') + '/' + this.currentLang
        router.replace('/' + routePath)
        // console.log(routePath)
        
      }
    
   
    },
    watch: {
      '$route'(newRoute, oldRoute) {
        //console.log(newRoute.params.lang)
        this.changeLanguage(newRoute.params.lang)
      },
    },
    created(){

      if(this.$route.params.lang === undefined){
        this.changeLanguage('en');
      }

      if(this.$route.params.lang !== undefined && this.$route.params.lang.length == 2){
        this.changeLanguage(this.$route.params.lang);
      }

    }
})


