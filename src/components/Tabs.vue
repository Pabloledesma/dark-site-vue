<template>
    <ul class="tabs nav-tabs">
        <li :class="{ active: (activeTab === tab) }" v-for="tab in tabs" @click="activate(tab)">{{ tab }}</li>
        <slot></slot>
    </ul>
</template>
<script>
	export default {
		name: 'tabs',
		data() {
		    return {
		      activeTab: '',
		      tabs: []
		    }
  		},

		methods: {
			activate(tab) {
			  	this.activeTab = tab;
			  	this.$emit('activateTab', tab);
			}
		},

		/**
		* The first tab is active by default 
		*/
		// mounted(){
		// 	this.activeTab = this.tabs[0];
		// 	this.$emit('activateTab', this.tabs[0]);
		// }
	}
</script>