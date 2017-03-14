import Vue from 'vue'
import VueFire from 'vuefire'
import db from '../firebase-setup'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import moment from 'moment'
import Login from './components/Login.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import TopMenu from './components/TopMenu.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import FooterComponent from './components/FooterComponent.vue'
import es from './locales/es'
import pt from './locales/pt'
import en from './locales/en'
import routes from './routes.js'

// install plugin
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(VueI18n)

// set lang
let lang = 'es'
Vue.config.lang = ''
Vue.config.fallbackLang = 'en'
window.db = db;
window.moment = moment;
window.Vue = Vue;
window.lang = lang;
window.Event = new Vue();

// set locales
Vue.locale('en', en)
Vue.locale('pt', pt)
Vue.locale(lang, es)

Vue.config.lang = lang
const router = new VueRouter(routes)

var vm = new Vue({

    router,

  	el: '#app',

  	components: {
  		TopMenu,
  		Tabs, 
  		Tab,
      LanguageSelector,
      FooterComponent,
      Login
  	},

  	data: {

      /**
      * Idioma por defecto
      **/
  		currentLang: 'en',
      en,
      es,
      pt 
  	},

    methods: {
      changeLanguage(lang){
        this.currentLang = lang;
        this.translateRoute(lang)
        Vue.config.lang = lang;
        window.moment = moment
        window.lang = lang;
      },

      translateRoute(lang){
        if(this.$route.name != 'login' && this.$route.name != 'create'){
          
          // Get current url and currentLanguage
          let routePath = this.$route.path.split('/')
          let currentUrl = routePath[1];
          let currentLang = routePath[2];

          //console.log('current route is: ' + currentUrl);
          // Search the index of the current route
          let indexOfCurrentRoute = null;
          for( const key in this[currentLang].routes ){
            if ( this[currentLang].routes[key].indexOf( currentUrl ) != -1 ){
              //console.log(this[currentLang].routes[key]);
              indexOfCurrentRoute = key;
            }
          }
          if(indexOfCurrentRoute){
            //console.log('translated route: ' + this[lang].routes[indexOfCurrentRoute]);
            router.replace(this[lang].routes[indexOfCurrentRoute]);
            return;
          }
          
          while( routePath.length >= 3 ){
            routePath.pop()
          }

          routePath = routePath.join().replace(',', '') + '/' + this.currentLang
          router.replace('/' + routePath)
        }
      }
    },

    /**
    * For this function we could create an object with the routes that do not need to be translated
    **/
    watch: {
      '$route'(newRoute, oldRoute) {
        if(newRoute.name != 'login' && newRoute.name != 'create')
        this.changeLanguage(newRoute.params.lang)
      },
    },

    created(){
      /**
      * Default route
      */
      if(this.$route.params.lang === undefined){
        router.replace('/comunicados-de-prensa/es');
      }

      if(this.$route.params.lang !== undefined && this.$route.params.lang.length == 2){
        this.changeLanguage(this.$route.params.lang);
      }
    }
})

window.vm = vm;





