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
						<!-- <div class="checkbox">
						    <label>
						      	<input type="checkbox" v-model="addTranslation" @click="clearForm"> Add translation
						    </label>
					  	</div> -->
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
							name="location" 
							placeholder="Location" 
							v-model.trim="location">
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
						<th>date</th>
						<th>location</th>
						<th>delete</th>
					</tr>
					<tr 
						v-for="notice in notices" 
						@click="selectNotice(notice)" 
						:class="{'selected': selectedNotice === notice }"
					>
						<td>{{notice.date}}</td>
						<td>{{notice.location}}</td>
						<td>
							<a @click.prevent="removeNotice(notice)">
								<i class="fa fa-trash" aria-hidden="true"></i>
							</a>
						</td>
					</tr>
				</table>
				<pre>{{ translations }}</pre>
			</div>
		</div><!--row-->
	</div>
</template>
<script>
import firebase from 'firebase'

	export default {
		name: 'create-notice-component',
		data(){
			return{
				language: 'es',
				title: '',
				body: '',
				location: '',
				date: '',
				error: false,
				numOfTranslations: 1, 
				addTranslation: false,
				selectedNotice: {}
			};
		},

		firebase(){
			return {
				notices: db.ref('notices'),
				translations: db.ref('translations')
			}; 
		},

		methods: {

			/**
			* Saves a new notice to the firebase DB
			**/
			addNotice(){

				//let uid = firebase.auth().currentUser.Uid;

				let notice = {
					//user_id: uid, 
					date: this.date,
					location: this.location
				};

				// Get a key for a new notice
				let newNoticeKey = db.ref().child('notices').push().key;
				// Get a key for a new translation
				let newTranslationKey = db.ref().child('translations').push().key;

				let translation = {
					notice_id: newNoticeKey,
					language: this.language,
					title: this.title,
					body: this.body
				};

				let updates = {};
				updates['/notices/' + newNoticeKey] = notice;
				updates['/translations/' + newTranslationKey] = translation;
				
				db.ref().update(updates)
					.then(this.clearForm())
					.catch(error => console.log(error))
				
			},

			/**
			* It add a translation to an existing notice
			**/
			addTranslation(notice){
				let translation = {
					notice_id: notice.key,
					language: this.language,
					title: this.title,
					body: this.body
				};

				let newTranslationKey = db.ref().child('translations').push().key;

				let updates = {};
				updates['/translations/' + newTranslationKey] = translation;
				db.ref().update(updates).catch(error => console.log(error))
			},


			removeNotice(notice){
				// Delete all translations

				db.ref('notices').child(notice['.key']).remove()
			},

			clearForm(){
				this.title = '';
				this.body = '';
				this.city = '';
				this.date = '';
			},

			selectNotice(notice){
				//console.log(notice)
				// Select tranlations for this notice
				this.$bindAsArray('translations', db.ref('translations').orderByChild('notice_id').equalTo(notice['.key']));

				console.log(this.translations);
				// this.selectedNotice = notice;
				// this.title = this.selectedNotice.translations.en.title;
				// this.body = this
			}
		},

	}
</script>