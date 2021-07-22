<template>
    <div class="roundedbox">
        <div class="rounded-image">
            <img :src="srcImg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "roundimage",
    props: ['srcImg']
}
</script>

<style scoped>
    .roundedbox img {
        width: 200px;
        height: 150px;
        position: relative; 
        background-color: aliceblue;
        border-radius: 12px;
    }
    @media screen and (max-width: 1400px) {
        .roundedbox img{
            width: 100px;
            height: 100px;
        }
    }
    @media screen and (max-width: 1280px) {
        .roundedbox img{
            width: 180px;
            height: 180px;
        }
    }
    @media screen and (max-width: 1024px) {
        .roundedbox img{
            width: 180px;
            height: 180px;
        }
    }
    @media screen and (max-width: 780px) {
        .roundedbox img{
            width: 160px;
            height: 160px;
        }
    }
    @media screen and (max-width: 480px) and (max-height: 823px){
        .roundedbox img{
            width: 100px;
            height: 100px;
        }
    }
    @media screen and (max-width: 480px) and (max-height: 731px){
        .roundedbox img{
            width: 140px;
            height: 100px;
        }
    }
    @media screen and (max-width: 320px){
        .roundedbox img{
            width: 60px;
            height: 60px;
        }
    }
</style>