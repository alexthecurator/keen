<template>
    <div class="roundedbox">
        <div class="rounded-image">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "roundimage"
}
</script>

<style scoped>
    .roundedbox {
        width: 100px;
        height: 100px;
        position: relative;
        background-color: aliceblue;
        border-radius: 12px;
    }
    @media screen and (max-width: 780px) {
        .roundedbox {
            width: 160px;
            height: 160px;
        }
    }
    @media screen and (max-width: 480px) and (max-height: 823px){
        .roundedbox {
            width: 100px;
            height: 100px;
        }
    }
    @media screen and (max-width: 480px) and (max-height: 731px){
        .roundedbox {
            width: 100px;
            height: 100px;
        }
    }
    @media screen and (max-width: 320px){
        .roundedbox {
            width: 60px;
            height: 60px;
        }
    }
</style>