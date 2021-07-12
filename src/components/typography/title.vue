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
        font-weight: 7s00;
        font-size: 48px;
    }
    @media screen and (max-width: 1024px){
        .thetitle {
            font-size: 8.2vw;
        }
    }
    @media screen and (max-width: 780px){
        .thetitle {
            font-size: 8.2vw;
        }
    }
    @media screen and (max-width: 480px){
        .thetitle {
            font-size: 7vw;
        }
    }
    @media screen and (max-width: 420px){
        .thetitle {
            font-size: 7vw;
        }
    }
    @media screen and (max-width: 380px){
        .thetitle {
            font-size: 7vw;
        }
    }
    @media screen and (max-width: 320px){
        .thetitle {
            font-size: 7vw;
        }
    }
</style>