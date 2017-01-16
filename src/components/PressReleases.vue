<template>
<div>
	<div v-for="notice in noticesOrdered">
		<div class="card">
		  <div class="card-content">
		    <div class="media">
		      
		      <div class="media-content">
		        <h2 class="title is-4">{{notice.title}}</h2>
		      </div>
		    </div>

		    <div class="content">
		      <div v-html="notice.body"></div>
		    </div>
		  </div>
		</div>
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