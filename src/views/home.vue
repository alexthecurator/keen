<template>
<div>
    <div class="fixed-top">
      <headerMob></headerMob>
    </div>
  
    <div class="hero">
      <div class="overlay"></div>
    </div>
    
    <div class="section">
      <div class="centercomp">
        <getstarted subcaption="we innovate" maincaption="For smarter Tanzania" submaincaption="and a better Africa" btntext="Get started"></getstarted>
      </div>
    </div>

    <div class="section white-bg">
      <div class="pt-3">
        <b4-container>
          <subtitle subtitle="Our Services"></subtitle>
        </b4-container>
      </div>
        
      <b4-container>
        <div class="row">
          <div class="col-12">
            <card cardTitle="Network" cardDetails="Installation, Upgrade and Maintainance"></card>
          </div>
          <div class="col-12">
            <card cardTitle="Hardware and software" cardDetails="Installation, Upgrade and Troubleshooting"></card>
          </div>
          <div class="col-12">
            <card cardTitle="Development" cardDetails="Web based and Native Softwares with Support"></card>
          </div>
        </div>
      </b4-container>
    </div>

    <div class="section white-bg">
      <div class="pt-3">
        <b4-container>
          <subtitle subtitle="Our Values"></subtitle>
        </b4-container>
      </div>

      <div class="d-flex justify-content-center">
        <separator></separator>
      </div>

      <b-container>
        <detailing class="py-3 px-4 text-justify" detailing="We know that to add great value to clients,
        we have to work together. We provide the
        best people and bring them together in
        teams to deliver our services. Our teams are
        diverse in their disciplines, ideas,
        perspectives and cultures. When necessary
        we extend our capability by partnering with
        organizations with similar values to our own
        but with complementary skills and abilities.">
        </detailing>
      </b-container>
      
      <b-container>
        <tupleimg></tupleimg>
      </b-container>
      
      <b-container>
        <div class="mt-5">
          <subtitle subtitle="Why?"></subtitle>
        </div>
      </b-container>
      
      <b-container>
        <detailing class="px-4 py-0 my-0 text-justify" detailing="To provide long term value to our customers by having services that not only cost effective, but reliable and simple to manage.">
        </detailing>
      </b-container>

    </div>

    <div class="section black-bg">
      <div class="pt-3">
        <b4-container>
          <subtitle class="white" subtitle="Meet our friends"></subtitle>
        </b4-container>
      </div>

      <div class="d-flex justify-content-center">
        <separator></separator>
      </div>

      <b-container>
        <detailing class="py-3 px-4 text-center white" detailing="Join us on the long journey to Innovate Tanzania and develop Africa">
        </detailing>
      </b-container>

      <b-container>
        <div class="row">
          <div class="col-4">
            <roundedimg></roundedimg>
          </div>
          <div class="col-4">
            <roundedimg></roundedimg>
          </div>
          <div class="col-4">
            <roundedimg></roundedimg>
          </div>
        </div>
        <div class="row py-4 d-flex justify-content-center">
          <div class="col-4">
            <roundedimg></roundedimg>
          </div>
          <div class="col-4">
            <roundedimg></roundedimg>
          </div>
        </div>
      </b-container>

      <b-container>
        <detailing class="py-3 px-4 text-center white" detailing="For more information about our clients, tap the logos above to visit their page">
        </detailing>
      </b-container>

      <b-container fluid>
        <b-container>
          <joinus thequestion="Do you want to join us?" thebtntext="Tap here"></joinus>
        </b-container>
      </b-container>
    </div>

    <div class="section">
      <div class="pt-3">
        <b4-container>
          <subtitle class="black" subtitle="Lets hear what our friends say.."></subtitle>
        </b4-container>
      </div>

      <div class="d-flex justify-content-center py-2">
        <separator></separator>
      </div>

      <b-container>
        <b-row>
          <b-col><horcards></horcards></b-col>
        </b-row>
      </b-container>


    </div>

    <footer class="section">

    </footer>

    <div class="theToggle">
       <toogle></toogle>
    </div>

</div>
</template>

<script>
import headerMob from '../components/navigation/headerMob.vue'
import getstarted from '../components/landing/getstarted.vue'
import toogle from '../components/navigation/toggleMob.vue'
import card from '../components/cards/portraitcards.vue'
import subtitle from '../components/typography/subtitle.vue'
import detailing from '../components/typography/detailing.vue'
import separator from '../components/typography/separator.vue'
import tupleimg from '../components/images/tupleimg.vue'
import roundedimg from '../components/images/roundimg.vue'
import joinus from '../components/landing/joinus.vue'
import horcards from '../components/cards/horizontalcards.vue'

export default {
  name: 'home',
  components: {
    headerMob,
    getstarted,
    toogle,
    card,
    subtitle,
    detailing,
    separator,
    tupleimg,
    roundedimg,
    joinus,
    horcards, 
  }
}
</script>

<style>
.hero {
    background-image: url('../assets/images/home.webp');
}
.centercomp {
    transform: translateY(36vh);
    width: 100%;
    height: 100%;
}
</style>
