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
        <separatormedium></separatormedium>
      </div>

      <b-container>
        <detailing class="pt-3 px-4 text-center" detailing="That shaped our organization into what it is today. Through our values and team work.">
        </detailing>
      </b-container>
    
      <b-container>
        <div class="p-2 m-2">
          <div class="row">
            <div class="col-4">
              <roundboximg></roundboximg>
            </div>
            <div class="col-8">
              <roundrecimg></roundrecimg>
            </div>
          </div>

          <div class="row py-3 my-2">
            <div class="col-8">
              <roundrecimg></roundrecimg>
            </div>
            <div class="col-4">
              <roundboximg></roundboximg>
            </div>
          </div>

          <div class="row py-2 my-2">
            <div class="col-6">
              <roundrecimg></roundrecimg>
            </div>
            <div class="col-6">
              <roundboximg></roundboximg>
            </div>
          </div>
        </div>
      </b-container>

      <b-container class="py-5" fluid>
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
          <subtitle subtitle="Our Values"></subtitle>
        </b-container>
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
// import thetitle from '../components/typography/title.vue'
import subtitle from '../components/typography/subtitle.vue'
import detailing from '../components/typography/detailing.vue'
import separator from '../components/typography/separator.vue'
// import separatorsmall from '../components/typography/separatorsmall.vue'
import tupleimg from '../components/images/tupleimg.vue'
// import roundboximg from '../components/images/roundboximg.vue'
// import cardtitle from '../components/typography/cardtitle.vue'
// import cardetails from '../components/typography/cardetails.vue'
import thefooter from '../components/elements/footer.vue'
import roundboximg from '../components/images/roundboximg.vue'
import roundrecimg from '../components/images/roundrecimg.vue'

export default {
  name: 'home',
  components: {
    hero,
    headerMob,
    getstarted,
    joinus,
    toogle,
    tupleimg,
    // thetitle,
    subtitle,
    detailing,
    separator,
    // separatorsmall,
    // roundboximg,
    thefooter,
    roundboximg,
    roundrecimg,
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
