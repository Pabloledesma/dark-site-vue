<template> 
	<div>
        <ul class="nav navbar-nav">
            <li>
                <router-link :to="$t('topMenu.latestNews.url')" role="button">
                  {{ $t("topMenu.latestNews.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.pressReleases.url')" role="button">
                  {{ $t("topMenu.pressReleases.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.assistance.url')" role="button">
                  {{ $t("topMenu.assistance.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.about.url')" role="button">
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


 
