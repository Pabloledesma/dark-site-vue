<template>
	<div>
		<h1>{{ $t("latestNewsPage.title") }}</h1>
		<hr>
		
			<h3>{{ lastNotice.title }}</h3>

			<div v-html="lastNotice.body"></div>
			{{ lastNotice.date | formatDate }}
		
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
		},

		mounted(){
			console.log(this.lastNotice.pop())
		}
	}
</script>