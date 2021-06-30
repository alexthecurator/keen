<template>
    <footer class="white-bg">
      <div class="black-bg-circle">
        <b-container fluid>
          <b-container>
            <div class="p-xl-5 m-xl-5">
              <reachout class="pb-5 mb-5 white" thequestionaire="Ready to get started?" thebtntexxt="Tap here"></reachout>
            </div>
          </b-container>
        </b-container>
      </div>

      <b-container>
        <div class="p-0 mr-4">
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-12">
              <ul class="footer-menu">
                <li class="footer-item"><a class="footer-link black" href="#/">Home</a></li>

                <div class="d-flex justify-content-center py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item" ><a class="footer-link black" href="#/services">Services</a></li>

                <div class="d-flex justify-content-center pt-1 py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item"><a class="footer-link black" href="#/accomplishments">Projects</a></li>

                <div class="d-flex justify-content-center pt-1 py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item"><a class="footer-link black" href="#/aboutus">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </b-container>

      <b-container class="py-2 my-2">
        <div class="p-0">
          <div class="row">
            <div class="col-4">
              <img class="footer-logo" src="../../assets/logos/kc-logo-dark.svg" alt="">
            </div>
            <div class="col-4">
              <div class="p-2"></div>
            </div>
            <div class="col-4">
              <div class="p-2"></div>
            </div>
          </div>
        </div>
      </b-container>

      <div class="btm-footer">
        <!-- change this later ^^ -->
          <div class="footer-cont yellow-bg py-3">
            <small>Copyright &amp; 2020: keencommunications.com</small>
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