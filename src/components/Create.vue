<template>
	<div>
		<h3>Create news</h3>
		<form>
			<div class="form-group">
				<select name="language" v-model="language">
					<option value="es">Spanish</option>
					<option value="en">English</option>
					<option value="pt">Portuguesse</option>
				</select>
			</div>
			<div class="form-group">
				<input type="text" name="title" placeholder="Title" required v-model="title">
			</div>
			<div class="form-group">
				<input type="text" name="place" placeholder="Place" v-model="place">
			</div>
			<div class="form-group">
				<input type="date" name="date" required v-model="dateString">
			</div>
			<div class="form-group">
				<input type="text" name="description" placeholder="description" required v-model="description">
			</div>
			<div class="form-group">
				<button type="submit" class="btn btn-primary" @click.prevent="create">Create</button>
			</div>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'Create',
		data(){
			return {
				title: '',
				place: '',
				dateString: '',
				language: 'es'
			};
		},
		methods: {
			create(){
				console.log('new was created at: ' + this.dateString)
			},
			computed: {
				// date(){
				// 	return 
				// }
			}
		}
	}
</script>