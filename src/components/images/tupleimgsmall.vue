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
</style>