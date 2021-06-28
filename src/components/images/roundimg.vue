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
        width: 160px;
        height: 160px;
        position: relative;
        background-color: aliceblue;
        border-radius: 50%;
    }
    @media screen and (max-width: 1400px){
        .roundedbox {
            width: 140px;
            height: 140px;
            margin: 20px 0;
        }
    }
    @media screen and (max-width: 1200px){
        .roundedbox {
            width: 200px;
            height: 200px;
            margin: 20px 0;
        }
    }
    @media screen and (max-width: 1024px){
        .roundedbox {
            width: 200px;
            height: 200px;
            margin: 20px 0;
        }
    }
    @media screen and (max-width: 780px){
        .roundedbox {
            width: 120px;
            height: 120px;
        }
    }
    @media screen and (max-width: 480px){
        .roundedbox {
            width: 100px;
            height: 100px;
        }
    }
    @media screen and (max-width: 380px){
        .roundedbox {
            width: 72px;
            height: 72px;
        }
    }
    @media screen and (max-width: 320px){
        .roundedbox {
            width: 72px;
            height: 72px;
        }
    }
</style>