<template>
<div>
  <div class="fixed-top">
    <theheader></theheader>
  </div>

  <div class="section-v white-bg">
    <div class="centercomp">
      <getstarted class="rellax" data-rellax-speed="2" subcaption="What's a good computer without accessories to simplfy it. Come over, visit us and experience the best service in Tanzania" maincap1="We also have" maincap2="Good Quality" maincap3="Gadgets and accessories"  btntext="Get started" illustration="accessories.svg"></getstarted>
    </div>
  </div>

  <div class="section white-bg py-xl-5">
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

  <div class="section white-bg py-xl-5 py-md-3">
        <b-container>
          <div class="py-xl-2">
            <b-container>
              <subtitle class="deepblue" subtitle="Teamwork"></subtitle>
            </b-container>
          </div>
    
          <div class="d-flex justify-content-center">
            <separator></separator>
          </div>
      
          <b-container>
            <detailing class="mx-xl-5 py-xl-4 m-lg-2 px-md-0 pt-3 px-4 text-lg-justify text-left deepblue" detailing="We know that to add great value to clients, we have to work together. We provide the best people and bring them together in teams to deliver our services. Our teams are diverse in their disciplines, ideas, perspectives and cultures. When necessary
            we extend our capability by partnering with organizations with similar values to our own but with complementary skills and abilities.">
            </detailing>
          </b-container>
          
          <b-container class="mx-xl-4 pb-xl-5">
            <div class="row d-flex justify-content-center mb-lg-5 pb-lg-5 py-2">
              <div class="col-xl-6 col-lg-12 col-md-12 col-12 py-0 m-0">
                <tupleimg imageOne="support.jpg" imageTwo="technician.jpg"></tupleimg>
              </div>
              <div class="col-xl-6 col-lg-12 col-md-12 col-12">
                <div class="mt-2">
                  <b-container class="p-0 m-0">
                    <div class="p-0 m-0">
                      <subtitle class="text-left deepblue" subtitle="Why?"></subtitle>
                    </div>
                  </b-container>
                  
                  <b-container>
                    <detailing class="px-4 py-0 my-0 text-left deepblue" detailing="To provide long term value to our customers by having services that not only cost effective, but reliable and simple to manage.">
                    </detailing>
                  </b-container>
                </div>
              </div>
            </div>
          </b-container>

        </b-container>
  </div>

  <div class="section white-bg py-xl-5">
      <div class="p-xl-0 pt-2">
        <b-container>
          <subtitle class="deepblue" subtitle="Why choose us"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center py-xl-2">
        <separatormedium></separatormedium>
      </div>
      
      <thesectionrev thetitle="To Achieve Seamless Performance" thedetails="Reliable connectivity is an art that is yet to be perfected here in Tanzania, hence we aim to provide fluent, efficient and quality network infrustrucutures able to scale without repucations, and handle vigorous conditions affecting the network" theillustration="server.svg"></thesectionrev>
    </div>
    
    <div class="section white-bg py-xl-5">
      <div class="d-flex justify-content-center py-xl-2">
        <separatormedium></separatormedium>
      </div>
      <thesection head="To Achieve Seamless Performance" detail="Reliable connectivity is an art that is yet to be perfected here in Tanzania, hence we aim to provide fluent, efficient and quality network infrustrucutures able to scale without repucations, and handle vigorous conditions affecting the network" theIllustration="seamless.svg"></thesection>
    </div>

  <div class="section">
    <thefooter></thefooter>
  </div>

  <getstartedModal></getstartedModal>

  <div class="theToggle">
      <toogle></toogle>
  </div>
  
</div>
</template>

<script>
import theheader from '../components/elements/theheader.vue'
import getstarted from '../components/landing/getstarted.vue'
import joinus from '../components/landing/joinus.vue'
import toogle from '../components/elements/toggleMob.vue'
import subtitle from '../components/typography/subtitle.vue'
import detailing from '../components/typography/detailing.vue'
import separator from '../components/typography/separator.vue'
import tupleimg from '../components/images/tupleimg.vue'
import thefooter from '../components/elements/footer.vue'
import roundrecimg from '../components/images/roundrecimg.vue'
import getstartedModal from '../components/elements/subscribe.vue'
import thesectionrev from '../components/elements/sectionrev.vue'
import thesection from '../components/elements/section.vue'

export default {
  name: 'home',
  components: {
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
    getstartedModal,
    thesectionrev,
    thesection,
  }
}
</script>

<style>
.card-icon-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}

</style>
