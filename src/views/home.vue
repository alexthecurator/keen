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
        <div class="mx-4">
          <b-row class="d-flex justify-content-center py-1">
            <b-col>
              <horcards cardTitle="Carlos, John" cardDetails="Very quick and easy! Great serivce thanks!"></horcards>
            </b-col>
            <b-col>
              <horcards cardTitle="Nguyane, Shane" cardDetails="Very quick and easy! Great serivce thanks!"></horcards>
            </b-col>
            <b-col>
              <horcards cardTitle="Miles, Esther" cardDetails="Very quick and easy! Great serivce thanks!"></horcards>
            </b-col>
            <b-col>
              <horcards cardTitle="Flores, Juanita" cardDetails="Very quick and easy! Great serivce thanks!"></horcards>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>

    <footer class="section black-bg">
        <div class="white-bg-circle">
          <b-container fluid>
            <b-container>
              <reachout class="black pb-5 mb-5" thequestionaire="Ready to get started?" thebtntexxt="Tap here"></reachout>
            </b-container>
          </b-container>
        </div>

        <b-container>
          <div class="p-0 m-0">
            <div class="row d-flex justify-content-center">
              <div class="col-12">
                <ul class="footer-menu">
                  <li><a class="footer-link" href="#">Home</a></li>

                  <div class="d-flex justify-content-center pt-1 pb-2">
                    <separator></separator>
                  </div>

                  <li><a class="footer-link" href="">Services</a></li>

                  <div class="d-flex justify-content-center pt-1 pb-2">
                    <separator></separator>
                  </div>

                  <li><a class="footer-link" href="">Projects</a></li>

                  <div class="d-flex justify-content-center pt-1 pb-2">
                    <separator></separator>
                  </div>

                  <li><a class="footer-link" href="">About Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </b-container>

        <div class="btm-footer">

        </div>
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
import reachout from '../components/landing/reachout.vue'

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
    reachout,
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
