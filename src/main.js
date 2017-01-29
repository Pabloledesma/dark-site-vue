import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import _ from 'lodash'
import moment from 'moment'
import TopMenu from './components/TopMenu.vue'
import LatestNews from './components/LatestNews.vue'
import PressReleases from './components/PressReleases.vue'
import Assistance from './components/Assistance.vue'
import About from './components/About.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import es from './locales/es'
import pt from './locales/pt'
import en from './locales/en'
import news from './news'


// install plugin
Vue.use(VueRouter)
Vue.use(VueI18n)

// set lang
let lang = 'es'
Vue.config.lang = ''
Vue.config.fallbackLang = 'en'
window.moment = moment;
window.Vue = Vue;
window._ = _;
window.news = news;
window.lang = lang;

// set locales
Vue.locale('en', en)
Vue.locale('pt', pt)
Vue.locale(lang, es)


Vue.config.lang = lang
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
  ]
  
})

new Vue({

    router,

  	el: '#app',

  	components: {
  		TopMenu,
  		Tabs,
  		Tab
  	},

  	data: {

      /**
      * Idioma por defecto
      **/

  		currentLang: 'en'
  	},

  	methods: {
  		changeLanguage(lang){
        this.currentLang = lang;
        this.$emit('change', lang)
        Vue.config.lang = lang;
        

        //formato del tiempo
        switch(lang){
          case 'en':
            moment.locale('en-ca')
            break
          case 'es':
            moment.locale('es')
            break
          case 'pt':
            moment.locale('pt-br')
            break
        }

        window.moment = moment
        window.lang = lang;
        
        this.replaceRoute()
      },

      replaceRoute(){
        let routePath = this.$route.path.split('/')
        
        while( routePath.length >= 3 ){
          routePath.pop()
        }

        routePath = routePath.join().replace(',', '') + '/' + this.currentLang
        router.replace('/' + routePath)
      }
    },
    watch: {
      '$route'(newRoute, oldRoute) {
        this.changeLanguage(newRoute.params.lang)
      },
    },
    created(){

      if(this.$route.params.lang === undefined){
        this.changeLanguage('es');
        router.push({name: 'pressReleases', params: {lang: 'es'}})
      }

      if(this.$route.params.lang !== undefined && this.$route.params.lang.length == 2){
        this.changeLanguage(this.$route.params.lang);
      }


    }
})





