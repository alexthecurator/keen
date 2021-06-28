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
        font-weight: lighter;
        font-size: 28px;
        line-height: 35px;
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
            font-size: 4.2vw;
            line-height: 5.8vw;
        }
    }
    @media screen and (max-width: 480px) and (max-height: 731px){
        .detailing {
            font-size: 4.2vw;
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