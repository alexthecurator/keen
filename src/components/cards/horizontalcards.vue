<template>
    <div class="horcards">
        <div class="horcard">
            <div class="horcard-img">
                <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile image">
            </div>  
            <div class="horcard-text">
                <div class="horcard-title">
                    <h4>Card title</h4>
                </div>
                <div class="horcard-details">
                    <p>Very quick and easy! Great service, thanks!</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"horizontalcards"
}
</script>

<style scoped>
    .horcard {
        box-shadow: 0px 12px 12px rgba(0,0,0,0.08);
        padding: 10px;
        border-radius: 12px;
    }
    .horcard-img img {
        width: 100px;
        height: 100px;
        border-radius: 12px;
    }
</style>