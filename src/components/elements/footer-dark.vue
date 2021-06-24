<template>
    <footer class="white-bg">
        <div class="black-bg-circle">
          <b-container fluid>
            <b-container>
              <reachout class="white pb-5 mb-5" thequestionaire="Ready to get started?" thebtntexxt="Tap here"></reachout>
            </b-container>
          </b-container>
        </div>

        <b-container>
          <div class="p-0 mr-4">
            <div class="row">
              <div class="col-12">
                <ul class="footer-menu">
                  <li class="footer-item"><a class="footer-link black" href="/#">Home</a></li>

                  <div class="d-flex justify-content-center py-3">
                    <grayseparator></grayseparator>
                  </div>

                  <li class="footer-item" ><a class="footer-link black" href="./services">Services</a></li>

                  <div class="d-flex justify-content-center pt-1 py-3">
                    <grayseparator></grayseparator>
                  </div>

                  <li class="footer-item"><a class="footer-link black" href="./projects">Projects</a></li>

                  <div class="d-flex justify-content-center pt-1 py-3">
                    <grayseparator></grayseparator>
                  </div>

                  <li class="footer-item"><a class="footer-link black" href="./aboutus">About Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </b-container>

        <b-container class="py-2 my-2">
          <div class="p-0">
            <div class="row">
              <div class="col-4">
                <img width="100px" src="../../assets/logos/kc-light.png" alt="">
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
    name: 'dark-footer',
    components: {
        grayseparator,
        reachout,
    }
}
</script>
<style scoped>
.btm-footer {
  bottom: .001%;
  position: relative;
  width: 100vw;
  height: 100%;
}
.btm-footer .footer-cont {
  top: 5.6vh;
  position: relative;
}
</style>