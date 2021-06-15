<template>
    <div class="getstarted">
        <div class="obj-center">
            <div class="sub-caption white mb-2">
                <small>{{ subcaption }}</small>
            </div>

            <div class="main-caption white mb-2">
                <h3>{{ maincaption }}</h3>
            </div>

            <div class="sub-caption white">
                <h5>{{ submaincaption }}</h5>
            </div>
            
            <div class="start-btn py-2" id="startBtn">
                <b-button class="yellow-bg"><small class="btntext black">{{ btntext }}</small></b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            subcaption: "we innovate",
            maincaption: "For smarter Tanzania",
            submaincaption: "and a better Africa",
            btntext: "Get started",
        }
    }
}
</script>

<style scoped>
    .getstarted {
        position: relative;
        z-index: 8;
    }
    .sub-caption {
        font-size: 14px;
    }
    .main-caption {
        font-size: 42px;
        font-weight: 700;
    }
    .btntext {
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}
</style>
