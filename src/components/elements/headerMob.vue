<template>
    <div class="header">
        <div class="col-12 p-0 m-0">
            <b-navbar variant="faded" type="light">
                <b-navbar-brand href="#/home">
                    <img src="../../assets/logos/kc-full-dark.png" class="d-inline-block align-top" alt="keen communication logo" />
                </b-navbar-brand>
            </b-navbar>  
        </div>
    </div>
</template>

<script>
// var logoID = document.getElementById('kc-logo');
// function resizeLogo(logoID, width, height){
//     document.getElementById('kc-logo').style.width = width;
//     document.getElementById('kc-logo').style.height = height;
// }

// function swapLogo(url){
//     document.getElementById('kc-logo').src = url;
// }

// document.addEventListener('scroll', function(){
//     if(window.scrollY >= 700){
//         var newW = '53.23px';
//         var newH =  '32px';
//         var path = '../../assets/logos/kc-light.png';
//         resizeLogo(newW, newH);
//         swapLogo(path);
//     } else {
//         newW = '75.35px';
//         newH = '55px';
//         var orgPath = '../../assets/logos/kc-full-dark.png';
//         resizeLogo(newW, newH);
//         swapLogo(orgPath);
//     }
// });
</script>

<style scoped>
    .header {
        padding: 10px 0;
        margin: 0;
        background-color: transparent;
        position: absolute;
        width: 100%;
        z-index: 999;
    }
    .header img {
        position: relative;
        z-index: 9999;
        width: 73.35px;
        height: 55px;
    }
</style>
