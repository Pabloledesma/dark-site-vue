<template>
<div>
	<article v-for="notice in noticesOrdered">
      <div class="Media">
        <div class="Media__body">
        	<h2>{{notice.title}}</h2>
          <div v-html="notice.body"></div>
        </div>
      </div>
      <hr>
	</article>
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