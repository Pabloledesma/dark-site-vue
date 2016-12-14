<template>
	<nav>
        <div id="toggle-menu">
            <button class="navbar-toggler hidden-sm-up collapsed" type="button" data-toggle="collapse" data-target="#navbar-header" aria-controls="navbar-header" aria-expanded="false">
                ☰
            </button>
        </div>
        <ul class="top-menu">
            <li>
                <router-link :to="$t('topMenu.latestNews.url')">
                  {{ $t("topMenu.latestNews.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.pressReleases.url')">
                  {{ $t("topMenu.pressReleases.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.assistance.url')">
                  {{ $t("topMenu.assistance.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.about.url')">
                  {{ $t('topMenu.about.text') }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.copaCom.url')">
                  {{ $t("topMenu.copaCom.text") }}
                </router-link>
            </li>
        </ul>
	</nav>
</template>

<script>
export default {
  
    name: 'TopMenu',
   
    data () {
        return {
          
        };
    }
}
</script>
 
<style>

</style>
