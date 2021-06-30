<template>
    <div class="roundedbox">
        <div class="rounded-image">
            <img :src="require('../../assets/images/' + theLogo)" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "roundimage",
    props: ['theLogo']
}
</script>

<style scoped>
    .rounded-image img {
        width: 160px;
        height: 160px;
        position: relative;
        border-radius: 50%;
    }
    @media screen and (max-width: 1920px){
        .rounded-image img  {
            width: 140px;
            height: 140px;
            margin: 20px 0;
        }
    }
    @media screen and (max-width: 1400px){
        .rounded-image img  {
            width: 140px;
            height: 140px;
            margin: 20px 0;
        }
    }
    @media screen and (max-width: 1200px){
        .rounded-image img  {
            width: 200px;
            height: 200px;
            margin: 20px 0;
        }
    }
    @media screen and (max-width: 1024px){
        .rounded-image img  {
            width: 200px;
            height: 200px;
            margin: 20px 0;
        }
    }
    @media screen and (max-width: 780px){
        .rounded-image img  {
            width: 120px;
            height: 120px;
        }
    }
    @media screen and (max-width: 480px){
        .rounded-image img  {
            width: 100px;
            height: 100px;
        }
    }
    @media screen and (max-width: 380px){
        .rounded-image img  {
            width: 72px;
            height: 72px;
        }
    }
    @media screen and (max-width: 320px){
        .rounded-image img  {
            width: 72px;
            height: 72px;
        }
    }
</style>