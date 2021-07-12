<template>
    <div class="tupleimg">
        <div class="tupleimg-one">
            <img :src="require('../../assets/images/' + largeImg)" alt="">
        </div>
        <div class="tupleimg-two">
            <img :src="require('../../assets/images/' + smallImg)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "tupleimgsmall",
    props: ['largeImg', 'smallImg']
}
</script>

<style scoped>
    .tupleimg {
        margin: 0 20px;
        padding: 20px 0;
        position: relative;
        display: flex;
    }
    .tupleimg-one img, .tupleimg-two img{
        border-radius: 12px;
    }
    .tupleimg-one img {
        width: 320px;
        height: 280px;
        position: relative;
        z-index: 100;
    }
    .tupleimg-two, .tupleimg-two img {
        width: 180px;
        height: 140px;
        position: absolute;
        z-index: 101;
        top: 100px;
        left: 100px;
    }
    @media screen and (max-width: 1400px){
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 18px;
            margin: 8px 0 20px 0;
        }
        .tupleimg-one img {
            width: 280px;
            height: 240px;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 160px;
            height: 120px;
            top: 85px;
            left: 85px;
        }
    }
    @media screen and (max-width: 1280px){
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 18px;
            margin: 8px 0 20px 0;
        }
        .tupleimg-one img {
            width: 430px;
            height: 380px;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 300px;
            height: 200px;
            top: 118px;
            left: 100px;
        }
    }
    @media screen and (max-width: 1024px){
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 18px;
            margin: 8px 0 20px 0;
        }
        .tupleimg-one img {
            width: 430px;
            height: 380px;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 300px;
            height: 200px;
            top: 118px;
            left: 100px;
        }
    }
    @media screen and (max-width: 780px){
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 18px;
        }
        .tupleimg-one img {
            width: 340px;
            height: 300px;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 240px;
            height: 160px;
            top: 90px;
            left: 80px;
        }
    }
    @media screen and (max-width: 480px) {
        .tupleimg-one img, .tupleimg-two img{
            border-radius: 12px;
        }
        .tupleimg-one img {
            width: 180px;
            height: 160px;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 140px;
            height: 100px;
            top: 58px;
            left: 38px;
        }
    }
    @media screen and (max-width: 320px) {
        .tupleimg-one img {
            width: 140px;
            height: 120px;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 90px;
            height: 70px;
            top: 40px;
            left: 40px;
        }
    }
</style>