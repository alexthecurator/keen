<template>
    <div class="">
        <div class="header white-bg fixed-top d-none d-lg-block col-12 p-0 m-0">
            <b-navbar>
                <router-link to="/">
                    <img src="../../assets/logos/KeenComms-official.svg" class="brand-logo d-inline-block align-top" alt="keen comms logo" />
                </router-link>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <router-link class="nav-link mx-3" to="/network">Network</router-link>
                        <router-link class="nav-link mx-3" to="/hardware">Hardware</router-link>
                        <router-link class="nav-link mx-3" to="/software">Software</router-link>
                        <router-link class="nav-link mx-3" to="/accessories">Accessories</router-link>
                        <router-link class="nav-link mx-3" to="/aboutus">About us</router-link>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <input size="sm" class="search-bar mr-sm-2 p-xl-1" placeholder="Search" />
                        </b-nav-form>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>  
        </div>
        <div class="header white-bg d-block d-lg-none col-12 p-0 m-0">
            <b-navbar variant="faded" type="light">
                <b-navbar-brand href="#">
                <img src="../../assets/logos/KeenComms-official.svg" class="brand-logo d-inline-block align-top" alt="keen comms logo" />
                </b-navbar-brand>
            </b-navbar>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .header , .header-sm {
        margin: 0;
        width: 100vw;
        z-index: 999;
    }
    .header {
        position: absolute;
    }
    .header-sm {
        position: relative;
    }
    .nav-link {
        font-size: .82vw;
        font-weight: 500;
    }
    .search-bar {
        border: none;
        border-radius: none;
        background-color: transparent;
        border-bottom: 2px solid #0A79FF;
    }
    input:focus {
        border: 2px solid #0A79FF;;
    }
    .nav-link a:hover {
        background-color: #0A79FF;
    }
    @media screen and (max-width: 1400px){
        .header {
            padding: 10px 0;
        }
    }
    @media screen and (max-width: 1280px){
        .header {
            padding: 5px 0;
        }
    }
    @media screen and (max-width: 1024px){
        .header-sm {
            padding: 5px 0;
        }
    }
    @media screen and (max-width: 780px){
        .header-sm {
            padding: 5px 0;
        }
    }
    @media screen and (max-width: 480px){
        .header-sm {
            padding: 5px 0;
        }
    }
    @media screen and (max-width: 420px){
        .header-sm {
            padding: 5px 0;
        }
    }
    @media screen and (max-width: 320px){
        .header-sm {
            padding: 5px 0;
        }
    }
</style>
