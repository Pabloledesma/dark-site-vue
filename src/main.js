import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import locales from './locales'
import moment from 'moment'
import TopMenu from './components/TopMenu.vue'
import LatestNews from './components/LatestNews.vue'
import PressReleases from './components/PressReleases.vue'
import Assistance from './components/Assistance.vue'
import About from './components/About.vue'


// install plugin
Vue.use(VueRouter)
Vue.use(VueI18n)

// set lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

const router = new VueRouter({
  
  routes: [
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
  ],
  beforeEach(to, from, next){
    console.log(to)
    console.log(from)

  }  
})

Vue.filter('formatDate', (value) => {
   if(value){
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
})

new Vue({

    router,

  	el: '#app',

  	components: {
  		TopMenu
  	},

  	data: {
  		currentLang: 'en'
  	},
  	methods: {
  		changeLanguage(lang){
  			//Change the language
        this.currentLang = lang
        Vue.config.lang = lang
        // Crear los nombres de las rutas con sus respectivos parametros
        //Replace route
        //this.replaceRoute()
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
      if(this.$route.params.lang){
        console.log(this.$route.params.lang)
      } else {
        console.log('nothing...')
      }
    }
})
