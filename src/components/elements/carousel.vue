<template>
    <!-- <div class="container" id="projectOne">
        <carousel-3d>
            <slide v-for="(slide, i) in slides" :index="i" :key="i">
                <div class="carousel-img">
                    <img width="200px" height="200px" src="https://placehold.it/360x270" alt="project highlights">
                </div>
                <div class="carousel-title">
                    <b-container>
                        <subtitle class="yellow" subtitle="GPSA Networking installation"></subtitle>
                    </b-container>
                </div>
                <div class="carousel-details">
                    <detailing class="py-3 px-4 white" detailing="Goverment Procurement Service Agency contacted us to install and maintain their network platform. It was a successful achievement."></detailing>
                </div>
            </slide>
        </carousel-3d>
    </div> -->

    <div class="container" id="projectOne">
        <!-- <carousel-3d> -->
            <!-- <slide v-for="(slide, i) in slides" :index="i" :key="i"> -->
                <div class="carousel-img pb-3">
                    <img src="https://via.placeholder.com/200x200" alt="project highlights">
                </div>
                <div class="carousel-title">
                    <subtitle class="yellow" subtitle="GPSA Networking installation"></subtitle>
                </div>
                <div class="carousel-details">
                    <detailing class="py-3 px-4 white" detailing="Goverment Procurement Service Agency contacted us to install and maintain their network platform. It was a successful achievement."></detailing>
                </div>
            <!-- </slide> -->
        <!-- </carousel-3d> -->
    </div>
</template>

<script>
// import {Carousel3d, Slide} from 'vue-carousel-3d';
import subtitle from '../../components/typography/subtitle.vue'
import detailing from '../../components/typography/detailing.vue'
// import Vue from 'vue';

// new Vue({
//   el: '#projectOne',
//   data: {
//     slides: 7
//   },
//   components: {
//       Carousel3d,
//         Slide,
//         subtitle,
//         detailing,
//   }
// })

export default {
    name: 'carousel',
    components: {
        subtitle,
        detailing
    }
}
</script>

<style scoped>
    .carousel-img img{
        border-radius: 12px;
    }
</style>
