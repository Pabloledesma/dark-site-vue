<template>
	<div class="container">
		<div class="row">
			<div class="col-lg-8 col-md-8 col-xs-12">
				<form class="form">
					<div class="form-group">
						<select class="form-control" name="language" v-model="language">
							<option value="es">ES</option>
							<option value="us">US</option>
							<option value="pt">PT</option>
						</select>
					</div>

					<div class="form-group">
						<input 
							class="form-control" 
							type="text" 
							name="title" 
							placeholder="Title" 
							v-model.trim="title" required>
						<p class="text-danger" v-if="!title && error">The title is required</p>
					</div>

					<div class="form-group">
						<textarea	
							class="form-control" 
							name="body" 
							placeholder="Body" 
							v-model="body" required></textarea> 
						
						<p class="text-danger" v-if="!body && error">Body is required</p>
					</div>

					<div class="form-group">
						<input 
							class="form-control" 
							type="text" 
							name="city" 
							placeholder="City" 
							v-model.trim="city">
					</div>

					<div class="form-group">
						<input 
							class="form-control" 
							type="date" 
							name="date" 
							placeholder="Date" 
							v-model="date" required>
						<p class="text-danger" v-if="!date && error">Date is required</p>
					</div>

					<div class="form-group">
						<button class="btn btn-primary" @click.prevent="addNotice">Create</button>
					</div>
				</form>
			</div>

			
		</div><!--row-->
	</div>
</template>
<script>

	export default {
		name: 'create-notice-component',
		data(){
			return{
				language: 'es',
				title: '',
				body: '',
				city: '',
				date: '',
				error: false
				
			};
		},

		methods: {
			addNotice(){

				if( this.title && this.body && this.date ){
					if(db.ref('notices').push({
						language: this.language,
						title: this.title,
						body: this.body,
						city: this.city,
						date: this.date
					})){
						console.log('datos agregados');
						this.clearForm();
						return;
					}
					
				}

				this.error = true;
			},

			clearForm(){
				this.title = '';
				this.body = '';
				this.city = '';
				this.date = '';
			}
		}
	}
</script>