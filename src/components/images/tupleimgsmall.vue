<template>
    <div class="tupleimg">
        <div class="tupleimg-one">
            <img src="../../assets/images/tuple1.webp" alt="">
        </div>
        <div class="tupleimg-two">
            <img src="../../assets/images/tuple2.webp" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "tupleimgsmall"
}
</script>

<style scoped>
    .tupleimg {
        margin: 0 20px;
        position: relative;
        display: flex;
    }
    .tupleimg-one img, .tupleimg-two img{
        border-radius: 12px;
    }
    .tupleimg-one img {
        width: 172.75px;
        height: 141.34px;
        position: relative;
        z-index: 100;
    }
    .tupleimg-two, .tupleimg-two img {
        width: 141.34px;
        height: 94.22px;
        position: absolute;
        z-index: 101;
        top: 38px;
        left: 32px;
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
            top: 50px;
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