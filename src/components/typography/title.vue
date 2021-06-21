<template>
    <center class="container-fluid">
        <div class="container">
            <div class="p-2">
                <h3 class="title">{{ title }}</h3>
            </div>
        </div>
    </center> 
</template>

<script>
export default {
    name: 'title',
    props: ['title']
}
</script>

<style scoped>
    .title {
        font-weight: 700;
    }
</style>