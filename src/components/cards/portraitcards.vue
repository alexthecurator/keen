<template>
    <div class="container">
        <div class="card">
            <div class="card-icon pt-4">
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
        padding: 20px;
        margin: 20px;
        box-shadow: 0px 12px 16px rgba(0,0,0,0.1);
        border-radius: 12px;
    }
    .card-icon {
        display: flex;
        justify-content: center;
    }
    .icon {
        width: 71.2px;
        height: 71.2px;
        border-radius: 12px;
    }
    .card-title h5 {
        font-weight: 700;
    }
    .card-details p {
        font-weight: 300;
    }
</style>