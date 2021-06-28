<template>
    <b-modal id="getstarted" title="Register today">
        <b-form>
            <div class="my-2">
            <label class="black" for="inline-form-input-name">Name</label>
              <b-form-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Eg:  `Ronald Jones`"></b-form-input>  
            </div>
            
            <div class="my-2">
                <label class="black" for="inline-form-input-email">Email</label>
                <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
                <b-form-input id="inline-form-input-email" placeholder="Email"></b-form-input>
                </b-input-group>  
            </div>
        
            <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Remember me</b-form-checkbox>

            <b-button class="my-2" variant="primary">Send</b-button>
        </b-form>
    </b-modal>
</template>

<script>
export default {
    name: 'getstarted'
}
</script>