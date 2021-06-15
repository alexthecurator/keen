<template>
<div>
    <navigation></navigation>

    <div class="hero">
      <div class="overlay"></div>
    </div>
    
    <div class="maincomp px-5">
      <div class="centercomp">
        <getstarted subcaption="we innovate" maincaption="For smarter Tanzania" submaincaption="and a better Africa" btntext="Get started"></getstarted>
      </div>
    </div>

    <div class="toogle">
       <toogle></toogle>
    </div>
  
    <div class="ourservices">
      <div class="container">
        <subtitle subtitle="Our Services"></subtitle>
      </div>
      <b-container>
        <div class="cards">
          <card cardTitle="Network" cardDetails="Installation, Upgrade and Maintainance"></card>
          <card cardTitle="Hardware and software" cardDetails="Installation, Upgrade and Troubleshooting"></card>
          <card cardTitle="Development" cardDetails="Web based and Native Softwares with Support"></card>
        </div>
        
      </b-container>
    </div>

</div>
</template>

<script>
import navigation from '../components/navigation/navigation.vue'
import getstarted from '../components/landing/getstarted.vue'
import toogle from '../components/navigation/toggleMob.vue'
import card from '../components/cards/portraitcards.vue'
import subtitle from '../components/typography/subtitle.vue'

export default {
  name: 'home',
  components: {
    navigation,
    getstarted,
    toogle,
    card,
    subtitle,
    
  }
}
</script>

<style>
.hero {
    background-image: url('../assets/backdrop/home.webp');
}
.maincomp {
    position: relative;
    z-index: 50;
}
.centercomp {
    transform: translateY(36vh);
    width: 100%;
    height: 100%;
}
.ourservices {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 99;
  background-color: #fbfbfb;
}
</style>
