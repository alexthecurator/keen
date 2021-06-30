<template>
    <div class="getstarted px-4 mx-4">
        <div class="obj-center text-left">
            <div class="sub-caption white mb-2">
                <h5>{{ subcaption }}</h5>
            </div>

            <div class="main-caption white mb-2">
                <h1>{{ maincaption }}</h1>
            </div>

            <div class="sub-maincaption white">
                <h3>{{ submaincaption }}</h3>
            </div>
            <div class="start-btn py-2" id="startBtn">
                <b-button class="yellow-bg" v-b-modal.getstarted><small class="btntext black">{{ btntext }}</small></b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['subcaption','maincaption','submaincaption','btntext']
}
</script>

<style scoped>
    .getstarted {
        position: relative;
        z-index: 8;
    }
    .sub-caption h5{
        font-size: 18px;
    }
    .sub-maincaption h3{
        font-size: 24px;
        font-weight: 300;
    }
    .main-caption h1{
        font-size: 48px;
    }
    .btntext {
        font-size: 18px;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
    }
    @media screen and (max-width:1024px) {
        .sub-caption small {
            font-size: 3vw;
        }
        .submaincaption h5 {
            font-size: 5vw;
        }
        .main-caption h3{
            font-size: 6vw;
        }
    }

    @media screen and (max-width:780px) {
        .sub-caption small {
            font-size: 3vw;
        }
        .submaincaption h5 {
            font-size: 4vw;
        }
        .main-caption h3{
            font-size: 5vw;
        }
    }

    @media screen and (max-width:480px) {
        .sub-caption small {
            font-size: 4vw;
        }
        .submaincaption h5 {
            font-size: 5vw;
        }
        .main-caption h3{
            font-size: 6vw;
        }
    }
    @media screen and (max-width:380px) {
        .sub-caption small {
            font-size: 4vw;
        }
        .submaincaption h5 {
            font-size: 5vw;
        }
        .main-caption h3{
            font-size: 6vw;
        }
    }

    @media screen and (max-width:320px) {
        .sub-caption small {
            font-size: 4vw;
        }
        .submaincaption h5 {
            font-size: 5vw;
        }
        .main-caption h3{
            font-size: 6vw;
        }
    }
    
</style>
