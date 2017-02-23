<style>
	.selected { background-color: blue !important; color:#fff; }
</style>
<template>
	<div class="container">
		<div class="row">
			<!-- Create news form -->
			<div class="col-lg-4 col-md-4 col-xs-12">
				<form class="form">
					<div class="form-group">
						<div class="checkbox">
						    <label>
						      	<input type="checkbox" v-model="addTranslation" @click="clearForm"> Add translation
						    </label>
					  	</div>
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
				<table class="table table-striped">
					<tr>
						<th>id</th>
						<th>languages</th>
						<th>delete</th>
					</tr>
					<tr 
						v-for="notice in news" 
						@click="selectNotice(notice)" 
						:class="{'selected': selectedNotice === notice }"
					>
						<td>{{notice['.key']}}</td>
						<td>
							<ul>
								<li v-if="notice.translations.es">es</li>
								<li v-if="notice.translations.en">en</li>
								<li v-if="notice.translations.pt">pt</li>
							</ul>
						</td>
						<td>
							<a @click.prevent="removeNotice(notice)">
								<i class="fa fa-trash" aria-hidden="true"></i>
							</a>
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
				numOfTranslations: 1, 
				addTranslation: false,
				selectedNotice: {}
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
					var noticeKey = this.$firebaseRefs.news.push({ date: this.date }).key
					this.$firebase.translations.push({
						notice_id: noticeKey,
						language: this.language,
						title: this.title,
						body: this.body
					})
						
					this.clearForm();
					
				}

				this.error = true;
			},


			removeNotice(notice){
				db.ref('notices').child(notice['.key']).remove()
			},

			clearForm(){
				if(this.addTranslation){
					this.title = '';
					this.body = '';
					this.city = '';
					this.date = '';
				}
			},

			selectNotice(notice){
				this.selectedNotice = notice;
				this.title = this.selectedNotice.translations.en.title;
				this.body = this
			}
		},

	}
</script>