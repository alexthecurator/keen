<template>
    <div class="px-4 mx-4">
        <div class="d-flex justify-content-center">
            <b-row align-v="center">
                <b-col>
                    <div class="px-xl-5 mx-xl-5 pt-5 mt-5">
                        <div class="text-left">
                            <div class="main-caption deepblue mb-3">
                                <h1 class="deepblue" data-aos="fade-up">{{ maincap1 }} <span class="blue">{{maincap2}}</span> {{maincap3}}</h1>
                            </div>
                            <div class="subcaption deepblue my-3">
                                <h3 class="deepblue" data-aos="fade-up" data-aos-delay="200">{{ subcaption }}</h3>
                            </div>
                            <div class="start-btn" id="startBtn">
                                <b-button class="deepblue-bg px-lg-5 px-md-4 py-md-2" v-b-modal.getstarted data-aos="fade-up" data-aos-delay="300"><small class="btntext white">{{ btntext }}</small></b-button>
                            </div>
                        </div>  
                    </div> 
                </b-col>
                <b-col>
                    <div class="px-xl-5 mx-xl-5">
                        <div class="illustration" data-aos="fade-up" data-aos-delay="400">
                            <img data-rellax-speed="-0.1" :src="require('../../assets/svg/' + illustration)" alt="">
                        </div>
                    </div>   
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    props: ['maincap1','maincap2','maincap3','subcaption','btntext','illustration']
}
</script>

<style scoped>
    .getstarted {
        position: relative;
        z-index: 8;
    }
    .subcaption h3{
        font-size: 22px;
        font-weight: 300;
    }
    .main-caption h1{
        font-size: 48px;
        font-weight: 800;
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
        .illustration img {
            position: relative;
            top: 20px;
            width: 320px;
            height: 320px;
        }
    }

    @media screen and (max-width:320px) {
        .subcaption h3 {
            font-size: 5vw;
        }
        .main-caption h1{
            font-size: 7vw;
        }
        .illustration img {
            top: 30px;
            width: 280px;
            height: 280px;
        }
    }
    
</style>
