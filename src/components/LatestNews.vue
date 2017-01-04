<template>
	<div>
		<h1>{{ $t("latestNewsPage.title") }}</h1>
		<hr>
		<div v-for="notice in news">
			<h3>{{ notice.title }}</h3>

			<div v-html="notice.body"></div>
			{{ notice.date | formatDate }}
		</div>
	</div>
	

</template>

<script>
import news from '../news'


	export default {
		name: 'LatestNews',
		data(){
			return {
				news: news.news
			};
		},
		mounted(){
			console.log(news);
		}
	}
</script>