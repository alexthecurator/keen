<template>
<!--Video container-->
<div class="d-none d-lg-block">
    <div class="video-bg" data-aos="fade-zoom-in">
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop" id="video-cont">
            <source src="../../assets/gif/network-bg.mp4" type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">
        </video>
        <div class="overlay img-responsive" data-aos="fade-zoom-in"></div>
    </div>
</div>

</template>
<style type="text/css">
.video-bg {
    z-index: 0;
    position: fixed;
    min-height: 100%;
    min-width: 100%;
    top: 0px;
    left: 0px;
    bottom: 0px;
    margin: 0px;
    padding: 0px;
}
#video-cont {
    object-fit: initial;
    width: 100%;
    height: 960px;
}
.overlay {
    background-image: linear-gradient(80deg, #041E42, transparent, transparent);
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