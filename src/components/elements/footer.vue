<template>
    <footer class="black-bg">
      <div class="white-bg">
        <b-container fluid>
          <b-container>
            <div class="p-xl-5">
              <reachout class="black pb-5 mb-5" thequestionaire="Ready to get started?" thebtntexxt="Tap here"></reachout>
            </div>
          </b-container>
        </b-container>
      </div>

      <b-container>
        <div class="pt-5 d-flex justify-content-center">
          <div class="row">
            <div class="col-xl-4 col-lg-12 col-md-12 col-12">
              
            </div>
            <div class="col-xl-4 col-lg-12 col-md-12 col-12">
              <ul class="footer-menu">
                <li class="footer-item"><a class="footer-link" href="#/">Home</a></li>

                <div class="d-flex justify-content-center py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item" ><a class="footer-link" href="#/services">Services</a></li>

                <div class="d-flex justify-content-center pt-1 py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item"><a class="footer-link" href="#/accomplishments">Projects</a></li>

                <div class="d-flex justify-content-center pt-1 py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item"><a class="footer-link" href="#/aboutus">About Us</a></li>
              </ul>
            </div>
            <div class="col-xl-4 col-lg-12 col-md-12 col-12">

            </div>
          </div>
        </div>
      </b-container>

      <b-container fluid>
        <div class="">
          <div class="">
            <div class="p-2">
                <img class="brand-logo" src="../../assets/logos/kc-logo-full-light.svg" alt="keen communications">
            </div>
          </div>
          <b-container>
            <div class="row d-lg-flex justify-content-center">
              <div class="col-4">
                <div class="p-2">
                  <img class="footer-logo" src="../../assets/svg/instagram.svg" alt="keen communications">
                </div>
              </div>
              <div class="col-4">
                <div class="p-2">
                  <img class="footer-logo" src="../../assets/svg/youtube.svg" alt="keen communications">
                </div>
              </div>
              <div class="col-4">
                <div class="p-2">
                  <img class="footer-logo" src="../../assets/svg/linkedin.svg" alt="keen communications">
                </div>
              </div>
            </div>
          </b-container>
          
        </div>
      </b-container>

      <div class="btm-footer">
        <!-- change this later ^^ -->
          <div class="footer-cont yellow-bg py-3">
            <small>Copyright &amp; 2021: keencommunications.com</small>
          </div>
      </div>
    </footer>
</template>

<script>
import reachout from '../../components/landing/reachout.vue'
import grayseparator from '../../components/typography/grayseparator.vue'

export default {
    name: 'light-footer',
    components: {
        grayseparator,
        reachout,
    }
}
</script>

<style>
.btm-footer {
  bottom: .001%;
  position: relative;
  width: 100%;
  height: 100%;
}
.btm-footer .footer-cont {
  top: 5.6vh;
  position: relative;
}
.footer-menu .footer-item .footer-link {
    font-size: 1.4vw;
}
@media screen and (max-width: 780px) and (max-width: 1024px){
  .footer-menu > .footer-item > .footer-link {
    font-size: 5.6vw;
  }
}
@media screen and (max-width: 320px) and (max-width: 380px) and (max-width: 480px){
  .footer-menu > .footer-item > .footer-link {
    font-size: 5vw;
  }
}
</style>