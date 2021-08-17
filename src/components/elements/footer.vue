<template>
    <footer class="deepblue-bg">
      <div class="white-bg">
        <b-container fluid>
          <b-container>
            <div class="p-xl-5">
              <reachout class="pt-5 mb-5 deepblue" thequestionaire="Ready to get started?" thebtntexxt="Tap here"></reachout>
            </div>
          </b-container>
        </b-container>
      </div>

      <b-container fluid>
        <div class="pt-5">
          <div class="row">
            <div class="col-xl-4 col-lg-12 col-md-12 col-12">
              <div class="text-left">
                <div class="py-2 pb-0">
                  <img class="footer-logo" src="../../assets/logos/KEENComms-white.svg" alt="keen communications">
                </div>
                <div class="p-2">
                  <h5 class="white">Location address</h5>
                    <div class="py-2">
                      <grayseparator></grayseparator>
                    </div>
                    <div class="py-0">
                      <p class="gray">P. O .Box 80329 Dar es Salaam <br>Tanzania. Survey Road ( Opposite Mlimani City )</p>
                    </div>
                </div>
              </div>
              <div>

              </div>
            </div>

            <div class="col-xl-4 col-lg-12 col-md-12 col-12">
              <div class="maps">
                <google-map></google-map>
              </div>
            </div>
            
            <div class="col-xl-4 col-lg-12 col-md-12 col-12">
              <div class="row d-flex justify-content-center">
                <div class="col-12">
                  <div class="px-xl-2 py-xl-4">
                    <h3 class="white">Let's talk tech</h3>
                  </div>
                </div>
                <div class="col-2">
                  <div class="hvr-grow p-2">
                    <a href="mailto:kc@keencommunications.co.tz?subject = Feedback&body = Message">
                      <img class="social-link" src="../../assets/icons/email.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="hvr-grow p-2">
                    <a href="https://wa.me/+255765542573">
                      <img class="social-link" src="../../assets/icons/whatsapp.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-12">
                  <div class="px-xl-2 py-xl-4">
                    <h3 class="white">Connect with us</h3>
                  </div>
                </div>
                <div class="col-2">
                  <div class="hvr-grow p-2">
                    <a href="https://web.facebook.com/keencomms/">
                      <img class="social-link" src="../../assets/icons/facebook.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="hvr-grow p-2">
                    <a href="https://twitter.com/keencomms">
                      <img class="social-link" src="../../assets/icons/twitter.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="hvr-grow p-2">
                    <a href="https://www.instagram.com/keencomms/">
                      <img class="social-link" src="../../assets/icons/instagram.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="hvr-grow p-2">
                    <a href="https://www.youtube.com/channel/UCUIvNIqncLEsJnB9P-TZQ9w">
                      <img class="social-link" src="../../assets/icons/youtube.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="hvr-grow p-2">
                    <a href="https://www.linkedin.com/company/keen-comms">
                      <img class="social-link" src="../../assets/icons/linkedin.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </b-container>

      <b-container fluid>
        <div class="">
          <div class="">
            <div class="col-12">
              <div class="p-xl-2 p-2">
                <h4 class="gray">Links</h4>
              </div>
            </div>
            <ul class="d-md-flex justify-content-center footer-menu p-2">
                <li class="footer-item"><a class="footer-link" href="#/">Home</a></li>

                <div class="d-md-flex justify-content-center py-3">
                  <grayseparator></grayseparator>
                </div>
                
                <li class="footer-item" ><a class="footer-link" href="#/services">Services</a></li>

                <div class="d-md-flex justify-content-center pt-1 py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item"><a class="footer-link" href="#/accomplishments">Projects</a></li>

                <div class="d-md-flex justify-content-center pt-1 py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item"><a class="footer-link" href="#/aboutus">About Us</a></li>
              </ul>
          </div>
          <b-container>
            
          </b-container>
          
        </div>
      </b-container>

      <div class="btm-footer">
        <!-- change this later ^^ -->
          <div class="footer-cont yellow-bg py-3">
            <small class="deepblue">Copyright &copy; 2021: keencommunications.com</small>
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
    font-size: 1vw;
}
@media screen and (max-width: 780px) and (max-width: 1024px){
  .footer-menu > .footer-item > .footer-link {
    font-size: 5.6vw;
  }
}
@media screen and (max-width: 320px) and (max-width: 380px) and (max-width: 480px){
  .footer-menu .footer-item .footer-link {
    font-size: 11px;
  }
}
</style>