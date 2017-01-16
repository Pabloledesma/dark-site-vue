<template>
	<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
            <li>
                <router-link :to="$t('topMenu.latestNews.url')" class="page-scroll">
                  {{ $t("topMenu.latestNews.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.pressReleases.url')" class="page-scroll">
                  {{ $t("topMenu.pressReleases.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.assistance.url')" class="page-scroll">
                  {{ $t("topMenu.assistance.text") }}
                </router-link>
            </li>
            <li>
                <router-link :to="$t('topMenu.about.url')" class="page-scroll">
                  {{ $t('topMenu.about.text') }}
                </router-link>
            </li>
            <li>
                <a :href="$t('topMenu.copaCom.url')" target="_blank">
                  {{ $t("topMenu.copaCom.text") }}
                </a>
            </li>
          <!--   <li>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-addon"><i class="fa fa-globe fa-3"></i></div>
                        <select class="form-control" v-model="currentLang" @change="changeLanguage(currentLang)" v-cloak>
                            <option value="en">{{ $t("optionLabel.english") }}</option>
                            <option value="es">{{ $t("optionLabel.spanish") }}</option>
                            <option value="pt">{{ $t("optionLabel.portuguese") }}</option>
                        </select>
                    </div>
                </div>
            </li> -->
        </ul>
	</div>
</template>

<script>
export default {
  
    name: 'TopMenu',
    data(){
        return { currentLang: 'es' }
    },
    methods: {
        changeLanguage(){
            console.log('lang changed!!')
        }
    }

}
</script>
 
<style>

</style>
