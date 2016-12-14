<template>
	<nav>
        <div id="toggle-menu">
            <button class="navbar-toggler hidden-sm-up collapsed" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header" aria-expanded="false">
                ☰
            </button>
        </div>
        <ul class="top-menu">
            <li v-for="item in menu_top">
                <a :href="item.url">
                  {{ item.text }}
                </a>
            </li>
        </ul>
	</nav>
</template>

<script>
export default {
  
    name: 'TopMenu',
   
    data () {
        return {
           menu_top: [
					{ text: 'Latest News', url: 'content/en/latest-news-en.html' },
					{ text: 'Press Releases', url: 'content/en/press-releases.html' },
					{ text: 'Assistance to Family', url: 'content/en/assistance-to-family.html' },
					{ text: 'About Copa Airlines', url: 'content/en/corporate-tabs.html' },
					{ text: 'Go to Copa.com', url: 'http://www.copaair.com/en/web/gs'}
				]
        };
    }
}
</script>
 
<style>

</style>
