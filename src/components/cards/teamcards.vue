<template>
    <b-container>
        <div class="teams mx-xl-5">
            <div class="team d-md-flex">
                <div class="team-img">
                    <img :src="teamImg" alt="Profile image">
                </div>  
                <div class="team-text">
                    <div class="team-title deepblue">
                        <h5>{{ teamTitle }}</h5>
                    </div>
                    <div class="team-name deepblue">
                        <h6>{{ teamName }}</h6>
                    </div>
                    <div class="team-details deepblue">
                        <p>{{ teamDetails }}</p>
                    </div>
                </div>

            </div>
        </div>
    </b-container>
</template>

<script>
export default {
    name:"teamCards",
    props: ['teamImg','teamTitle','teamName','teamDetails']
}
</script>

<style scoped>
    .teams {
        box-shadow: 0px 12px 12px rgba(0,0,0,0.04);
        padding: 16px;
        margin: 12px 0;
        border-radius: 12px;
        display: flex;
        align-content: center;
        border: 2px solid #041E42;
    }
    .team-text {
        text-align: left;
        margin: 0px 16px;
    }
    .team-title h5{
        font-weight: 700;
        margin: 4px 0;
        font-size: 1.4vw;
    }
    .team-name h6{
        font-weight: 500;
        margin: 4px 0;
        font-size: 1vw;
    }
    .team-details p {
        font-weight: 300;
        font-size: 1vw;
        padding: 0;
        margin: 0;
    }
    .team-img img {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        border: 2px solid yellow;
    }
    @media screen and (max-width: 1024px){
        .team-title h5{
            font-size: 40px;
        }
        .team-name h6 {
            font-size: 32px;
        }
        .team-details p{
            font-size: 30px;
            line-height: 36px;
        }
    }
    @media screen and (max-width: 780px){
        .team-title h5{
            font-size: 30px;
        }
        .team-name h6 {
            font-size: 22px;
        }
        .team-details p{
            font-size: 20px;
            line-height: 26px;
        }
    }
    @media screen and (max-width: 480px){
        .team-title h5{
            font-size: 30px;
        }
        .team-name h6 {
            font-size: 22px;
        }
        .team-details p{
            font-size: 20px;
            line-height: 26px;
        }
    }
    @media screen and (max-width: 420px){
        .team-title h5{
            font-size: 30px;
        }
        .team-name h6 {
            font-size: 22px;
        }
        .team-details p{
            font-size: 20px;
            line-height: 26px;
        }
    }
    @media screen and (max-width: 380px){
        .team-title h5{
            font-size: 30px;
        }
        .team-name h6 {
            font-size: 22px;
        }
        .team-details p{
            font-size: 20px;
            line-height: 26px;
        }
    }
    @media screen and (max-width: 320px){
        .team-title h5{
            font-size: 30px;
        }
        .team-name h6 {
            font-size: 22px;
        }
        .team-details p{
            font-size: 16px;
            line-height: 18px;
        }
    }
</style>