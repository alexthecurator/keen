<template>
<div>
    <hero></hero>
    <div class="fixed-top">
      <headerMob></headerMob>
    </div>
  
    <div class="section">
      <div class="centercomp">
        <getstarted subcaption="Are you stuck and cant find a solution?" maincaption="We are here for you" submaincaption="Problem Solving is our prime" btntext="Get started"></getstarted>
      </div>
    </div>

    <div class="section white-bg">
      <div class="pt-3">
        <b-container>
          <subtitle subtitle="Network"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center">
        <separatormedium></separatormedium>
      </div>

      <b-container>
        <detailing class="pt-3 px-4 text-center" detailing="We strive to achieve the best network architecture for quality communication, that drive the morden economy.">
        </detailing>
      </b-container>
    
      <div class="d-flex justify-content-center pb-3">
        <separatorsmall></separatorsmall>
      </div>

      <b-container>
        <tupleimg></tupleimg>
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

    <footer class="section black-bg">
        <div class="white-bg-circle">
          <b-container fluid>
            <b-container>
              <reachout class="black pb-5 mb-5" thequestionaire="Ready to get started?" thebtntexxt="Tap here"></reachout>
            </b-container>
          </b-container>
        </div>

        <b-container>
          <div class="p-0 mr-4">
            <div class="row">
              <div class="col-12">
                <ul class="footer-menu">
                  <li class="footer-item"><a class="footer-link" href="#">Home</a></li>

                  <div class="d-flex justify-content-center py-3">
                    <grayseparator></grayseparator>
                  </div>

                  <li class="footer-item" ><a class="footer-link" href="">Services</a></li>

                  <div class="d-flex justify-content-center pt-1 py-3">
                    <grayseparator></grayseparator>
                  </div>

                  <li class="footer-item"><a class="footer-link" href="">Projects</a></li>

                  <div class="d-flex justify-content-center pt-1 py-3">
                    <grayseparator></grayseparator>
                  </div>

                  <li class="footer-item"><a class="footer-link" href="">About Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </b-container>

        <b-container>
          <div class="container-fluid">
            <div class="row">
              <div class="col-4">
                <i class="fi-rr-add"></i>
              </div>
              <div class="col-4">
                <i class="fi-rr-add"></i>
              </div>
              <div class="col-4">
                <i class="fi-rr-add"></i>
              </div>
            </div>
          </div>
        </b-container>

        <div class="btm-footer pt-5">
          <!-- change this later ^^ -->
            <div class="footer-cont yellow-bg py-2">
              <small>Copyright &amp; 2020: keencommunications.com</small>
            </div>
        </div>
    </footer>

    <div class="theToggle">
       <toogle></toogle>
    </div>

</div>
</template>

<script>
import hero from '../components/landing/hero.vue'
import headerMob from '../components/navigation/headerMob.vue'
import getstarted from '../components/landing/getstarted.vue'
import toogle from '../components/navigation/toggleMob.vue'
import subtitle from '../components/typography/subtitle.vue'
import detailing from '../components/typography/detailing.vue'
import separatormedium from '../components/typography/separatormedium.vue'
import separatorsmall from '../components/typography/separatorsmall.vue'
import tupleimg from '../components/images/tupleimg.vue'
import roundedimg from '../components/images/roundimg.vue'
import joinus from '../components/landing/joinus.vue'
import horcards from '../components/cards/horizontalcards.vue'
import reachout from '../components/landing/reachout.vue'
import grayseparator from '../components/typography/grayseparator.vue'

export default {
  name: 'home',
  components: {
    hero,
    headerMob,
    getstarted,
    toogle,
    subtitle,
    detailing,
    separatormedium,
    separatorsmall,
    tupleimg,
    roundedimg,
    joinus,
    horcards, 
    reachout,
    grayseparator,
  }
}
</script>

<style>
/* hero */
.hero {
    background-image: url('../assets/images/support.webp');
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    position: absolute;
    z-index: 2;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.6);
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 3;
}
.centercomp {
    transform: translateY(36vh);
}
</style>
