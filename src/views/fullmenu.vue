<template>
    <div class="section-v deepblue-bg">
        <div class="pt-4">
          <theTitle class="white" thetitle="Keen Comms"></theTitle>  
        </div>
        <b-container>
            <div id="nav">
                <div class="nav-link">
                   <a href="#/">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-home" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Home</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
                <div class="nav-link">
                   <a href="#/services">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-time-twenty-four" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Services</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
                <div class="nav-link">
                   <a href="#/accomplishments">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-trophy" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Accomplishments</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
                <div class="nav-link">
                   <a href="#/aboutus">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-info" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">About us</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
                <!-- <div class="nav-link">
                   <a href="/#/settings">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="nav-icon yellow fi-rr-settings" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Settings</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div> -->
            </div>
        </b-container>

        <b-container>

        </b-container>

        <div class="theToggle">
            <toogle></toogle>
        </div>

        <div class="live-chat">
            <livechat></livechat>
        </div>
    </div>
</template>

<script>
import theTitle from '../components/typography/title.vue'
import toogle from '../components/elements/toggleMob.vue'
import livechat from '../components/elements/liveChat.vue'

export default {
    name: 'nav',
    components: {
        theTitle,
        toogle,
        livechat,
    }
}
</script>

<style scoped>
    .nav-link {
        padding: 18px;
    }
    .nav-link a:hover {
        background-color: rgba(0, 0, 0, .3);
    }
    .nav-title {
        font-weight: 300;
        font-size: 22px;
    }
</style>