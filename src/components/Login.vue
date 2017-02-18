<template>
	 <div class="container">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input 
        	type="email" 
        	v-model="email" 
        	class="form-control" 
        	placeholder="Email address" 
        	required autofocus
        >
        <label for="inputPassword" class="sr-only">Password</label>
        <input 
        	type="password" 
        	v-model="password" 
        	class="form-control" 
        	placeholder="Password" 
        	required
        >

        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="submitForm">Sign in</button>
      </form>
      <p class="text-danger" v-if="errorMessage">{{ errorMessage }}</p>
    </div> <!-- /container -->

</template>
<script type="text/javascript">
	export default {
		name: 'login-component',
		data(){
			return {
				email: '',
				password: '',
				errorMessage: '',
				errorCode: ''
			};
		},

		methods: {
			login(){
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((error) => {
				  // Handle Errors here.
				  this.errorCode = error.code;
				  this.errorMessage = error.message;
				  // ...
				});
			},

			logout(){
				firebase.auth().signOut().then(function() {
				  console.log('hasta pronto!')
				}, function(error) {
				  console.log(error)
				});
			}
		}
	}
</script>