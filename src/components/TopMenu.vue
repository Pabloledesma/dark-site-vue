<template>
	<div>
        <ul class="nav navbar-nav navbar-right">
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
                <a :href="$t('topMenu.copaCom.url')" target="_blank">
                  {{ $t("topMenu.copaCom.text") }}
                </a>
            </li>
        </ul>
	</div>
</template>

<script>
export default {
  
    name: 'TopMenu',

}
</script>

<style>

</style>
 
