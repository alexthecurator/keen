<template>
     <div class="hero">
        <div class="overlay"></div>
          <headerMob></headerMob>
          <getstarted></getstarted>
          
    </div>
      
</template>

<script>
import headerMob from './components/headerMob.vue'
import getstarted from './components/getstarted.vue'

export default {
  name: 'index',
  components: {
    headerMob,
    getstarted,
  }
}
</script>
    Servicest>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.hero {
    background-image: url('./assets/bg.webp');
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
}
.overlay {
    background-color: rgba(0,0,0,0.6);
    background-attachment: scroll;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    position: absolute;
    z-index: 3;
}
</style>
