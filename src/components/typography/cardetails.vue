<template>
    <div class="detailing">
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
    .detailing {
        font-weight: 300;
        font-size: 13px;
        line-height: 14px;
    }
</style>