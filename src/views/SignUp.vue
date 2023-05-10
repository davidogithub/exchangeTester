<template>
    <v-container>
        <v-card>
            <v-form @submit.prevent="signUp">
                <v-text-field
                    v-model="email"
                    label="Email Address"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="confirmPassword"
                    label="Confirm Password"
                    required
                ></v-text-field>
                <v-btn type="signUp" block class="mt-2">Login</v-btn>
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
            password: '',
            confirmPassword:''
        }
    },
    method: {
        async signUp() {
            if ( this.password != this.confirmPassword ) {
                alert( JSON.stringify( "The passwords do not match.", null, 2 ) )
                return
            }
            try {
                const { user } = await Auth.signUp({
                    username: this.email,
                    password: this.password
                })
                console.log(user)
            } catch(error) {
                console.log( error )
            }
        }
    }
}
</script>