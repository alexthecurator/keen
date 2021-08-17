<template>
    <div class="">
       <div class="toggle d-block d-lg-none fixed" id="toggleBtn">
            <b-button @click="getNav()" class="toogle-brd" id="getBtn">
                <img class="toggle-logo" src="../../assets/logos/KEENComms.svg" alt="">
            </b-button>
        </div> 
    </div>
</template>

<script type="javascript">
export default {
    name: 'toogleMob',
    methods: {
        getNav() {
            this.$router.push('/fullmenu');
        }
    }
}
</script>

<style scoped>
    .toggle {
        position: fixed;
        z-index: 999999;
        bottom: 20%;
        right: 20%;
        padding: 0px;
    }
    .toogle-brd {
        background-color: transparent;
        
    }
    .toggle .toggle-logo {
        width: 92px;
        height: 92px;
        
    }
    @media screen and (max-width: 1024px){
        .toogle-brd {
            width: 62px;
            height: 62px;
        }
    }
    @media screen and (max-width: 780px){
        .toogle-brd {
            width: 62px;
            height: 62px;
        }
    }
    @media screen and (max-width: 420px){
        .toogle-brd {
            width: 62px;
            height: 62px;
        }
    }
    @media screen and (max-width: 380px){
        .toogle-brd {
            width: 62px;
            height: 62px;
        }
    }
    @media screen and (max-width: 320px){
        .toogle-brd {
            width: 62px;
            height: 62px;
        }
    }
</style>