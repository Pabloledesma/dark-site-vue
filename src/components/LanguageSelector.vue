<template>
	<div class="lang_selector">
        <div class="form-group">
            <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-globe fa-3"></i></div>
                <select class="form-control" v-model="language" @input="changeLanguage($event.target.value)" v-cloak>
                    <option value="en">{{ $t("optionLabel.english") }}</option>
                    <option value="es">{{ $t("optionLabel.spanish") }}</option>
                    <option value="pt">{{ $t("optionLabel.portuguese") }}</option>
                </select>
            </div>
        </div>
    </div>
</template>
<script>
	export default {
		name: 'language-selector',
		props: {
			currentLang: {
				default(){
					return 'es'
				}
			}
		},

		data(){
			return {language: 'es'}
		},
		
		methods: {
			changeLanguage(lang){
				this.$emit('input', lang);
				this.language = lang;
			}
		}
	}
</script>