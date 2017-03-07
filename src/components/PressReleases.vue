<template>
<div>
	<article v-for="notice in news">
      <div class="Media">
        <div class="Media__body">

        	<h2>{{notice.title}}</h2>

        	<div class="date-field">
        		<span class="country">{{ notice.city }}</span>
        		<span class="date">{{ notice.date }}</span>
        	</div>

          	<div v-if="notice.bodyHtml" v-html="notice.bodyHtml" class="content"></div>

          	<div v-if="notice.bodyText" v-html="notice.bodyText" class="content"></div>

        </div>
      </div>
      <hr>
	</article>
</div>

</template>
<script>
import Firebase from 'firebase'

var firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDwB6HDEeLPprACvtOE72FBnweOAwPrTUo",
  authDomain: "darksite-cd058.firebaseapp.com",
  databaseURL: "https://darksite-cd058.firebaseio.com",
  storageBucket: "darksite-cd058.appspot.com",
  messagingSenderId: "924962095903"
})

var db = firebaseApp.database()
const newsRef = db.ref('noticias')

	export default {
		name: 'PressReleases',
		firebase: {
      			news: newsRef
    	},
		mounted(){
			Event.$on('changeLanguage', (lang) => {
				this.currentLang = lang;
			});
		},
		data(){
			return {
				currentLang: 'es'
			};
		}
	
	}
</script>

