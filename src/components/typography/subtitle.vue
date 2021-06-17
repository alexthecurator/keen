<template>
    <center class="container-fluid">
        <div class="container">
            <div class="p-2">
                <h4 class="subtitle">{{ subtitle }}</h4>
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
        font-weight: 500;
    }
</style>