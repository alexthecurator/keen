<template>
    <b-modal id="getstarted" title="Register today">
        <b-form>
            <div class="my-2">
            <label class="black" for="inline-form-input-name">Name</label>
              <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Eg:  `Ronald Jones`"
            ></b-form-input>  
            </div>
            <div class="my-2">
                <label class="black" for="inline-form-input-email">Email</label>
                <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input id="inline-form-input-email" placeholder="Email"
                ></b-form-input>
                </b-input-group>  
            </div>

            <b-button 
            class="my-2" 
            variant="primary yellow-bg" 
            type="submit"
            v-if="authenticated"
            @click="subscribe">Subscribe</b-button>
        </b-form>
    </b-modal>
</template>

<script>
import AuthService from '../../auth/AuthService'
import axios from 'axios'

const API_URL = 'http://localhost:8000'
const auth = new AuthService()

export default {
    name: 'getstarted',
    data () {
        this.handleAuthentication()
        this.authenticated = false

        auth.authNotifier.on('authChange', authState => {
        this.authenticated = authState.authenticated
    })

    return {
        authenticated: false,
        message: ''
    }
  },
  methods: {
    login() {
        auth.login()
    },
    handleAuthentication() {
        auth.handleAuthentication()
    },
    logout() {
        auth.logout()
    },
    privateMessage() {
        const url = `${API_URL}/api/private/`
        return axios.get(url, {headers: {Authorization: `Bearer ${auth.getAuthToken()}`}}).then((response) => {
        console.log(response.data)
        this.message = response.data || ''
        })
    }
  }
}
</script>