<template>
    <div class="teams">
        <div class="team">
            <div class="team-img">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Profile image">
            </div>  
            <div class="team-text">
                <div class="team-title">
                    <h5>{{ teamTitle }}</h5>
                </div>
                <div class="team-name">
                    <h6>{{ teamName }}</h6>
                </div>
                <div class="team-details">
                    <p>{{ teamDetails }}</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"teamCards",
    props: ['teamTitle','teamName','teamDetails']
}
</script>

<style scoped>
    .team {
        box-shadow: 0px 12px 12px rgba(0,0,0,0.04);
        padding: 16px;
        margin: 12px 0;
        border-radius: 12px;
        display: flex;
        align-content: center;
        border: 2px solid #000;
    }
    .team-text {
        text-align: left;
        margin: 0px 16px;
    }
    .team-title h5{
        font-weight: 700;
        margin: 4px 0;
    }
    .team-name h6{
        font-weight: 700;
        margin: 4px 0;
    }
    .team-details p {
        font-weight: 300;
        line-height: 16px;
        font-size: 14px;
        padding: 0;
        margin: 0;
    }
    .team-img img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid yellow;
    }
</style>