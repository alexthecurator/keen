<template>
    <div class="px-5 mx-5">
        <div class="d-flex justify-content-center px-xl-5 mx-xl-5">
            <b-row align-v="center">
                <b-col>
                    <div class="px-xl-5 mx-xl-5 pt-2 mt-3">
                        <div class="text-left">
                            <div class="maincaption deepblue mb-3">
                                <h2 class="deepblue" data-aos="fade-up">{{ head }}</h2>
                            </div>
                            <div class="subcaption deepblue my-3">
                                <h3 class="deepblue" data-aos="fade-up" data-aos-delay="200">{{ detail }}</h3>
                            </div>
                        </div>  
                    </div> 
                </b-col>
                <b-col>
                    <div class="px-xl-5 mx-xl-5 py-0">
                        <div class="illustration" data-aos="fade-up" data-aos-delay="400">
                            <img data-rellax-speed="-0.1" :src="require('../../assets/svg/' + theIllustration)" alt="">
                        </div>
                    </div>   
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
export default {
    props: ['head','detail','theIllustration']
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
    .maincaption h2{
        font-size: 32px;
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
        .subcaption h3 {
            font-size: 3vw;
        }
        .submaincaption h3 {
            font-size: 5vw;
        }
        .maincaption h2{
            font-size: 6vw;
        }
        .illustration img {
            position: relative;
            top: 20px;
            width: 280px;
            height: 280px;
        }
    }

    @media screen and (max-width:780px) {
        .subcaption h3 {
            font-size: 3vw;
        }
        .submaincaption h3 {
            font-size: 4vw;
        }
        .maincaption h2{
            font-size: 5vw;
        }
        .illustration img {
            position: relative;
            top: 20px;
            width: 280px;
            height: 280px;
        }
    }

    @media screen and (max-width:480px) {
        .subcaption h3 {
            font-size: 4vw;
        }
        .submaincaption h3 {
            font-size: 5vw;
        }
        .maincaption h2{
            font-size: 6vw;
        }
        .illustration img {
            position: relative;
            top: 20px;
            width: 280px;
            height: 280px;
        }
    }
    @media screen and (max-width:380px) {
        .subcaption h3 {
            font-size: 4vw;
        }
        .submaincaption h3 {
            font-size: 5vw;
        }
        .maincaption h2{
            font-size: 6vw;
        }
        .illustration img {
            position: relative;
            top: 20px;
            width: 280px;
            height: 280px;
        }
    }

    @media screen and (max-width:320px) {
        .subcaption h3 {
            font-size: 5vw;
        }
        .maincaption h2{
            font-size: 7vw;
        }
        .illustration img {
            position: relative;
            top: 20px;
            width: 280px;
            height: 280px;
        }
    }
    
</style>
