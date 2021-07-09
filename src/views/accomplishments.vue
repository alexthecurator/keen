<template>
<div>
  <herogif></herogif>
  <div class="fixed-top">
    <theheader></theheader>
  </div>

  <div class="section-v">
    <div class="centercomp">
      <getstarted subcaption="So far these are" maincaption="Our Achievements" submaincaption="with five years of experience" btntext="Get started"></getstarted>
    </div>
  </div>

  <div class="section white-bg">
    <div class="pt-3">
      <b-container>
        <subtitle class="deepblue" subtitle="Accomplishments"></subtitle>
      </b-container>
    </div>

    <div class="d-flex justify-content-center">
      <separator></separator >
    </div>

    <b-container>
      <detailing class="pt-3 px-4 text-center deepblue" detailing="That shaped our organization into what it is today. Through our values and team work.">
      </detailing>
    </b-container>
  
    <b-container>
      <div class="p-2 m-2">
        <div class="row">
          <div class="col-5">
            <roundrecimg class="p-5 lightblue-bg"></roundrecimg>
          </div>
          <div class="col-7">
            <roundrecimg class="p-5 lightblue-bg"></roundrecimg>
          </div>
        </div>

        <div class="row py-3 my-2">
          <div class="col-7">
            <roundrecimg class="p-5 lightblue-bg" ></roundrecimg>
          </div>
          <div class="col-5">
            <roundrecimg class="p-5 lightblue-bg"></roundrecimg>
          </div>
        </div>

        <div class="row py-2 my-2">
          <div class="col-6">
            <roundrecimg class="p-5 lightblue-bg"></roundrecimg>
          </div>
          <div class="col-6">
            <roundrecimg class="p-5 lightblue-bg"></roundrecimg>
          </div>
        </div>
      </div>
    </b-container>

    <b-container class="py-2" fluid>
        <div class="container">
          <div class="text-left">
            <joinus class="deepblue" thequestion="Reach out today" thebtntext="Tap here"></joinus>
          </div>  
        </div>
    </b-container>
  </div>

  <div class="section white-bg py-xl-5">
    <div class="pt-3">
      <b-container>
        <subtitle class="deepblue" subtitle="Teamwork"></subtitle>
      </b-container>
    </div>

    <div class="d-flex justify-content-center">
      <separator></separator>
    </div>

    <b-container>
      <detailing class="py-3 px-4 text-justify deepblue" detailing="We know that to add great value to clients, we have to work together. We provide the
      best people and bring them together in teams to deliver our services. Our teams are diverse in their disciplines, ideas, perspectives and cultures. When necessary
      we extend our capability by partnering with organizations with similar values to our own but with complementary skills and abilities.">
      </detailing>
    </b-container>

    <b-container>
      <div class="row d-flex justify-content-center mb-lg-5 pb-lg-5 py-2">
        <div class="col-xl-6 col-lg-12 col-md-12 col-12 pb-2 m-0">
          <tupleimg></tupleimg>
        </div>
        <div class="col-xl-5 col-lg-12 col-md-12 col-12">
          <div class="mt-xl-5 mt-2">
            <b-container>
              <div class="p-0 m-0">
                <subtitle class="text-left deepblue" subtitle="Why?"></subtitle>
              </div>
            </b-container>
            
            <b-container>
              <detailing class="px-4 py-0 my-0 text-left blue" detailing="To provide long term value to our customers by having services that not only cost effective, but reliable and simple to manage.">
              </detailing>
            </b-container>
          </div>
        </div>
      </div>
    </b-container>
  </div>

  <div class="section deepblue-bg pt-xl-  5">
    <div class="py-3">
      <b-container>
        <subtitle class="white" subtitle="Project highlights"></subtitle>
      </b-container>
    </div>

    <div class="d-flex justify-content-center">
      <separator></separator>
    </div>

    <b-container>
      <detailing class="py-xl-4 m-xl-0 py-3 px-4 white" detailing="Our aim is to leave a lasting impression with a excellent performance">
      </detailing>
    </b-container>

    <b-container>
      <thecarousel></thecarousel>
    </b-container>
  </div>

  <div class="section">
    <thefooter></thefooter>
  </div>

  <getstartedModal></getstartedModal>

  <div class="live-chat">
      <livechat></livechat>
  </div>

  <div class="theToggle">
      <toogle></toogle>
  </div>

</div>
</template>

<script>
import herogif from '../components/landing/herogif.vue'
import theheader from '../components/elements/theheader.vue'
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
import getstartedModal from '../components/elements/getstarted.vue'
import livechat from '../components/elements/liveChat.vue'

export default {
  name: 'home',
  components: {
    herogif,
    theheader,
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
    getstartedModal,
    livechat
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
