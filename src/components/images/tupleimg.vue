<template>
    <div class="tupleimg">
        <div class="tupleimg-one">
            <img data-aos="fade-up" class="rellax" data-rellax-speed="-0.1" :src="imageOne" alt="">
        </div>
        <div class="tupleimg-two">
            <img data-aos="fade-up" class="rellax" data-rellax-speed="0.2" :src="imageTwo" alt="">
        </div>
    </div>
</template>

<script>

export default {
    name: "tupleimg",
    props: ['imageOne', 'imageTwo']
}
</script>

<style scoped>
    .tupleimg {
        margin: 0 20px;
        padding: 0 0 20px 0;
        position: relative;
        display: flex;
    }
    .tupleimg-one img, .tupleimg-two img{
        border-radius: 12px;
    }
    .tupleimg-one img {
        width: 480px;
        height: 340px;
        position: relative;
        z-index: 100;
    }
    .tupleimg-two, .tupleimg-two img {
        width: 280px;
        height: 180px;
        position: absolute;
        z-index: 101;
        top: 130px;
        left: 120px;
    }
    @media screen and (max-width: 1400px) {
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 22px;
        }
        .tupleimg-one img {
            width: 380px;
            height: 340px;
            position: relative;
            z-index: 100;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 260px;
            height: 200px;
            position: absolute;
            z-index: 101;
            top: 100px;
            left: 100px;
        }
    }
    @media screen and (max-width: 1280px) {
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 22px;
        }
        .tupleimg-one img {
            width: 560px;
            height: 460px;
            position: relative;
            z-index: 100;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 380px;
            height: 280px;
            position: absolute;
            z-index: 101;
            top: 130px;
            left: 180px;
        }
    }
    @media screen and (max-width: 1024px){
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 22px;
        }
        .tupleimg-one img {
            width: 560px;
            height: 460px;
            position: relative;
            z-index: 100;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 380px;
            height: 280px;
            position: absolute;
            z-index: 101;
            top: 130px;
            left: 180px;
        }
    }
    @media screen and (max-width: 780px){
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 22px;
        }
        .tupleimg-one img {
            width: 460px;
            height: 360px;
            position: relative;
            z-index: 100;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 280px;
            height: 200px;
            position: absolute;
            z-index: 101;
            top: 100px;
            left: 160px;
        }
    }
    @media screen and (max-width: 480px){
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 12px;
        }
        .tupleimg-one img {
            width: 240px;
            height: 200px;
            position: relative;
            z-index: 100;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 160px;
            height: 120px;
            position: absolute;
            z-index: 101;
            top: 70px;
            left: 70px;
        }
    }
    @media screen and (max-width: 380px){
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 12px;
        }
        .tupleimg-one img {
            width: 240px;
            height: 200px;
            position: relative;
            z-index: 100;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 160px;
            height: 120px;
            position: absolute;
            z-index: 101;
            top: 55px;
            left: 70px;
        }
    }
    @media screen and (max-width: 320px) {
        .tupleimg-one img {
            width: 158px;
            height: 120px;
            position: relative;
            z-index: 100;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 100px;
            height: 80px;
            position: absolute;
            z-index: 101;
            top: 30px;
            left: 50px;
        }
    }
</style>