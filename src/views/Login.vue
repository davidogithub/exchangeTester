<template>
  <v-container>
    <v-card
    >
      <v-form @submit.prevent="login">
          <v-text-field
            v-model="email"
            label="Email Address"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
          ></v-text-field>
          <v-btn type="login" block class="mt-2">Login</v-btn>
        </v-form>
    </v-card>
  </v-container>
</template>
  
<script>
import { Auth } from 'aws-amplify';

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      try {
        await Auth.signIn( this.email, this.password )
        this.$router.push( '/' )
      } catch( error ) {
        alert( JSON.stringify( error, null, 2 ) )
      }
    }
  }
}
</script>

<style>
  .fill-height {
    height: 100%
  }
</style>