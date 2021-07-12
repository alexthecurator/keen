<template>
    <footer class="white-bg">
      <div class="deepblue-bg">
        <b-container fluid>
          <b-container>
            <div class="p-xl-5">
              <reachout class="white pt-5 mb-5" thequestionaire="Ready to get started?" thebtntexxt="Tap here"></reachout>
            </div>
          </b-container>
        </b-container>
      </div>

      <b-container fluid>
        <div class="pt-5">
          <div class="row">
            <div class="col-xl-4 col-lg-12 col-md-12 col-12">
              <div class="text-left">
                <div class="p-2 pb-0">
                  <img class="footer-logo" src="../../assets/logos/KeenComms-b.png" alt="keen communications">
                </div>
                <div class="p-2">
                  <h5 class="black">Address</h5>
                    <div class="py-0">
                      <p class="black">P. O .Box 80329 Dar es Salaam <br>Tanzania. Survey Road (Opposite Mlimani City)</p>
                    </div>
                </div>
              </div>
            </div>

            <div class="col-xl-4 col-lg-12 col-md-12 col-12">
              <ul class="footer-menu p-2">
                <li class="footer-item"><a class="footer-link deepblue" href="#/">Home</a></li>

                <div class="d-flex justify-content-center py-3">
                  <grayseparator></grayseparator>
                </div>
                
                <li class="footer-item" ><a class="footer-link deepblue" href="#/services">Services</a></li>

                <div class="d-flex justify-content-center pt-1 py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item"><a class="footer-link deepblue" href="#/accomplishments">Projects</a></li>

                <div class="d-flex justify-content-center pt-1 py-3">
                  <grayseparator></grayseparator>
                </div>

                <li class="footer-item"><a class="footer-link deepblue" href="#/aboutus">About Us</a></li>
              </ul>
            </div>
            
            <div class="col-xl-4 col-lg-12 col-md-12 col-12">
              <div class="row d-flex justify-content-center">
                <div class="col-12">
                  <div class="px-xl-2 py-xl-4">
                    <h3 class="black">Let's talk tech</h3>
                  </div>
                </div>
                <div class="col-2">
                  <div class="p-2">
                    <a href="">
                      <img class="social-link" src="../../assets/icons/email.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="p-2">
                    <a href="">
                      <img class="social-link" src="../../assets/icons/whatsapp.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-12">
                  <div class="px-xl-2 py-xl-4">
                    <h3 class="black">Connect with us</h3>
                  </div>
                </div>
                <div class="col-2">
                  <div class="p-2">
                    <a href="">
                      <img class="social-link" src="../../assets/icons/facebook.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="p-2">
                    <a href="">
                      <img class="social-link" src="../../assets/icons/twitter.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="p-2">
                    <a href="">
                      <img class="social-link" src="../../assets/icons/instagram.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="p-2">
                    <a href="">
                      <img class="social-link" src="../../assets/icons/youtube.svg" alt="keen communications">
                    </a>
                  </div>
                </div>
                <div class="col-2">
                  <div class="p-2">
                    <a href="">
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
            
          </div>
          <b-container>
            
          </b-container>
          
        </div>
      </b-container>

      <div class="btm-footer">
        <!-- change this later ^^ -->
          <div class="footer-cont yellow-bg py-3">
            <small class="f">Copyright &copy; 2021: keencommunications.com</small>
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
  .footer-menu > .footer-item > .footer-link {
    font-size: 5vw;
  }
}
</style>