<template>
<div>
    <hero></hero>
    <div class="fixed-top">
      <headerMob></headerMob>
    </div>
  
    <div class="section">
      <div class="centercomp">
        <getstarted subcaption="we innovate" maincaption="For smarter Tanzania" submaincaption="and a better Africa" btntext="Get started"></getstarted>
      </div>
    </div>

    <div class="section white-bg">
      <div class="pt-3">
        <b-container>
          <subtitle subtitle="Our Services"></subtitle>
        </b-container>
      </div>
        
      <b-container>
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

    <div class="section black-bg">
      <div class="pt-3">
        <b-container>
          <subtitle class="white" subtitle="Meet our friends"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center">
        <separator></separator>
      </div>

      <b-container>
        <detailing class="py-3 px-4 text-center white" detailing="Join us on the long journey to Innovate Tanzania and develop Africa">
        </detailing>
      </b-container>

      <b-container>
        <div class="container py-md-2 ml-md-5">
          <div class="row mx-auto d-flex justify-content-center">
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
          <div class="row mx-auto py-4 d-flex justify-content-center">
            <div class="col-4">
              <roundedimg></roundedimg>
            </div>
            <div class="col-4">
              <roundedimg></roundedimg>
            </div>
          </div>
        </div>
      </b-container>

      <b-container>
        <detailing class="py-3 px-4 text-center white" detailing="For more information about our clients, tap the logos above to visit their page">
        </detailing>
      </b-container>

      <b-container fluid>
        <b-container>
          <joinus class="white" thequestion="Do you want to join us?" thebtntext="Tap here"></joinus>
        </b-container>
      </b-container>
    </div>

    <div class="section white-bg">
      <div class="pt-3">
        <b-container>
          <div class="mx-4">
            <subtitle class="black" subtitle="Lets hear what our friends say.."></subtitle>
          </div>
        </b-container>
      </div>

      <div class="d-flex justify-content-center pt-1 pb-2">
        <separator></separator>
      </div>

      <b-container>
        <detailing class="pt-2 px-4 mx-4 text-center black" detailing="We value your feedback as much as we value your satisfaction">
        </detailing>
      </b-container>

      <b-container>
        <div class="mx-md-0 mx-4">
          <div class="row d-flex justify-content-center py-1">
            <div class="col-md-6 col-12">
              <horcards cardTitle="Carlos, John" cardDetails="Very quick and easy! Great serivce thanks!"></horcards>
            </div>
            <div class="col-md-6 col-12">
              <horcards cardTitle="Nguyane, Shane" cardDetails="Very quick and easy! Great serivce thanks!"></horcards>
            </div>
            <div class="col-md-6 col-12">
              <horcards cardTitle="Miles, Esther" cardDetails="Very quick and easy! Great serivce thanks!"></horcards>
            </div>
            <div class="col-md-6 col-12">
              <horcards cardTitle="Flores, Juanita" cardDetails="Very quick and easy! Great serivce thanks!"></horcards>
            </div>
          </div>
        </div>
      </b-container>
    </div>

    <div class="theToggle">
       <toogle></toogle>
    </div>

    <thefooter></thefooter>

</div>
</template>

<script>
import hero from '../components/landing/hero.vue'
import headerMob from '../components/elements/headerMob.vue'
import getstarted from '../components/landing/getstarted.vue'
import toogle from '../components/elements/toggleMob.vue'
import card from '../components/cards/portraitcards.vue'
import subtitle from '../components/typography/subtitle.vue'
import detailing from '../components/typography/detailing.vue'
import separator from '../components/typography/separator.vue'
import tupleimg from '../components/images/tupleimg.vue'
import roundedimg from '../components/images/roundimg.vue'
import joinus from '../components/landing/joinus.vue'
import horcards from '../components/cards/horizontalcards.vue'
import thefooter from '../components/elements/footer.vue'


export default {
  name: 'home',
  components: {
    hero,
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
    thefooter,
  }
}
</script>

<style>
.centercomp {
    transform: translateY(36vh);
}
</style>
