<template>
    <div class="getstarted">
        <div class="p-2">

            <div class="main-caption mb-2 mx-4 px-4">
                <h4>{{ thequestionaire }}</h4>
            </div>
            
            <div class="start-btn py-2" id="startBtn">
                <b-button class="yellow-bg"><small class="btntext black">{{ thebtntexxt }}</small></b-button>
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
    .main-caption {
        font-size: 24px;
        font-weight: bold;
    }
    .btntext {
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
    }
</style>
