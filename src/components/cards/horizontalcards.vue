<template>
    <div class="horcards">
        <div class="horcard">
            <div class="horcard-img">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile image">
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
    props: ['cardTitle','cardDetails']
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
        margin: 0px 16px;
    }
    .horcard-title h5{
        font-weight: 700;
    }
    .horcard-details p {
        font-weight: 300;
        line-height: 20px;
    }
    .horcard-img img {
        width: 100px;
        height: 100px;
        border-radius: 12px;
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