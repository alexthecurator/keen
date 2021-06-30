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
        width: 150px;
        height: 150px;
        position: relative; 
        background-color: aliceblue;
        border-radius: 12px;
    }
    @media screen and (max-width: 1400px) {
        .roundedbox {
            width: 100px;
            height: 100px;
        }
    }
    @media screen and (max-width: 1280px) {
        .roundedbox {
            width: 180px;
            height: 180px;
        }
    }
    @media screen and (max-width: 1024px) {
        .roundedbox {
            width: 180px;
            height: 180px;
        }
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