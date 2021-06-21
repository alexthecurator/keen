<template>
    <div class="getstarted">
        <div class="">
            <div class="main-caption mb-2">
                <h5>{{ thequestion }}</h5>
            </div>
            
            <div class="start-btn py-2" id="startBtn">
                <b-button class="yellow-bg"><small class="btntext black">{{ thebtntext }}</small></b-button>
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
    .main-caption {
        font-size: 24px;
        font-weight: 300;
    }
    .btntext {
        font-size: 18px;
        font-weight: bold;
        font-family: 'Roboto', sans-serif;
}
</style>
