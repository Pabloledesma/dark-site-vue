<template>
<div>
	<h1>{{ $t("topMenu.pressReleases.text") }}</h1>
	<hr>

	<div v-for="notice in noticesOrdered">
		<h2>{{notice.title}}</h2>
		<p>{{notice.date | formatDate}}</p>
		<div v-html="notice.body"></div>
	</div>
</div>

</template>
<script>
import _ from 'lodash'
import news from '../news'

	export default {
		name: 'PressReleases',
		data(){
			return {
				news: news
			};
		},
		computed: {
			noticesOrdered(){
				return _.orderBy(this.news, 'date', 'desc')
			}
		}
	}
</script>