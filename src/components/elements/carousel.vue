<template>
    <div class="" id="projectOne">
        <carousel-3d>
            <slide :index="0">
                <div class="carousel-img">
                    <img src="https://via.placeholder.com/300" alt="project highlights">
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
            <slide :index="1">
                <div class="carousel-img">
                    <img src="https://via.placeholder.com/300" alt="project highlights">
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
            <slide :index="2">
                <div class="carousel-img">
                    <img src="https://via.placeholder.com/300" alt="project highlights">
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
    </div>
</template>

<script>
import {Carousel3d, Slide} from 'vue-carousel-3d';
import subtitle from '../../components/typography/subtitle.vue'
import detailing from '../../components/typography/detailing.vue'

export default {
    name: 'carousel',
    components: {
        Carousel3d,
        Slide,
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
