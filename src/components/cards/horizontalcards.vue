<template>
    <div class="horcards">
        <div class="horcard">
            <div class="horcard-img">
                <img :src="cardImgUrl" />
            </div>
            <div class="horcard-text">
                <div class="horcard-title">
                    <h5>{{ cardTitle }}</h5>
                </div>
                <div class="horcard-details">
                    <p>{{ cardDetails }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"horizontalcards",
    props: ['cardImgUrl','cardTitle','cardDetails']
}
</script>

<style scoped>
    .horcard {
        box-shadow: 0px 12px 12px rgba(0,0,0,0.04);
        padding: 0px;
        margin: 12px 0;
        border-radius: 12px;
        display: flex;
        align-content: center;
    }
    .horcard-text {
        text-align: left;
        margin: auto 16px;
    }
    .horcard-title h5{
        font-weight: 400;
        font-size: 28px;
    }
    .horcard-details p {
        font-weight: 300;
        line-height: 20px;
        font-size: 21px;
    }
    .horcard-img img {
        width: 150px;
        height: 150px;
        border-radius: 12px;
    }
    @media screen and (max-width: 1024px){
        .horcard {
            margin: 16px 0;
        }
        .horcard-text {
            text-align: left;
            margin: auto 26px;
        }
        .horcard-title h5{
            font-size: 3.8vw;
        }
        .horcard-details p {
            font-weight: 300;
            line-height: 28px;
            font-size: 3vw;
        }
        .horcard-img img {
            width: 150px;
            height: 150px;
            border-radius: 22px;
        }
    }
    @media screen and (max-width: 780px){
        .horcard {
            margin: 16px 0;
        }
        .horcard-text {
            text-align: left;
            margin: auto 26px;
        }
        .horcard-title h5{
            font-size: 3.8vw;
        }
        .horcard-details p {
            font-weight: 300;
            line-height: 28px;
            font-size: 3vw;
        }
        .horcard-img img {
            width: 150px;
            height: 150px;
            border-radius: 22px;
        }
    }
    @media screen and (max-width: 480px){
        .horcard {
            margin: 8px 0;
        }
        .horcard-text {
            text-align: left;
            margin: 12px 0 0 18px;
        }
        .horcard-img img {
            width: 100px;
            height: 100px;
        }
        .horcard-title h5{
            font-size: 20px;
            font-weight: 500;
        }
        .horcard-details p {
            font-size: 16px;
            line-height: 18px;
        }
    }
    @media screen and (max-width: 380px){
        .horcard {
            margin: 8px 0;
        }
        .horcard-img img {
            width: 70px;
            height: 70px;
        }
        .horcard-title h5{
            font-size: 16px;
        }
        .horcard-details p {
            font-size: 14px;
            line-height: 18px;
        }
    }
    @media screen and (max-width: 320px){
        .horcard {
            margin: 8px 0;
        }
        .horcard-img img {
            width: 70px;
            height: 70px;
        }
        .horcard-title h5{
            font-size: 16px;
        }
        .horcard-details p {
            font-size: 14px;
            line-height: 18px;
        }
    }
</style>