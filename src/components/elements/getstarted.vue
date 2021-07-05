<template>
    <b-modal id="getstarted" title="Register today">
        <b-form @click="submit">
            <div class="my-2">
            <label class="black" for="inline-form-input-name">Name</label>
              <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Eg:  `Ronald Jones`"
            v-model="username"></b-form-input>  
            </div>
            <div class="my-2">
                <label class="black" for="inline-form-input-email">Email</label>
                <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input id="inline-form-input-email" placeholder="Email"
                v-model="email"></b-form-input>
                </b-input-group>  
            </div>

            <b-button class="my-2" variant="primary yellow-bg" type="submit">Subscribe</b-button>
        </b-form>
    </b-modal>
</template>

<script>
import { reactive, refs } from 'vue';
// import db from '../../firebase/init';

export default {
    name: 'getstarted',
    setup(){
        const username = refs("");
        const email = refs("");
        const subscribeBTN = refs("");

        const state = reactive({
            username = "",
            email = ""
        });

        const subscribing = () => {
           if(username.value !== "" || username.value === null && email.value !== "" || email.value === null){
               state.username = username.value;
               state.email = email.value;
           }
        }
    return {
        username,
        email,
        subscribing
        }
    }
}
</script>