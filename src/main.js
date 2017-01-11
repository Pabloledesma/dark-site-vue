import System from 'systemjs'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import locales from './locales'
import moment from 'moment'


// install plugin
Vue.use(VueRouter)
Vue.use(VueI18n)

// set lang
Vue.config.lang = 'en'

// set locales
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})


Vue.filter('formatDate', (value) => {
   if(value){
      return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
})

window.Vue = Vue;
window.System = System;


