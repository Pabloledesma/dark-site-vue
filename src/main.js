import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import locales from './locales'
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

// Rout definitions
const routes = [
  { path: '/press-releases/:lang', component: PressReleases },
  { path: '/about-us/:lang', component: About },
  { path: '/assistance-to-family/:lang', component: Assistance },
  { path: '/latest-news/:lang', component: LatestNews }
];

const router = new VueRouter({routes})

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
        Vue.config.lang = lang

        //Replace route
        router.replace( '/' + lang )

       //Crear el redireccionamiento a las rutas en su respectivo idioma sin el parametro de lenguage seleccionado
      },

      replaceRoute(){
        let routePath = this.$route.path.split('/')
        while( routePath.length >= 3 ){
          routePath.pop()
        }
        routePath = routePath.join().replace(',', '') + '/' + this.currentLang
        
      }
    }
})
