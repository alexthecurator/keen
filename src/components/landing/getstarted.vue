<template>
    <div class="px-4 mx-4">
        <div class="d-flex justify-content-center">
            <b-row align-v="center">
                <b-col>
                    <div class="px-xl-5 mx-xl-5">
                        <div class="text-left">
                            <div class="sub-caption deepblue mb-2">
                                <h5>{{ subcaption }}</h5>
                            </div>

                            <div class="main-caption deepblue mb-2">
                                <h1>{{ maincaption }}</h1>
                            </div>

                            <div class="submaincaption deepblue">
                                <h3>{{ submaincaption }}</h3>
                            </div>
                            <div class="start-btn py-2" id="startBtn">
                                <b-button class="yellow-bg px-lg-5 px-md-4 py-md-2" v-b-modal.getstarted><small class="btntext deepblue">{{ btntext }}</small></b-button>
                            </div>
                        </div>  
                    </div> 
                </b-col>
                <b-col>
                    <div class="px-xl-5 mx-xl-5">
                        <div class="illustration">
                            <img :src="require('../../assets/svg/' + illustration)" alt="">
                        </div>
                    </div>   
                </b-col>
            </b-row>
            
        </div>
    </div>
</template>

<script>
export default {
    props: ['subcaption','maincaption','submaincaption','btntext','illustration']
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
    .submaincaption h3{
        font-size: 24px;
        font-weight: 300;
    }
    .main-caption h1{
        font-size: 48px;
    }
    .btntext {
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }
    .illustration {
        position: relative;
    }
    .illustration img {
        position: relative;
        top: 100px;
        width: 780px;
        height: 780px;
    }
    @media screen and (max-width:1024px) {
        .sub-caption h5 {
            font-size: 3vw;
        }
        .submaincaption h3 {
            font-size: 5vw;
        }
        .main-caption h1{
            font-size: 6vw;
        }
    }

    @media screen and (max-width:780px) {
        .sub-caption h5 {
            font-size: 3vw;
        }
        .submaincaption h3 {
            font-size: 4vw;
        }
        .main-caption h1{
            font-size: 5vw;
        }
    }

    @media screen and (max-width:480px) {
        .sub-caption h5 {
            font-size: 4vw;
        }
        .submaincaption h3 {
            font-size: 5vw;
        }
        .main-caption h1{
            font-size: 6vw;
        }
    }
    @media screen and (max-width:380px) {
        .sub-caption h5 {
            font-size: 4vw;
        }
        .submaincaption h3 {
            font-size: 5vw;
        }
        .main-caption h1{
            font-size: 6vw;
        }
    }

    @media screen and (max-width:320px) {
        .sub-caption h5 {
            font-size: 4vw;
        }
        .submaincaption h3 {
            font-size: 5vw;
        }
        .main-caption h1{
            font-size: 9vw;
        }
    }
    
</style>
