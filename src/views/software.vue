<template>
<div>
    <div class="fixed-top">
      <theheader></theheader>
    </div>
  
    <div class="section-v white-bg">
      <div class="centercomp">
        <getstarted class="rellax" data-rellax-speed="2" subcaption="In the world of today, all major markets are run by software. In order to stand out, you need to be unique, Luckily we are here for that and we are happy to serve" maincap1="Need Creative" maincap2="Solutions?" maincap3="We have them for you"  btntext="Get started" illustration="software.svg"></getstarted>
      </div>
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
      <thesectionrev thetitle="We are solutionists" thedetails="Problems are what hinder your organization to takeoff, Automated workflows synced with seamless intergrations make life so much easier where all repetative and co-relative tasks are handled effectively with accuracy and efficiency" theillustration="solutionist.svg"></thesectionrev>
    </div>

    <div class="section white-bg py-xl-5">
      <div class="py-xl-0">
        <div class="p-xl-0 pt-2">
          <b-container>
            <subtitle class="deepblue" subtitle="Software Services"></subtitle>
          </b-container>
        </div>

        <div class="d-flex justify-content-center py-xl-2">
          <separatormedium></separatormedium>
        </div>

        <b-container>
          <detailing class="mx-xl-5 pt-3 px-4 text-center deepblue" detailing="As of any production build maintainace and support is key to ensuring good performance, We provide these services as part of solving daily issues">
          </detailing>
        </b-container>
      
        <div class="d-flex justify-content-center py-xl-2 pb-3">
          <separatorsmall></separatorsmall>
        </div>

        <b-container class="py-xl-4 py-2">
          <div class="container">
            <div class="row">
                <div class="col-4 p-0">
                    <center>  
                        <div class="card-icon-circle white-bg theshadow">
                            <div style="padding: 12px 0 0 0;">
                              <i class="card-icon fi-rr-cloud-download deepblue"></i> 
                            </div>
                        </div>
                        <div class="card-title">
                            <cardtitle class="deepblue" cardtitle="Installation"></cardtitle>
                        </div>
                        <cardetails class="deepblue mx-xl-2" carddetails="We download, configure and install software packages, as per your requirements"></cardetails>
                    </center>
                </div>
                <div class="col-4 p-0">
                    <center>
                        <div class="card-icon-circle white-bg theshadow">
                            <div style="padding: 12px 0 0 0;">
                              <i class="card-icon fi-rr-rocket deepblue"></i> 
                            </div>
                        </div>
                        <div class="card-title">
                            <cardtitle class="deepblue" cardtitle="Upgrading"></cardtitle>
                        </div>
                        <cardetails class="deepblue mx-xl-2" carddetails="Daily updates are required by your software package inorder to stay running with latest features"></cardetails>
                    </center>
                </div>
                <div class="col-4 p-0">
                    <center>
                        <div class="card-icon-circle white-bg theshadow">
                            <div style="padding: 12px 0 0 0;">
                              <i class="card-icon fi-rr-broom deepblue"></i> 
                            </div>
                        </div>
                        <div class="card-title">
                            <cardtitle class="deepblue" cardtitle="Troubleshooting"></cardtitle>
                        </div>
                        <cardetails class="deepblue mx-xl-2" carddetails="We solve daily software issues and bugs, also accompanied with consultation services that aid deeper understanding"></cardetails>
                    </center>
                </div>
            </div>
          </div>
            
        </b-container>

        <b-container class="pb-xl-4">
          <div class="row d-xl-flex justify-content-center">
            <div class="col-xl-5 col-7">
                <tupleimgsmall largeImg="code.webp" smallImg="programmer.webp"></tupleimgsmall> 
            </div>
            <div class="col-xl-4 col-5">
              <thetitle class="deepblue" thetitle="24/7"></thetitle>
              <detailing class="deepblue mx-xl-2" detailing="Support from our specialized technicians"></detailing>

              <b-container class="d-none d-lg-block py-xl-3 py-0" fluid>
                <div class="container d-flex justify-content-center">
                  <div class="text-left">
                    <joinus class="deepblue" thequestion="Call us today" thebtntext="Tap here"></joinus>
                  </div> 
                </div>
              </b-container>
            </div>
          </div>
        </b-container>
        
        <b-container class="d-block d-lg-none py-xl-4 py-0" fluid>
            <div class="container d-flex justify-content-md-center">
              <div class="text-left text-md-center">
                <joinus thequestion="Call us today" thebtntext="Tap here"></joinus>
              </div>  
            </div>
        </b-container>
      </div>
    </div>

    <div class="section white-bg py-xl-5">
      <div class="p-xl-0 pt-2">
        <b-container>
          <subtitle class="deepblue" subtitle="Our solutions"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center py-xl-2">
        <separatormedium></separatormedium>
      </div>
      <thesectionrev thetitle="Web Based Applications" thedetails="Are crossplatform, software solutions where compatibilty selection is cancelled out. From static, dynamic to prograssive web based softwares are developed, launched and maintained by our skilled developers and technicians with experience in the field." theillustration="web.svg"></thesectionrev>
    </div>
    
    <div class="section white-bg py-xl-5">
      <div class="d-flex justify-content-center py-xl-2">
        <separatormedium></separatormedium>
      </div>
      <thesection head="Native Applications" detail="For verbose problems and multi-complex tasks this is the best approach as it targets a closed market of mid-high end devices, it is a compatible method depending on the approach of the stakeholders but proven most effective in the market. We develop, launch and maintain mobile and desktop applications" theIllustration="cross-platform.svg"></thesection>
    </div>
    
    <div class="section white-bg">
      <thefooter></thefooter>
    </div>

    <getstartedModal></getstartedModal>
    <callustodayModal></callustodayModal>

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
import thetitle from '../components/typography/title.vue'
import subtitle from '../components/typography/subtitle.vue'
import detailing from '../components/typography/detailing.vue'
import separatormedium from '../components/typography/separatormedium.vue'
import separatorsmall from '../components/typography/separatorsmall.vue'
import tupleimgsmall from '../components/images/tupleimgsmall.vue'
import cardtitle from '../components/typography/cardtitle.vue'
import cardetails from '../components/typography/cardetails.vue'
import thefooter from '../components/elements/footer.vue'
import getstartedModal from '../components/elements/subscribe.vue'
import callustodayModal from '../components/elements/callus.vue'
import thesectionrev from '../components/elements/sectionrev.vue'
import thesection from '../components/elements/section.vue'

