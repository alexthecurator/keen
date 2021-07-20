<template>
    <center>
        <div class="pt-2">
            <div class="p-0 m-0">
                <h5 class="cardtitle">{{ cardtitle }}</h5>
            </div>
        </div>
    </center> 
</template>

<script>
export default {
    name: 'cardtitle',
    props: ['cardtitle']
}
</script>

<style scoped>
    .cardtitle {
        font-family: 'Gotham', sans-serif;
        font-size: 24px;
        font-weight: 400;
    }
    @media screen and (max-width: 1024px){
        .cardtitle {
            font-size: 36px;
        }
    }
    @media screen and (max-width: 780px){
        .cardtitle {
            font-size: 26px;
        }
    }
    @media screen and (max-width: 480px) {
        .cardtitle {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 320px){
        .cardtitle {
            font-size: 12px;
        }
    }
</style>