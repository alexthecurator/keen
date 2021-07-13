<template>
<div>
    <div class="d-none d-xl-block">
        <div class="video-bg">
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="video-cont">
                <source :src="require('../../assets/gif/' + videoSrc)" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">
            </video>
            <div class="overlay img-responsive"></div>
        </div>
    </div>
    <div class="d-block d-xl-none">
        <div class="hero">
            <div class="overlaydrk"></div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'herogif',
    props: ['videoSrc']
}
</script>
<style type="text/css">
.video-bg {
    z-index: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    min-height: 100%;
    min-width: 100%;
    top: 0px;
    left: 0px;
    bottom: 0px;
    margin: 0px;
    padding: 0px;
}
.video-bg video {
    width: 100vw;
    height: 100vh;
}
#video-cont {
    object-fit: initial;
    width: 100%;
    height: 960px;
}
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
    background-image: linear-gradient(80deg, #041E42, transparent, transparent);
}
.overlaydrk{
    background-color: rgba(0, 0, 0, .4);
}
.overlay, .overlaydrk {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    height: 100%;
    width: 100%;
    min-height: 100%;
    min-width: 100%;
    top: 0px;
    bottom: 0px;
    margin: 0px;
    padding: 0px;
    z-index: 0;
} 
</style>