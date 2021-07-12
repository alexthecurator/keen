<template>
    <div class="getstarted">
        <div class="p-2">
            <div class="main-caption mb-2 mx-4 px-4">
                <h4>{{ thequestionaire }}</h4>
            </div>
            
            <div class="start-btn py-md-4 py-2" id="startBtn">
                <b-button class="blue-bg px-lg-5 px-md-4 py-md-2"><small class="btntext deepblue" v-b-modal.getstarted>{{ thebtntexxt }}</small></b-button>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    name: "joinus",
    props: ['thequestionaire','thebtntexxt']
}
</script>

<style scoped>
    .getstarted {
        position: relative;
        z-index: 8;
    }
    .main-caption h4{
        font-size: 36px;
        font-weight: 500;
    }
    .btntext {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
    }
    @media screen and (max-width: 1024px){
        .main-caption h4 {
            font-size: 5.6vw;
        }
        .btntext {
            font-size: 3.6vw;
        }
    }
    @media screen and (max-width: 780px){
        .main-caption h4 {
            font-size: 4.6vw;
        }
        .btntext {
            font-size: 3.6vw;
        }
    }
    @media screen and (max-width: 480px){
        .main-caption h4 {
            font-size: 7vw;
        }
        .btntext {
            font-size: 3.6vw;
        }
    }
    @media screen and (max-width: 320px){
        .main-caption h4 {
            font-size: 4.6vw;
        }
        .btntext {
            font-size: 3.6vw;
        }
    }
</style>
