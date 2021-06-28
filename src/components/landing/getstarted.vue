<template>
    <div class="getstarted px-4 mx-4">
        <div class="obj-center text-left">
            <div class="sub-caption white mb-2">
                <small>{{ subcaption }}</small>
            </div>

            <div class="main-caption white mb-2">
                <h3>{{ maincaption }}</h3>
            </div>

            <div class="sub-maincaption white">
                <h5>{{ submaincaption }}</h5>
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
    .sub-caption small{
        font-size: 18px;
    }
    .sub-maincaption h5{
        font-size: 24spx;
        font-weight: lighter;
    }
    .main-caption h3{
        font-size: 56px;
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
            font-size: 7vw;
        }
    }

    @media screen and (max-width:420px) {}

    @media screen and (max-width:380px) {

    }

    @media screen and (max-width:320px) {

    }
</style>
