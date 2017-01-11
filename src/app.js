import router from './router'

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