<template>
    <center>
        <div class="pt-2">
            <div class="p-0 m-0">
                <h5 class="cardtitle">{{ cardtitle }}</h5>
            </div>
        </div>
    </center> 
</template>

<script>
export default {
    name: 'cardtitle',
    props: ['cardtitle']
}
</script>

<style scoped>
    .cardtitle {
        font-size: 17px;
        font-weight: 500;
    }
</style>