import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import _ from 'lodash'
import moment from 'moment'
import es from './locales/es'
import pt from './locales/pt'
import en from './locales/en'
import news from './news'


// set lang
let lang = 'es'
Vue.config.lang = ''
Vue.config.fallbackLang = 'en'



window.news = news;
window.lang = lang;

// set locales
Vue.locale('en', en)
Vue.locale('pt', pt)
Vue.locale(lang, es)


Vue.config.lang = lang

// install plugin
Vue.use(VueRouter)
Vue.use(VueI18n)

window.Vue = Vue;
window.moment = moment;
window._ = _;