export default {
  name: 'home',
  components: {
    theheader,
    getstarted,
    thesectionrev,
    thesection,
    joinus,
    toogle,
    thetitle,
    subtitle,
    detailing,
    separatormedium,
    separatorsmall,
    tupleimgsmall,
    cardtitle,
    cardetails,
    thefooter,
    getstartedModal,
    callustodayModal
  }
}
</script>

<style scoped>
.card-icon-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.card-icon {
      font-size: 1.5vw;
  }
@media screen and (max-width: 1400px){
  .card-icon-circle {
    width: 80px;
    height: 80px;
  }
  .card-icon {
      font-size: 3.2vw;
  }
}
@media screen and (max-width: 1200px){
  .card-icon-circle {
    width: 80px;
    height: 80px;
  }
  .card-icon {
      font-size: 3.2vw;
  }
}
@media screen and (max-width: 1024px){
  .card-icon-circle {
    width: 120px;
    height: 120px;
  }
  .card-icon {
      font-size: 3.8em;
  }
}
@media screen and (max-width: 780px){
  .card-icon-circle {
    width: 50px;
    height: 50px;
  }
  .card-icon {
      font-size: 3vw;
  }
}
@media screen and (max-width: 480px){
  .card-icon-circle {
    width: 50px;
    height: 50px;
  }
  .card-icon {
      font-size: 1.4em;
  }
}
@media screen and (max-width: 380px){
  .card-icon-circle {
    width: 50px;
    height: 50px;
  }
  .card-icon {
      font-size: 1.4em;
  }
}
@media screen and (max-width: 320px){
  .card-icon-circle {
    width: 50px;
    height: 50px;
  }
  .card-icon {
      font-size: 1.4em;
  }
}

</style>
