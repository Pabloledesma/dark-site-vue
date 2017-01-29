import './bootrstap';
import router from './routes'
import TopMenu from './components/TopMenu.vue'
import Tabs from './components/Tabs.vue'
import Tab from './components/Tab.vue'

new Vue({

    el: '#app',

    router,
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







