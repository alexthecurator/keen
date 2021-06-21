<template>
    <center class="container-fluid">
        <div class="container">
            <div class="p-2">
                <h3 class="title">{{ thetitle }}</h3>
            </div>
        </div>
    </center> 
</template>

<script>
export default {
    name: 'thetitle',
    props: ['thetitle']
}
</script>

<style scoped>
    .title {
        font-weight: 700;
    }
</style>