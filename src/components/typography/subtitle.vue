<template>
    <center class="container-fluid">
        <div class="container">
            <div class="p-2 m-2">
                <h3 class="subtitle black">{{ subtitle }}</h3>
            </div>
        </div>
    </center> 
</template>

<script>
export default {
    props: ['subtitle']
}
</script>

<style scoped>
    .subtitle {
        font-weight: 700;
    }
</style>