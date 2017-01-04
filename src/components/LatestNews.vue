<template>
	<div>
		<h1>{{ $t("latestNewsPage.title") }}</h1>
		<hr>
		
			<h2>{{ lastNotice.title }}</h2>
			<p>{{ lastNotice.date | formatDate }}</p>

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
				news: news.news
			};
		},
		computed: {
			lastNotice(){
				return _.orderBy(this.news, 'date').pop()
			}
		}
	}
</script>