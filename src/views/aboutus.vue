<template>
<div>
    <hero></hero>
    <div class="fixed-top">
      <headerMob></headerMob>
    </div>
  
    <div class="section-v">
      <div class="centercomp">
        <getstarted subcaption="Learn more, Connect and" maincaption="Meet the Team behind" submaincaption="the scenes" btntext="Get started"></getstarted>
      </div>
    </div>

    <div class="section white-bg">
      <div class="pt-3">
        <b-container>
          <subtitle subtitle="Meet the team"></subtitle>
        </b-container>
      </div>
      
      <b-container>
        <div class="d-flex justify-content-center">
          <separator></separator>
        </div>
      </b-container>

      <b-container>
         <detailing class="py-3 px-4 black" detailing="We are dedicated to serve you with excellence">
        </detailing>
      </b-container>

      <b-container fluid>
        <div class="scroll-cards container-xl">
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <teamcards teamTitle="CEO" teamName="David Cosmas" teamDetails="Internet guru. Organizer. Pop culture aficionado. Coffee geek. Problem solver. Social media buff."></teamcards>
          <div class="white-fade"></div>
        </div>
      </b-container> 
    </div>

    <div class="section white-bg pb-xl-5">
      <div class="pt-3">
        <b-container>
          <subtitle subtitle="About Us"></subtitle>
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
        <div class="row d-flex justify-content-center pb-lg-5">
          <div class="col-xl-7 col-lg-12 col-md-12 col-12 p-0 m-0">
            <tupleimg></tupleimg>
          </div>
          <div class="col-xl-5 col-lg-12 col-md-12 col-12">
            <b-container>
              <div class="mt-5">
                <subtitle subtitle="Why choose us?"></subtitle>
              </div>
            </b-container>
            
            <b-container>
              <detailing class="px-4 py-0 my-0 text-left" detailing="To provide long term value to our customers by having services that not only cost effective, but reliable and simple to manage.">
              </detailing>
            </b-container>
          </div>
        </div>
      </b-container>
    </div>

    <div class="theToggle">
       <toogle></toogle>
    </div>

    <getstartedModal></getstartedModal>

    <div class="section">
      <thefooter></thefooter>
    </div>

</div>
</template>

<script>
import hero from '../components/landing/hero.vue'
import headerMob from '../components/elements/headerMob.vue'
import getstarted from '../components/landing/getstarted.vue'
import teamcards from '../components/cards/teamcards.vue'
import toogle from '../components/elements/toggleMob.vue'
import subtitle from '../components/typography/subtitle.vue'
import detailing from '../components/typography/detailing.vue'
import separator from '../components/typography/separator.vue'
import tupleimg from '../components/images/tupleimg.vue'
import thefooter from '../components/elements/footer.vue'
import getstartedModal from '../components/elements/getstarted.vue'

export default {
  name: 'home',
  components: {
    hero,
    headerMob,
    getstarted,
    toogle,
    subtitle,
    detailing,
    separator,
    tupleimg,
    teamcards,
    thefooter,
    getstartedModal,
  }
}
</script>

<style scoped>
.scroll-cards {
    max-height: 100px;
    height: 100%;
    width: 100%s;
    overflow-y: scroll;
    z-index: 999999;
}
.white-fade {
  background-image: linear-gradient(360deg, #fbfbfb, rgba(251,251,251, .9), rgba(251,251,251, .8), transparent);
    width: 100%;
    z-index: 9999999;
}

@media screen and (max-height: 1366px){
  .scroll-cards { 
    max-height: 1150px;
  }
}
</style>
