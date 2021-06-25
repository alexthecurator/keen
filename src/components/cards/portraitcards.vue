<template>
    <div class="d-flex justify-content-center container">
        <div class="card py-lg-4 py-md-3 py-3 my-md-3 my-2">
            <div class="card-icon mb-md-4 m-0">
                <div class="icon d-flex justify-content-center">
                    <i class="fi-rr-network-cloud"></i>
                </div>
            </div>
            <div class="card-body m-md-2">
                <div class="card-title m-0">
                    <center><h5>{{ cardTitle }}</h5></center>
                </div>
                <div class="card-details">
                    <center><p>{{ cardDetails }}</p></center>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "card",
    props: ['cardTitle', 'cardDetails']
}
</script>

<style scoped>
    .card {
        padding: 8px;
        box-shadow: 0px 8px 16px rgba(0,0,0,0.06);
        border-radius: 12px;
        width: 100%;
        height: 270px;
        position: relative;
    }
    .card-icon {
        display: flex;
        justify-content: center;
    }
    .icon {
        width: 50px;
        height: 50px;
        border-radius: 12px;
    }
    .icon i {
        font-size: 3.6vw;
    }
    .card-title h5 {
        font-weight: 700;
        font-size: 24px;
    }
    .card-details p {
        font-weight: 300;
        line-height: 24px;
        font-size: 18px;
    }
    @media screen and (max-width: 1024px){
        .card {
            width: 480px;
            height: 340px;
        }
        .icon {
            width: 64px;
            height: 64px;
        }
        .icon i {
            font-size: 9vw;
        }
        .card-title h5 {
            font-weight: 700;
            font-size: 42px;
        }
        .card-details p {
            font-weight: 300;
            line-height: 46px;
            font-size: 36px;
        }
    }
    @media screen and (max-width: 780px){
        .card {
            width: 320px;
            height: 220px;
        }
        .icon {
            width: 36px;
            height: 32px;
        }
        .icon i {
            font-size: 8vw;
        }
        .card-title h5 {
            font-weight: 500;
            font-size: 3.2vw;
        }
        .card-details p {
            font-weight: 300;
            font-size: 2.8vw;
        }
    }
    @media screen and (max-width: 480px){
        .card {
            width: 288px;
            height: 200px;
        }
        .icon {
            width: 52px;
            height: 52px;
        }
        .icon i {
            font-size: 12vw;
        }
        .card-title h5 {
            font-weight: 700;
            font-size: 5vw;
        }
        .card-details p {
            font-weight: 300;
            line-height: 22px;
            font-size: 4vw;
        }
    }
    @media screen and (max-width: 380px){
        .card {
            width: 268px;
            height: 168px;
        }
        .icon {
            width: 36px;
            height: 36px;
        }
        .card-title h5 {
            font-weight: 700;
            font-size: 5vw;
        }
        .card-details p {
            font-weight: 300;
            font-size: 4.6vw;
        }
    }
    @media screen and (max-width: 320px){
        .card {
            width: 212px;
            height: 148px;
        }
        .icon {
            width: 30px;
            height: 30px;
        }
        .card-title h5 {
            font-weight: 700;
            font-size: 16px;
        }
        .card-details p {
            font-weight: 300;
            line-height: 16px;
            font-size: 14px;
        }
    }
</style>