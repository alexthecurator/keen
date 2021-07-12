<template>
    <b-modal class="getstarted" id="getstarted" title="Register today" content-class="shadow" centered hide-header hide-footer >
        <b-form>
            <div class="my-2">
            <label class="deepblue" for="inline-form-input-name">Name</label>
              <b-form-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Eg:  `Ronald Jones`"
                v-model="inputName"
            ></b-form-input>  
            </div>
            <div class="my-2">
                <label class="deepblue" for="inline-form-input-email">Email</label>
                <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input 
                    id="inline-form-input-email"
                    placeholder="Email"
                    v-model="inputEmail"
                ></b-form-input>
                </b-input-group>  
            </div>

            <b-button 
            class="my-2 blue-bg" 
            variant="" 
            type="submit"
            @click="Subscribing()">Subscribe</b-button>
        </b-form>
    </b-modal>
</template>

<script>
import reactive  from 'vue';
import onMounted  from 'vue';
import ref  from 'vue';
import db from '../../firebase/configInit';

export default {
    name: 'getstarted',
    setup () { 
        const inputName = ref("");
        const inputEmail = ref("");

        const state = reactive({
            names: "",
            emails: ""
        });

        const Subscribing = () => {
            const subscriberRef = db.database().ref("names", "emails");

            if(inputName.value !== "" || inputName.value === "" && inputEmail.value !== "" || inputEmail.value === ""){
                return;
            }

            const subscriber = {
                subname: state.names,
                subemail: state.emails
            }
            
            subscriberRef.push(subscriber);
            inputName.value = "";
            inputEmail.value = "";
        }

        onMounted(() => {
            const subscriberRef = db.database().ref("names", "emails");

            subscriberRef.on('value', snapshot => {
            const data = snapshot.val();
            let subscribers = [];

            Object.keys(data).forEach(key => {
            subscribers.push({
                id: key,
                name: data[key].subname,
                email: data[key].subemail
                });
            });

            state.names = inputName;
            state.emails = inputEmail;

            });
        });

        return {
            inputName,
            inputEmail,
            Subscribing,
            state
        }
    }
}
// import refs from 'vue'
// import AuthService from '../../apiauth/authservice'
// import axios from 'axios'

// const API_URL = 'http://localhost:8000'
// const auth = new AuthService()

// export default {
//     name: 'getstarted',
//     // setup(){
//     //     const name = refs("");
//     //     const email = refs("");
//     // },
//     data () {
//         this.handleAuthentication()
//         this.authenticated = false

//         auth.authNotifier.on('authChange', authState => {
//         this.authenticated = authState.authenticated
//     })

//     return {
//         authenticated: false,
//         message: ''
//     }
//   },
//   methods: {
//     // subscribe(){
//     //     const push = auth
//     // },
//     login() {
//         auth.login()
//     },
//     handleAuthentication() {
//         auth.handleAuthentication()
//     },
//     logout() {
//         auth.logout()
//     },
//     privateMessage() {
//         const url = `${API_URL}/api/private/`
//         return axios.get(url, {headers: {Authorization: `Bearer ${auth.getAuthToken()}`}}).then((response) => {
//         console.log(response.data)
//         this.message = response.data || ''
//         })
//     }
//   }
// }
</script>