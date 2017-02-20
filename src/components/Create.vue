<template>
	<div class="container">
		<div class="row">
			<!-- Create news form -->
			<div class="col-lg-4 col-md-4 col-xs-12">
				<form class="form">
					<div class="form-group">
						<select class="form-control" name="language" v-model="language">
							<option value="es">{{ $t('optionLabel.spanish') }}</option>
							<option value="en">{{ $t('optionLabel.english') }}</option>
							<option value="pt">{{ $t('optionLabel.portuguese') }}</option>
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

			<!-- News List -->
			<div class="col-lg-8 col-md-8 col-xs-12">
			<pre>{{ news }}</pre>
				<table class="table">
					<tr>
						<th>id</th>
						<th>languages</th>
						<th>edit</th>
						<th>delete</th>
					</tr>
					<tr v-for="notice in news">
						<td>{{notice['.key']}}</td>
						<td colspan="3">
							<!-- translations -->
							<table class="table">
								<tr v-for="(value, key, index) in translations">
									<td>{{ key }}</td>
									<td>
										<a @click.prevent="setEditFormWith(notice)">
											<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
										</a>
									</td>
									<td>
										<a @click.prevent="removeNotice(notice)">
											<i class="fa fa-trash" aria-hidden="true"></i>
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
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
				error: false,
				numOfTranslations: 1
			};
		},

		firebase(){
			return {
				news: db.ref('notices').orderByChild('translations'),
				translations: db.ref().child('notices').orderByChild('translations')
			}; 
		},

		methods: {
			addNotice(){

				if( this.title && this.body && this.date ){
					if(this.$firebaseRefs.news.push({
						translations: {
							[this.language]:{
								title: this.title,
								body: this.body,
								city: this.city,
								date: this.date
							}
						}
					})){
						console.log('datos agregados');
						this.clearForm();
						return;
					}
					
				}

				this.error = true;
			},

			setEditFormWith(notice){
				console.log('from setEditFormWith:');
				console.log(notice);
				this.title = notice.translations[this.language].title;
				this.body = notice.translations[this.language].body;
				this.city = notice.translations[this.language].city;
				this.date = notice.translations[this.language].date;
			},



			removeNotice(notice){
				db.ref('notices').child(notice['.key']).remove()
			},

			clearForm(){
				this.title = '';
				this.body = '';
				this.city = '';
				this.date = '';
			}
		},

	}
</script>