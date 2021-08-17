<template>
    <div class="px-5 mx-5">
        <div class="d-flex justify-content-center">
            <b-row align-v="center">
                <b-col>
                    <div class="px-xl-5 mx-xl-5">
                        <div class="illustration" data-aos="fade-up" data-aos-delay="400">
                            <img data-rellax-speed="-0.1" :src="require('../../assets/svg/' + theillustration)" alt="">
                        </div>
                    </div>   
                </b-col>
                <b-col>
                    <div class="px-xl-5 mx-xl-5">
                        <div class="row">
                            <div class="col-12">
                                <div class="text-left">
                                    <div class="main-caption deepblue mb-3">
                                        <h2 class="deepblue" data-aos="fade-up">{{ thetitle }}</h2>
                                    </div>
                                    <div class="subcaption deepblue my-3">
                                        <h3 class="deepblue" data-aos="fade-up" data-aos-delay="200">{{ thedetails }}</h3>
                                    </div>
                                </div> 
                            </div>
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-4">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    props: ['thetitle','thedetails','theillustration']
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
        width: 560px;
        height: 560px;
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
        .illustration img {
            position: relative;
            top: 30px;
            width: 280px;
            height: 280px;
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
        .illustration img {
            position: relative;
            top: 30px;
            width: 280px;
            height: 280px;
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
        .illustration img {
            position: relative;
            top: 30px;
            width: 280px;
            height: 280px;
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
            top: 30px;
            width: 280px;
            height: 280px;
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
            position: relative;
            top: 30px;
            width: 280px;
            height: 280px;
        }
    }
    
</style>
