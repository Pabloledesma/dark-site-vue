<template>
	<div>
		<h2>{{ lastNotice.title }}</h2>

		<div v-html="lastNotice.body"></div>
		<hr>			
	</div>
	

</template>

<script>
	export default {
		name: 'LatestNews',
		data(){
			return {
				news: window.news
			};
		},
		computed: {
			lastNotice(){
				if(this.news[window.lang]){
					return _.orderBy(this.news[window.lang], 'date').pop()
				}

				return _.orderBy(this.news.es, 'date').pop()
			}
		}
		
	}
</script>