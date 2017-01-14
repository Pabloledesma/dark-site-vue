<template>
<div>
    <ul class="nav nav-tabs">
        <li :class="{ active: tab.isActive }" v-for="tab in tabs" @click="selectTab(tab)">
        	<a>{{ $t( tab.label ) }}</a>
        </li>
    </ul>
    <slot></slot>
</div>
</template>
<script>
	export default {
		name: 'tabs',
		data(){
			return {
				tabs: []
			};
		},
		created(){
			this.tabs = this.$children;
		},
		methods:{
			selectTab( selectedTab ){
				this.tabs.forEach(tab => {
					tab.isActive = ( tab.label == selectedTab.label );
				});
			}
		}

	}
</script>