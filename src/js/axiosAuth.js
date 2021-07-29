import ref from '@vue/composition-api'
import AuthService from '../../apiauth/authservice'
import axios from 'axios'

const API_URL = 'http://localhost:8000'
const auth = new AuthService()

export default {
    name: 'getstarted',
    // setup(){
    //     const name = refs("");
    //     const email = refs("");
    // },
    data() {
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
        // subscribe(){
        //     const push = auth
        // },
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
            return axios.get(url, { headers: { Authorization: `Bearer ${auth.getAuthToken()}` } }).then((response) => {
                console.log(response.data)
                this.message = response.data || ''
            })
        }
    }
}