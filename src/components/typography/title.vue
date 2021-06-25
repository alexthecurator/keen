<template>
    <div class="container-fluid">
        <div class="container">
            <div class="p-2">
                <h3 class="thetitle text-md-center text-left">{{ thetitle }}</h3>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'thetitle',
    props: ['thetitle']
}
</script>

<style scoped>
    .thetitle {
        font-weight: 700;
    }
    @media screen and (max-width: 780px){
        .thetitle {
            font-size: 8.2vw;
        }
    }
    @media screen and (max-width: 320px){
        .thetitle {
            font-size: 7vw;
        }
    }
</style>