<template>
<div>
	<div v-for="notice in noticesOrdered">
		<h2>{{notice.title}}</h2>
		<div v-html="notice.body"></div>
		<hr>
	</div>
</div>

</template>
<script>
	export default {
		name: 'PressReleases',
		data(){
			return {
				news: window.news
			};
		},
		computed: {
			noticesOrdered(){
				return _.orderBy(this.news[window.lang], 'date', 'desc')
			}
		}
	}
</script>