import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from './locales'
import TopMenu from './components/TopMenu.vue'


// install plugin
Vue.use(VueI18n)

// set lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

window.Event = new Vue();

new Vue({
  	el: '#app',

  	components: {
  		TopMenu
  	},

  	data: {
  		currentLang: 'en'
  	},
  	methods: {
  		changeLanguage(lang){
  			Vue.config.lang = lang
  		}
  	},
  	
  	// render: h => h(App),


  	
})
