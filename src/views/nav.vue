<template>
    <div class="section black-bg">
        <headerMob class="position-relative"></headerMob>
        
        <b-container><theTitle class="white" title="Keen Communications"></theTitle>
            <b-container>
                <div class="nav-link">
                   <a href="/">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="yellow fi-rr-home" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Home</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
                <div class="nav-link">
                   <a href="/#/Services">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="yellow fi-rr-time-twenty-four" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Services</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
                <div class="nav-link">
                   <a href="/Accomplishments">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="yellow fi-rr-trophy" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Accomplishments</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
                <div class="nav-link">
                   <a href="/About Us">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="yellow fi-rr-info" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">About us</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
                <div class="nav-link">
                   <a href="/Settings">
                        <div class="nav-item">
                            <div class="d-flex flex-row">
                                <div class="px-2">
                                    <i class="yellow fi-rr-settings" style="font-size: 1.3em"></i>
                                </div>
                                <div class="px-2">
                                    <h5 class="nav-title white">Settings</h5>
                                </div>
                            </div>
                        </div>
                    </a> 
                </div>
            </b-container>
        </b-container>

        <b-container>

        </b-container>

        <div class="theToggle">
            <toogle></toogle>
        </div>
    </div>
</template>

<script>
import headerMob from '../components/navigation/headerMob.vue'
import theTitle from '../components/typography/title.vue'
import toogle from '../components/navigation/toggleMob.vue'

export default {
    name: 'nav',
    components: {
        headerMob,
        theTitle,
        toogle,
    }
}
</script>

<style scoped>
    .nav-link {
        padding: 20px;
    }
    .nav-link a:hover {
        background-color: rgba(0, 0, 0, .3);
    }
    .nav-title {
        font-weight: 300;
        font-size: 22px;
    }
</style>