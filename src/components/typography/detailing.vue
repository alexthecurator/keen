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
        font-weight: 300;
        font-size: 17px;
        line-height: 20px;
    }
    @media screen and (max-width: 320px){
        .detailing {
            font-size: 15px;
            line-height: 16px;
        }
    }
</style>