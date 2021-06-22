<template>
    <footer class="section white-bg">
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

        <b-container>
          <div class="container-fluid">
            <div class="row">
              <div class="col-4">
                <i class="fi-rr-add white"></i>
              </div>
              <div class="col-4">
                <i class="fi-rr-add white"></i>
              </div>
              <div class="col-4">
                <i class="fi-rr-add white"></i>
              </div>
            </div>
          </div>
        </b-container>

        <div class="btm-footer pt-5">
          <!-- change this later ^^ -->
            <div class="footer-cont yellow-bg py-2">
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
