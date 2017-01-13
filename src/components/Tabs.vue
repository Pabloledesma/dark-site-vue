<template>
    <div>
        <li :class="{ active: (activeTab === tab) }" v-for="tab in tabs" @click="activate(tab)">{{ tab }}</li>
        <slot></slot>
    </div>
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
			activate: function(tab) {
			  	this.activeTab = tab;
			  	this.$emit('activateTab', tab);
			}
		}
	}
</script>