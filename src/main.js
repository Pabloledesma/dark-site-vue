import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import _ from 'lodash'
import moment from 'moment'
import Login from './components/Login.vue'
import Create from './components/Create.vue'
import LanguageSelector from './components/LanguageSelector.vue'
import TopMenu from './components/TopMenu.vue'
import LatestNews from './components/LatestNews.vue'
import PressReleases from './components/PressReleases.vue'
import Assistance from './components/Assistance.vue'
import About from './components/About.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'
import FooterComponent from './components/FooterComponent.vue'
import es from './locales/es'
import pt from './locales/pt'
import en from './locales/en'
import news from './news'

// install plugin
Vue.use(VueFire)
Vue.use(VueRouter)
Vue.use(VueI18n)

var config = {
    apiKey: "AIzaSyDwB6HDEeLPprACvtOE72FBnweOAwPrTUo",
    authDomain: "darksite-cd058.firebaseapp.com",
    databaseURL: "https://darksite-cd058.firebaseio.com",
    storageBucket: "darksite-cd058.appspot.com",
    messagingSenderId: "924962095903"
};

var db = Firebase.initializeApp(config).database();
var noticesRef = db.ref('notices'); 

// set lang
let lang = 'es'
Vue.config.lang = ''
Vue.config.fallbackLang = 'en'
window.db = db;
window.moment = moment;
window.Vue = Vue;
window._ = _;
window.news = news;
window.lang = lang;
window.Event = new Vue();

// set locales
Vue.locale('en', en)
Vue.locale('pt', pt)
Vue.locale(lang, es)



Vue.config.lang = lang
const router = new VueRouter({
  
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
  
})

var vm = new Vue({

    router,

  	el: '#app',

    firebase: {
      notices: noticesRef.limitToLast(25)
    },

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
        //this.$emit('changed', lang)
        this.currentLang = lang;
        this.translateRoute(lang)
        Vue.config.lang = lang;
        window.moment = moment
        window.lang = lang;

        //formato del tiempo
        // switch(lang){
        //   case 'en':
        //     moment.locale('en-ca')
        //     break
        //   case 'es':
        //     moment.locale('es')
        //     break
        //   case 'pt':
        //     moment.locale('pt-br')
        //     break
        // }


        
      },

      translateRoute(lang){

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
    },

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





