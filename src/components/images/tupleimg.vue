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
    name: "tupleimg"
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
        width: 240px;
        height: 200px;
        position: relative;
        z-index: 100;
    }
    .tupleimg-two, .tupleimg-two img {
        width: 200px;
        height: 140px;
        position: absolute;
        z-index: 101;
        top: 50px;
        left: 68px;
    }
    @media screen and (max-width: 380px){
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
            width: 180px;
            height: 140px;
            position: relative;
            z-index: 100;
        }
        .tupleimg-two, .tupleimg-two img {
            width: 140px;
            height: 100px;
            position: absolute;
            z-index: 101;
            top: 40px;
            left: 50px;
        }
    }
</style>