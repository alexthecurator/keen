<template>
    <div class="d-flex justify-content-center container">
        <div class="card">
            <div class="card-icon pt-3">
                <div class="icon yellow-bg">
                    <img src="" alt="">
                </div>
            </div>
            <div class="card-body">
                <div class="card-title">
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
        margin: 8px;
        box-shadow: 0px 12px 16px rgba(0,0,0,0.1);
        border-radius: 12px;
        width: 220px;
        height: 200px;
        position: relative;
    }
    .card-icon {
        display: flex;
        justify-content: center;
    }
    .icon {
        width: 70px;
        height: 70px;
        border-radius: 12px;
    }
    .card-title h5 {
        font-weight: 700;
        font-size: 17px;
    }
    .card-details p {
        font-weight: 300;
        line-height: 18px;
    }
</style>