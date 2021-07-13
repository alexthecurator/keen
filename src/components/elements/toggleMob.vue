<template> 
    <div class="toggle d-block d-lg-none">
        <b-button @click="getNav()" class="toogle-brd" id="getBtn">
            <img class="toggle-logo" src="../../assets/logos/KeenComms.png" alt="">
        </b-button>
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
        bottom: 28px;
        right: 24px;
        padding: 0px;
    }   
    .toogle-brd {
        background-color: transparent;
    }
    .toggle .toggle-logo {
        width: 92px;
        height: 92px;
    }
    @media screen and (max-width: 320px){
        .toogle-brd {
            width: 62px;
            height: 62px;
        }
    }
</style>