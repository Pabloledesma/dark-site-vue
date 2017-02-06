<template>
<div>
	<article v-for="notice in noticesOrdered">
      <div class="Media">
        <div class="Media__body">

        	<h2>{{notice.title}}</h2>

        	<div class="date-field">
        		<span class="country">{{ notice.city }}</span>
        		<span class="date">{{ notice.date }}</span>
        	</div>

          	<div v-html="notice.body" class="content"></div>

        </div>
      </div>
      <hr>
	</article>
</div>

</template>
<script>
import news from '../news'

	export default {
		name: 'PressReleases',
		mounted(){
			Event.$on('changeLanguage', (lang) => {
				if(news[lang]){
					this.currentLang = lang;
					this.news = news[lang];
				}
			});
		},
		data(){
			return {
				news: news.es,
				currentLang: 'es'
			};
		},

		computed: {
			noticesOrdered(){
				return _.orderBy(this.news, 'date')
			}
			
		}
	}
</script>

