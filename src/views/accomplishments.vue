<template>
<div>
    <hero></hero>
    <div class="fixed-top">
      <headerMob></headerMob>
    </div>
  
    <div class="section">
      <div class="centercomp">
        <getstarted subcaption="So far these are" maincaption="Our Achievements" submaincaption="with five years of experience" btntext="Get started"></getstarted>
      </div>
    </div>

    <div class="section white-bg">
      <div class="pt-3">
        <b-container>
          <subtitle subtitle="Accomplishments"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center">
        <separator></separator >
      </div>

      <b-container>
        <detailing class="pt-3 px-4 text-center" detailing="That shaped our organization into what it is today. Through our values and team work.">
        </detailing>
      </b-container>
    
      <b-container>
        <div class="p-2 m-2">
          <div class="row">
            <div class="col-5">
              <roundrecimg class="p-5 yellow-bg"></roundrecimg>
            </div>
            <div class="col-7">
              <roundrecimg class="p-5 yellow-bg"></roundrecimg>
            </div>
          </div>

          <div class="row py-3 my-2">
            <div class="col-7">
              <roundrecimg class="p-5 yellow-bg" ></roundrecimg>
            </div>
            <div class="col-5">
              <roundrecimg class="p-5 yellow-bg"></roundrecimg>
            </div>
          </div>

          <div class="row py-2 my-2">
            <div class="col-6">
              <roundrecimg class="p-5 yellow-bg"></roundrecimg>
            </div>
            <div class="col-6">
              <roundrecimg class="p-5 yellow-bg"></roundrecimg>
            </div>
          </div>
        </div>
      </b-container>

      <b-container class="py-2" fluid>
          <div class="container">
            <div class="text-left">
              <joinus thequestion="Reach out today" thebtntext="Tap here"></joinus>
            </div>  
          </div>
      </b-container>
    </div>

    <div class="section white-bg">
      <div class="pt-3">
        <b-container>
          <subtitle subtitle="Teamwork"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center">
        <separator></separator>
      </div>

      <b-container>
        <detailing class="py-3 px-4 text-justify" detailing="We know that to add great value to clients, we have to work together. We provide the
        best people and bring them together in teams to deliver our services. Our teams are diverse in their disciplines, ideas, perspectives and cultures. When necessary
        we extend our capability by partnering with organizations with similar values to our own but with complementary skills and abilities.">
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
        <detailing class="px-4 py-0 my-0 text-left" detailing="To provide long term value to our customers by having services that not only cost effective, but reliable and simple to manage.">
        </detailing>
      </b-container>
    </div>

    <div class="section black-bg">
      <div class="pt-3">
        <b-container>
          <subtitle class="white" subtitle="Project highlights"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center">
        <separator></separator>
      </div>

      <b-container>
        <detailing class="py-3 px-4 white" detailing="Our aim is to leave a lasting impression with a excellent performance">
        </detailing>
      </b-container>

      <b-container>
        <thecarousel></thecarousel>
      </b-container>
    </div>

    <thefooter></thefooter>

    <div class="theToggle">
       <toogle></toogle>
    </div>

</div>
</template>

<script>
import hero from '../components/landing/hero.vue'
import headerMob from '../components/elements/headerMob.vue'
import getstarted from '../components/landing/getstarted.vue'
import joinus from '../components/landing/joinus.vue'
import toogle from '../components/elements/toggleMob.vue'
import subtitle from '../components/typography/subtitle.vue'
import detailing from '../components/typography/detailing.vue'
import separator from '../components/typography/separator.vue'
import tupleimg from '../components/images/tupleimg.vue'
import thefooter from '../components/elements/footer-dark.vue'
import roundrecimg from '../components/images/roundrecimg.vue'
import thecarousel from '../components/elements/carousel.vue'

export default {
  name: 'home',
  components: {
    hero,
    headerMob,
    getstarted,
    joinus,
    toogle,
    tupleimg,
    subtitle,
    detailing,
    separator,
    thefooter,
    roundrecimg,
    thecarousel,
  }
}
</script>

<style>
.centercomp {
    transform: translateY(36vh);
}

.card-icon-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

</style>
