<template>
  <div id="app">
    <vue-page-transition>
      <router-view></router-view>
    </vue-page-transition>

    <!-- <splash></splash> -->
  </div>
</template>

<script>
// import splash from './components/landing/splash.vue'

export default {
  name: "App",
  // components: {
  //   splash
  // },
  data(){
    return {
      // splash,
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#app {
  font-family: Lato, Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #252122;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  overflow-x: none;
}
</style>