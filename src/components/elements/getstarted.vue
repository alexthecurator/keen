<template>
    <b-modal class="getstarted" id="getstarted" title="Register today" content-class="shadow" centered hide-header hide-footer >
        <b-form @submit.prevent="subscribe">
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
            type="submit">Subscribe</b-button>
        </b-form>
    </b-modal>
</template>

<script>
import db from '../../firebase/configInit';
import 'firebase/database';

export default {
    name: 'getstarted',
    data() {
        return {
            inputName: '',
            inputEmail: ''
        }
    },
    methods: {
        subscribe(){
            function writeUserData(userId, name, email) {
                db.database().ref('users/' + userId).set({
                    username: name,
                    email: email,
                });
            }

            if(this.inputName !== "" || this.inputName === "" && this.inputEmail !== "" || this.inputEmail === ""){
                writeUserData(this.inputName,this.inputEmail);
                console.log('success');
            } else {
                console.log('failed');
            }

        }
    }
    // setup () { 
    //     const inputName = ref("");
    //     const inputEmail = ref("");

    //     const state = reactive({
    //         names: "",
    //         emails: ""
    //     });

    //     const subscribe = () => {
    //         const subscriberRef = db.database().ref("names", "emails");

    //         if(inputName.value !== "" || inputName.value === "" && inputEmail.value !== "" || inputEmail.value === ""){
    //             return;
    //         }

    //         const subscriber = {
    //             subname: state.names,
    //             subemail: state.emails
    //         }
            
    //         subscriberRef.push(subscriber);
    //         inputName.value = "";
    //         inputEmail.value = "";
    //     }

    //     onMounted(() => {
    //         const subscriberRef = db.database().ref("names", "emails");

    //         subscriberRef.on('value', snapshot => {
    //         const data = snapshot.val();
    //         let subscribers = [];

    //         Object.keys(data).forEach(key => {
    //         subscribers.push({
    //             id: key,
    //             name: data[key].subname,
    //             email: data[key].subemail
    //             });
    //         });

    //         state.names = inputName;
    //         state.emails = inputEmail;

    //         });
    //     });

    //     return {
    //         inputName,
    //         inputEmail,
    //         subscribe,
    //         state
    //     }
    // }
}
</script>