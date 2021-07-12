<template>
    <div class="roundedbox">
        <div class="rounded-image">
            <img :src="image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "roundimage",
    props: ['image']
}
</script>

<style scoped>
    .roundedbox {
        width: 100%;
        height: 100%;
        position: relative;
        border-radius: 12px;
    }
</style>