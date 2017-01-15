<template>
	<div>
		<h2>{{ lastNotice.title }}</h2>
		<div v-html="lastNotice.body"></div>
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