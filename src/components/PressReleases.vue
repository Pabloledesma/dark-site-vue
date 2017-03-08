<template>
<div>
	<pre>{{ notices }}</pre>
	<!-- <article v-for="notice in anArray">
      <div class="Media" v-if="notice.translations[currentLang]">
        <div class="Media__body">

        	<h2>{{notice.translations[currentLang].title}}</h2>

        	<div class="date-field">
        		<span class="country">{{ notice.translations[currentLang].city }}</span>
        		<span class="date">{{ notice.translations[currentLang].date }}</span>
        	</div>

          	<div v-html="notice.translations[currentLang].body" class="content"></div>

        </div>
      </div>
      <hr>
	</article> -->
	<!-- <p class="text-danger" v-if="!news.lenght">No hay noticias en el idioma seleccionado</p> -->
</div>

</template>
<script>
/** It show all notices in cronologic order **/

	export default {
		name: 'PressReleases',
		mounted(){
			Event.$on('changeLanguage', (lang) => {
				if(news[lang]){
					this.currentLang = lang;
				}
			});
		},

		firebase(){
			return {
				notices: db.ref().child('translations/' + this.currentLang)
			};
			
		},

		data(){
			return {
				currentLang: 'en'
			};
		}
	}
</script>

