<template>
	<div>
		<article>
			<div class="Media">
	        	<div class="Media__body">
			    	<h2>{{lastNotice.title}}</h2>

			    	<div class="date-field">
			    		<span class="country" v-if="lastNotice.city">{{ lastNotice.city }}</span>
			    		<span class="country" v-if="! lastNotice.city">&nbsp;</span>
			    		<span class="date">{{ lastNotice.date }}</span>
			    	</div>

	      			<div v-html="lastNotice.body" class="content"></div>
	      		</div>
	      	</div>
		</article>
	</div>
</template>

<script>
import news from '../news'

	export default {
		name: 'LatestNews',
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

		/**
		* Return the last notice
		*/
		computed: {
			lastNotice(){
				return _.orderBy(this.news, 'date').pop()
			}
		}
	}
</script>
