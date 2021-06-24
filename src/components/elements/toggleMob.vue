<template> 
    <div class="toggle">
        <b-button @click="getNav()" class="toogle-brd" id="getBtn">
        </b-button>
    </div>
</template>

<script type="javascript">
export default {
    name: 'toogleMob',
    methods: {
        getNav() {
            this.$router.push('/nav');
        }
    }
}
</script>

<style scoped>
    .toggle {
        position: fixed;
        z-index: 999999;
        bottom: 22px;
        right: 20px;
        padding: 20px;
    }   
    .toogle-brd {
        border-radius: 50%;
        background-color: #252122;
        position: relative;
        width: 82px;
        height: 82px;
        border: 17px solid #F1B428;
    }
    @media screen and (max-width: 320px){
        .toogle-brd {
            width: 62px;
            height: 62px;
        }
    }
</style>