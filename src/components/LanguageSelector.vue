<template>
	<div class="lang_selector">
        <div class="form-group">
            <select class="form-control input-sm" v-model="language" @input="changeLanguage($event.target.value, $event)" v-cloak>
                <option value="en">{{ $t("optionLabel.english") }}</option>
                <option value="es">{{ $t("optionLabel.spanish") }}</option>
                <option value="pt">{{ $t("optionLabel.portuguese") }}</option>
            </select>
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
				Event.$emit('changeLanguage', lang);
				this.language = lang;
			}
		}
	}
</script>
<style>
	.form-control { 
		height: 28px; 
		padding: 4px 13px;
		color: #fff;
		background-color: #989898;
		border:none; 
	}
</style>