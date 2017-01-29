<template>
	<div>
		<article>
			<div class="Media">
	        	<div class="Media__body">
			    	<h2>{{lastNotice.title}}</h2>

			    	<div class="date-field">
			    		<span class="country">{{ lastNotice.city }}</span>
			    		<span class="date">{{ lastNotice.date }}</span>
			    	</div>

	      			<div v-html="lastNotice.body" class="content"></div>
	      		</div>
	      	</div>
		</article>
	</div>
</template>

<script>
import _ from 'lodash'
import news from '../news'

	export default {
		name: 'LatestNews',
		data(){
			return {
				news: news
			};
		},

		/**
		* Return the last notice
		*/
		computed: {
			lastNotice(){
				return _.orderBy(this.news[window.lang], 'date').pop()
			}
		}
	}
</script>