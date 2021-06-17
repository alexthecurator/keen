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
        position: relative;
        z-index: 101;
        top: 50px;
        left: -50px;
    }
</style>