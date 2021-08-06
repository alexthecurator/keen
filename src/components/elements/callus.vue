<template>
    <b-modal class="getstarted" id="callustoday" title="Register today" content-class="shadow" size="lg" centered hide-header hide-footer >
        <div class="row">
            <div class="col-xl-6 col-12 white-bg modal-content">
                <div class="mx-xl-5">
                    <div class="py-5 mb-4">
                        <div class="py-2">
                            <h2 class="deepblue">Reach us through</h2>
                        </div>
                        <div class="my-xl-2 my-2">
                            <label class="deepblue" for="inline-form-input-name">Also available on whatsapp</label>
                            <b-form-input
                                id="inline-form-input-name"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                placeholder="+255 765 542 573"
                                readonly>
                            </b-form-input>  
                        </div>
                        <div class="my-xl-2 my-2">
                            <label class="deepblue" for="inline-form-input-email">Or Call us</label>
                            <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
                                <b-form-input 
                                    id="inline-form-input-email"
                                    placeholder="+255 713 747 904"
                                    readonly>
                                </b-form-input>
                            </b-input-group>  
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-6 col-12">
                <div class="subimg-cont">
                    <img class="sub-img" src="https://images.unsplash.com/photo-1547658718-1cdaa0852790" alt="">
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {
    name: 'callustoday',
}
</script>
<style scoped>
.subimg-cont {
    position: relative;
}
.subimg-cont .sub-img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 420px;
    border-radius: 2px;
}
.model-content {
    border-radius: 22px;
}
</style>