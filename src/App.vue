<template>
  <div id="app">
    <router-view></router-view>

    <!-- <navigation></navigation> -->
  </div>
</template>

<script>

export default {
  name: "App",

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
  overflow: none;
}
</style>