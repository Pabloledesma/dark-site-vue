<template>
	<form>
		<div class="form-group">
			<input type="text" name="name" class="form-control" placeholder="Name" v-model="name">
		</div>
		<div class="form-group">
			<input type="password" name="name" class="form-control" placeholder="Password" v-model="password">
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-primary" @click.prevent="login">Login</button>
		</div>
	</form>
</template>
<script>
	export default {
		name: 'Auth',
		data(){
			return {
				name: '',
				password: ''
			};
		},
		methods: {
			login(){
				console.log('The user ' + this.name + ' was login');
			}
		}
	}
</script>