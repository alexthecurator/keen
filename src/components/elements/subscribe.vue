<template>
    <b-modal class="getstarted" id="getstarted" title="Register today" content-class="shadow" size="lg" centered hide-header hide-footer >
        <div class="row">
            <div class="col-xl-6 d-none d-xl-block">
                <div class="subimg-cont">
                    <img class="sub-img" src="https://images.unsplash.com/photo-1547658718-1cdaa0852790" alt="">
                </div>
            </div>
            <div class="col-xl-6 col-12">
                <b-form class="ml-xl-3 mr-xl-5 px-2 mx-4" @submit.prevent="subscribe">
                    <div class="py-5 mb-4">
                        <div class="py-2">
                            <h2 class="deepblue">Join us today</h2>
                        </div>
                        <div class="my-xl-2 my-2">
                            <label class="deepblue" for="inline-form-input-name">Name</label>
                            <b-form-input
                                id="inline-form-input-name"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                placeholder="Eg:  `Ronald jones`"
                                v-model="inputName">
                            </b-form-input>  
                        </div>
                        <div class="my-xl-2 my-2">
                            <label class="deepblue" for="inline-form-input-email">Email</label>
                            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                                <b-form-input 
                                    id="inline-form-input-email"
                                    placeholder="yourmail@domain.com"
                                    v-model="inputEmail">
                                </b-form-input>
                            </b-input-group>  
                        </div>
                        <div class="mt-xl-4">
                            <b-button 
                            class="my-2 gray-bg px-4 py-2 mr-2" @click="$bvModal.hide('getstarted')"
                            >Cancel</b-button>
                            <b-button 
                            class="my-2 bluegrad-bg px-4 py-2 ml-2"
                            type="submit">Subscribe</b-button>
                        </div>
                    </div>
                </b-form>
            </div>
        </div>
    </b-modal>
</template>

<script>
import {db} from '../../firebase/configInit';
import Swal from 'sweetalert2'
import 'firebase/firestore';

export default {
    name: 'getstarted',
    data() {
        return {
            inputName: '',
            inputEmail: '',
        }
    },
    methods: {
        subscribe(){
            var name = this.inputName;
            var email = this.inputEmail;
            var modal = this.$bvModal;
            var state = false;

            function writeUserData(name, email) {
                const subscribe = db.collection('subscribers').doc('subs');
                subscribe.set({
                    name: name,
                    email: email,
                });
                state = true;
            }

            function resetModal(){
                name = ' ';
                email = ' ';
                modal.hide('getstarted');
            }
            
            function checkEmail(){
                let emailFilter = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
                if(email.match(emailFilter)){ 
                    return true;
                } else {
                    return false;
                }
            }

            if(name !== "" && email !== ""){
                if( name !== null && checkEmail() === true){
                    writeUserData(name,email);
                    if(state === true){
                        resetModal();
                        Swal.fire({
                            title: 'Thank you for joining us!',
                            text: 'We send weekly updates on products and services.. stay tuned to find out more!',
                            timer: 4200,
                            icon: 'success',
                            showConfirmButton: false
                        });
                        state = false;
                    } else {
                        resetModal();
                        Swal.fire({
                            title: "Sorry, we could'nt subscribe you",
                            text: 'Please check your internet connection, or refresh your browser and try again',
                            timer: 4200,
                            icon: 'error',
                            showConfirmButton: false
                        });
                        state = false;
                    }
                } else {
                    Swal.fire({
                        position: 'top-end',
                        toast: true,
                        title: 'Please, fill in the correct email',
                        icon: 'error',
                        timer: 2200,
                        showConfirmButton: false
                    });
                }
            } else {
                Swal.fire({
                    position: 'top-end',
                    toast: true,
                    title: 'Please fill both your name and email',
                    icon: 'warning',
                    timer: 2200,
                    showConfirmButton: false
                });
            }
        }
    }
}
</script>
<style scoped>
.subimg-cont {
    position: relative;
}
.subimg-cont .sub-img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 420px;
    border-radius: 2px;
}
</style>