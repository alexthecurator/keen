<template>
<div>
    <div class="fixed-top">
      <theheader></theheader>
    </div>
  
    <div class="section-v white-bg">
      <div class="centercomp">
        <getstarted subcaption="Innovations for a smarter Tanzania and a better Africa, where we aim at creating solutions, that boost your performance and connect you to the world" maincap1="Welcome to a place" maincap2="where we make IT" maincap3="happen"  btntext="Get started" illustration="mobile_testing.svg"></getstarted>
      </div>
    </div>
    
    <div class="section white-bg py-xl-5 py-md-3 py-2">
      <div class="pt-2">
        <b-container>
          <subtitle data-aos="fade-up" class="deepblue" subtitle="Our Services"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center py-xl-2 pb-2">
          <separator data-aos="fade-left"></separator>
      </div>
      
      <b-container>
        <detailing class="pt-xl-3 d-none d-lg-block deepblue" detailing=" We offer standard tailor made services and products, to meet your needs within a small business, cooperation or government sectors, We are team of experienced technicians, engineers and developers qualified to carryout projects, auditing, of digital systems and networks.">
        </detailing>
      </b-container>

      <b-container>
        <div class="row p-md-4 py-2">
          <div class="col-xl-4 col-lg-12 col-md-12 col-12">
            <router-link to="/network" class="hvr-grow">
              <card data-aos="fade-up" cardIcon="fi-rr-network-cloud" cardTitle="Network" cardDetails="Installation, Upgrade and Maintainance"></card>
            </router-link>
          </div>
          <div class="col-xl-4 col-lg-12 col-md-12 col-12">
            <router-link to="/Hardware" class="hvr-grow">
              <card data-aos="fade-up" cardIcon="fi-rr-laptop" cardTitle="Hardware" cardDetails="Installation, Upgrade and Troubleshooting"></card>
            </router-link>
          </div>
          <div class="col-xl-4 col-lg-12 col-md-12 col-12">
            <router-link to="/Software" class="hvr-grow">
              <card data-aos="fade-up" cardIcon="fi-rr-apps" cardTitle="Development" cardDetails="Web and Native Applications"></card>
            </router-link>
          </div>
        </div>
      </b-container>
    </div>

    <div class="section white-bg py-xl-5 py-md-3">
      <b-container>
        <div class="py-xl-2">
          <b-container>
            <subtitle data-aos="fade-up" class="deepblue" subtitle="Our Values"></subtitle>
          </b-container>
        </div>
  
        <div class="d-flex justify-content-center">
          <separator data-aos="fade-right"></separator>
        </div>
    
        <b-container>
          <detailing data-aos="fade-up" class="mx-xl-5 py-xl-4 m-lg-2 px-md-0 pt-3 px-4 text-lg-justify text-left deepblue" detailing="We know that to add great value to clients, we have to work together. We provide the best people and bring them together in teams to deliver our services.When necessary we extend our capability by partnering with organizations with similar values to our own but with complementary skills and abilities.">
          </detailing>
        </b-container>
        
        <b-container class="mx-xl-4 pb-xl-5">
          <div class="row d-flex justify-content-center mb-lg-5 pb-lg-5 py-3">
            <div class="col-xl-6 col-lg-12 col-md-12 col-12">
              <tupleimg imageOne="https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" imageTwo="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"></tupleimg>
            </div>
            <div class="col-xl-6 col-lg-12 col-md-12 col-12">
              <div class="mt-2">
                <b-container class="p-0 m-0">
                  <div class="p-0 m-0">
                    <subtitle data-aos="fade-right" class="text-left deepblue px-1" subtitle="Why?"></subtitle>
                  </div>
                </b-container>
                
                <b-container>
                  <detailing data-aos="fade-left" class="px-3 py-0 my-0 text-left deepblue" detailing="To provide long term value to our customers by having services that not only cost effective, but reliable and simple to manage.">
                  </detailing>
                </b-container>
              </div>
            </div>
          </div>
        </b-container>

      </b-container>
    </div>

    <div class="section bluegrad-bg py-xl-5 py-md-3">
      <div class="pb-xl-3 pt-5">
        <b-container>
          <subtitle class="white" data-aos="fade-up" subtitle="Meet our friends"></subtitle>
        </b-container>
      </div>

      <div class="d-flex justify-content-center py-xl-2 py-md-3">
        <separator data-aos="fade-right"></separator>
      </div>

      <b-container class="px-xl-5">
        <div class="px-xl-5 mx-xl-5 my-xl-2">
          <detailing class="px-xl-5 mx-xl-5 py-3 px-4 text-center white" detailing="Join us on the long journey to Innovate Tanzania and develop Africa">
          </detailing>
        </div>
      </b-container>

      <b-container>
        <div class="container py-md-2">
          <div class="row d-flex justify-content-center">
            <div class="hvr-grow col-xl-2 col-lg-4 col-md-4 col-4 d-flex justify-content-center">
              <a href="https://www.tcaa.go.tz/" target="new">
                <roundedimg data-aos="fade-right" data-aos-delay="600" theLogo="TCAA.jpg"></roundedimg>
              </a>
            </div>
            <div class="hvr-grow col-xl-2 col-lg-4 col-md-4 col-4 d-flex justify-content-center">
              <a href="https://www.ports.go.tz/index.php/en/" target="new">
                <roundedimg data-aos="fade-right" data-aos-delay="500" theLogo="TPA.jpg"></roundedimg>
              </a>
            </div>
            <div class="hvr-grow col-xl-2 col-lg-4 col-md-4 col-4 d-flex justify-content-center">
              <a href="http://www.dcc.go.tz/" target="new">
                <roundedimg data-aos="fade-right" data-aos-delay="400" theLogo="DarCityCouncil.jpg"></roundedimg>
                </a>
            </div>          
            <div class="hvr-grow col-xl-2 col-lg-4 col-md-4 col-4 d-flex justify-content-center">
              <a href="https://www.tanroads.go.tz/" target="new">
                <roundedimg data-aos="fade-right" data-aos-delay="300" theLogo="tanroads.jpg"></roundedimg>
              </a>
            </div>
            <div class="hvr-grow col-xl-2 col-lg-4 col-md-4 col-4 d-flex justify-content-center">
              <a href="https://www.gpsa.go.tz/">
                <roundedimg data-aos="fade-right" data-aos-delay="200" theLogo="Gpsa.png"></roundedimg>
              </a>
            </div>
          </div>
        </div>
      </b-container>

      <b-container>
        <div class="px-xl-5 mx-xl-5 my-xl-3">
          <detailing class="px-xl-5 mx-xl-5 py-3 px-4 text-center white" detailing="For more information about our clients, tap the logos above to visit their page">
          </detailing>
        </div>
      </b-container>

      <b-container>
        <b-container class="py-md-4">
          <joinus class="white" data-aos="fade-up" data-aos-delay="400" thequestion="Do you want to join us?" thebtntext="Tap here"></joinus>
        </b-container>
      </b-container>
    </div>

    <div class="section white-bg py-xl-5 py-md-3 py-3">
      <div class="">
        <b-container>
          <div class="mx-4">
            <subtitle class="deepblue" data-aos="fade-up" subtitle="Lets hear what our friends say.."></subtitle>
          </div>
        </b-container>
      </div>

      <div class="d-flex justify-content-center py-md-3 pt-1 pb-2">
        <separator data-aos="fade-right"></separator>
      </div>

      <b-container>
        <detailing class="pt-2 px-4 mx-4 text-center deepblue" detailing="We value your feedback as much as we value your satisfaction">
        </detailing>
      </b-container>

      <b-container>
        <div class="m-md-0 mx-4">
          <div class="row d-flex justify-content-center py-1 mx-md-4 m-lg-0 m-xl-0">
            <div class="col-xl-6 col-lg-6 col-md-12 col-12">
              <horcards data-aos="fade-up" data-aos-delay="300" cardImgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF20pptDh4kncPkEk2Dser-3m2LKhKLylKenVyKCLjd7481eXWFq-L9RoOOoF5YI4rWM&usqp=CAU" cardTitle="Carlos, John" cardDetails="Very quick and easy! Great service thanks!"></horcards>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-12">
              <horcards data-aos="fade-up" data-aos-delay="324" cardImgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF20pptDh4kncPkEk2Dser-3m2LKhKLylKenVyKCLjd7481eXWFq-L9RoOOoF5YI4rWM&usqp=CAU" cardTitle="Nguyane, Shane" cardDetails="Very quick and easy! Great service thanks!"></horcards>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-12">
              <horcards data-aos="fade-up" data-aos-delay="346" cardImgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF20pptDh4kncPkEk2Dser-3m2LKhKLylKenVyKCLjd7481eXWFq-L9RoOOoF5YI4rWM&usqp=CAU" cardTitle="Miles, Esther" cardDetails="Very quick and easy! Great service thanks!"></horcards>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-12 col-12">
              <horcards data-aos="fade-up" data-aos-delay="368" cardImgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHF20pptDh4kncPkEk2Dser-3m2LKhKLylKenVyKCLjd7481eXWFq-L9RoOOoF5YI4rWM&usqp=CAU" cardTitle="Flores, Juanita" cardDetails="Very quick and easy! Great service thanks!"></horcards>
            </div>
          </div>
        </div>
      </b-container>
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
import getstartedModal from '../components/elements/subscribe.vue'

export default {
  name: 'home',
  components: {
    theheader,
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
    getstartedModal,
  }
}
</script>

<style>
.live-chat {
    position: fixed;
    z-index: 999999;
}
</style>
