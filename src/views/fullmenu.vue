<template>
    <div class="section-v deepblue-bg">
        <div class="p-0 m-0">
            <router-link to="/">
                <img src="../assets/logos/KEENComms-white.svg" class="nav-logo d-inline-block align-top" alt="keen communication logo" />
            </router-link>
        </div>
        <b-container>
            <div id="nav">
                <div class="nav-link">
                   <router-link to="/network">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-network" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Network</h5>
                                </div>
                            </div>
                        </div>
                    </router-link> 
                </div>
                <div class="nav-link">
                   <router-link to="/hardware">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-computer" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Hardware</h5>
                                </div>
                            </div>
                        </div>
                    </router-link> 
                </div>
                <div class="nav-link">
                   <router-link to="/software">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-apps" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Software</h5>
                                </div>
                            </div>
                        </div>
                    </router-link> 
                </div>
                <div class="nav-link">
                   <router-link to="/accessories">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-shop" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Accessories</h5>
                                </div>
                            </div>
                        </div>
                    </router-link> 
                </div>
                <div class="nav-link">
                   <router-link to="/aboutus">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-info" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">About Us</h5>
                                </div>
                            </div>
                        </div>
                    </router-link> 
                </div>
            </div>
        </b-container>

        <b-container>

        </b-container>

        <div class="live-chat">
            <livechat></livechat>
        </div>
    </div>
</template>

<script>
import livechat from '../components/elements/liveChat.vue'

export default {
    name: 'nav',
    components: {
        livechat,
    }
}
</script>

<style scoped>
    .live-chat {
        position: fixed;
        z-index: 999999;
    }
    .nav-link {
        padding: 16px;
    }
    .nav-link a:hover {
        background-color: #0A79FF;
    }
    .nav-title {
        font-weight: 300;
        font-size: 22px;
    }
    .nav-logo {
        width: 200px;
        height: 200px;
    }
</style>