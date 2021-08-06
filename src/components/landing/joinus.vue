<template>
    <div class="getstarted">
        <div class="">
            <div class="main-caption mb-lg-4 mb-md-3 mb-2">
                <h5>{{ thequestion }}</h5>
            </div>
            
            <div class="start-btn py-2" >
                <b-button id="startBtn" class="blue-bg px-lg-5 px-md-4 py-md-2" v-b-modal.callustoday><small class="btntext">{{ thebtntext }}</small></b-button>
            </div>
        </div>      
    </div>
</template>

<script>
export default {
    name: "joinus",
    props: ['thequestion','thebtntext']
}
</script>

<style scoped>
    .getstarted {
        position: relative;
        z-index: 8;
    }
    .main-caption h5 {
        font-size: 36px;
        font-weight: 500;
    }
    .btntext {
        font-size: 28px;
        font-family: 'Roboto', sans-serif;
    }
    @media screen and (max-width: 1024px){
        .main-caption h5 {
            font-size: 4.6vw;
        }
        .btntext {
            font-size: 4vw;
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
