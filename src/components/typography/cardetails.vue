<template>
    <div class="carddetails">
        <p> {{ carddetails }} </p>
    </div>
</template>

<script>
export default {
    name: "carddetails",
    props: ['carddetails']
}
</script>

<style scoped>
    .carddetails {
        font-family: 'Raleway', sans-serif;
        font-weight: 300;
        font-size: 18px;
    }
    @media screen and (max-width: 1024px){
        .carddetails {
            font-size: 32px;
            line-height: 36px;
        }
    }
    @media screen and (max-width: 780px){
        .carddetails {
            font-size: 20px;
            line-height: 25px;
        }
    }
    @media screen and (max-width: 480px){
        .carddetails {
            font-size: 14px;
            line-height: 18px;
        }
    }
    @media screen and (max-width: 320px){
        .carddetails {
            font-size: 11px;
        }
    }
</style>