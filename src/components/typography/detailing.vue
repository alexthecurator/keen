<template>
    <div class="detailing">
        <p> {{ detailing }} </p>
    </div>
</template>

<script>
export default {
    name: "detailing",
    props: ['detailing']
}
</script>

<style scoped>
    .detailing {
        font-size: 22px;
        line-height: 35px;
        letter-spacing: .6px;
    }
    @media screen and (max-width: 1400px){
        .detailing {
            font-size: 1.5vw;
            line-height: 2.2vw;
        }
    }
    @media screen and (max-width: 1200px){
        .detailing {
            font-size: 3.6vw;
            line-height: 4vw;
        }
    }
    @media screen and (max-width: 1024px){
        .detailing {
            font-size: 3.6vw;
            line-height: 4vw;
        }
    }
    @media screen and (max-width: 780px){
        .detailing {
            font-size: 3.4vw;
            line-height: 4.2vw;
        }
    }
    @media screen and (max-width: 480px) and (max-height: 823px){
        .detailing {
            font-size: 3.8vw;
            line-height: 5.8vw;
        }
    }
    @media screen and (max-width: 480px) and (max-height: 731px){
        .detailing {
            font-size: 3.8vw;
            line-height: 5vw;
        }
    }
    @media screen and (max-width: 380px){
        .detailing {
            font-size: 4.6vw;
            line-height: 6vw;
        }
    }
    @media screen and (max-width: 320px){
        .detailing {
            font-size: 12px;
            line-height: 16px;
        }
    }
</style>