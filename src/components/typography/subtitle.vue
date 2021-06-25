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
    @media screen and (max-width: 1024px){
        .subtitle {
            font-size: 4vw
        }
    }
    @media screen and (max-width: 780px){
        .subtitle {
            font-size: 5.4vw;
        }
    }
    @media screen and (max-width: 480px){
        .subtitle {
            font-size: 7vw
        }
    }
    @media screen and (max-width: 380px){
        .subtitle {
            font-size: 28px;
        }
    }
    @media screen and (max-width: 320px){
        .subtitle {
            font-size: 22px;
        }
    }
</style>