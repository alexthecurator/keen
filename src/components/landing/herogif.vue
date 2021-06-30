<template>
     <video-background 
    src="../../assets/gif/network-bg.mp4.mp4"
    style="max-height: 400px; height: 100vh;">
 </video-background>
</template>

<script>
import VideoBackground from 'vue-responsive-video-background-player';
Vue.component('video-background', VideoBackground);

export default {
    name: 'hero'
}
</script>

<style scoped>
/* hero */
.hero {
    background-image: url('../../assets/images/home.webp');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    position: fixed;
    z-index: 2;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.6);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 3;
}
</style>