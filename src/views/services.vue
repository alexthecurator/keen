<template>

    <div class="maincomp">

        <div class="hero">
            <div class="overlay"></div>
            <headerMob></headerMob>
            <div class="maincomp px-5">
                <div class="centercomp">
                    <getstarted subcaption="Are you stuck and you can't find the solution?" maincaption="We're here for you" submaincaption="Problem solving is our prime" btntext="Get started"></getstarted>
                </div>
            </div>
            <toogle></toogle>
            
        </div>

        <div class="our-services">
            <subtitle></subtitle>
        </div>
        

    </div>
    
</template>

<script>
import headerMob from '../components/navigation/headerMob.vue'
import getstarted from '../components/landing/getstarted.vue'
import toogle from '../components/navigation/toggleMob.vue'
import subtitle from '../components/typography/subtitle.vue'

export default {
  name: 'services',
  components: {
    headerMob,
    getstarted,
    toogle,
    subtitle,
    
  }
}
</script>

<style>
.hero {
    background-image: url('../assets/images/support.webp');
}
.our-services {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 40px;
}
</style>
