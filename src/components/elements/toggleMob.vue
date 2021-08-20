<template>
    <div class="">
       <div class="toggle d-lg-none fixed" id="toggleBtn">
            <b-button @click="getNav()" class="toogle-brd" id="getBtn">
                <img class="toggle-logo" src="../../assets/logos/KEENComms.svg" alt="">
            </b-button>
        </div> 
    </div>
</template>

<script type="javascript">
export default {
    name: 'toogleMob',
    methods: {
        getNav() {
            this.$router.push('/fullmenu');
        },
    },
    mounted(){
        const toggle = document.getElementById('toggleBtn');
        var firstScrollPos = 0;
        var passive = true;
        document.addEventListener('scroll', function(){
            firstScrollPos = window.scrollY;

            if(firstScrollPos > 512){
              toggle.classList.add('showToggle');

            } else if(firstScrollPos < 512){
                toggle.classList.remove('showToggle');
            } 
        }, passive);

        // function removeToggleWhenIdle(){
        //     for(var timer = 0; timer <=5; timer++){
        //         if(timer <= 5){
        //             toggle.classList.remove('showToggle');
        //         }  
        //         console.log(timer);
        //     }
            
          
        // }
        // removeToggleWhenIdle();
    }
}
</script>

<style scoped>
    .toggle {
        position: fixed;
        z-index: 999999;
        bottom: 20%;
        right: 5%;
        padding: 0px;
        display: block;
        opacity: 0%;
    }
    .showToggle {
        opacity: 100%;
        transition: .6s all ease;
    }
    .toogle-brd {
        background-color: transparent;
        
    }
    .toggle .toggle-logo {
        width: 92px;
        height: 92px;
        
    }
    @media screen and (max-width: 1024px){
        
    }
    @media screen and (max-width: 780px){
        
    }
    @media screen and (max-width: 420px){
        
    }
    @media screen and (max-width: 380px){
        
    }
    @media screen and (max-width: 320px){
        .toggle .toggle-logo {
            width: 72px;
            height: 72px;
            
        }
    }
</style>