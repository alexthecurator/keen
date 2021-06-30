<template>
    <div class="header white-bg">
        <div class="d-block d-lg-none col-12 p-0 m-0">
            <b-navbar variant="faded" type="light">
                <b-navbar-brand href="#/">
                    <img src="../../assets/logos/kc-logo-dark.svg" class="brand-logo-m d-inline-block align-top" alt="keen communication logo" />
                </b-navbar-brand>
            </b-navbar>  
        </div>
        <div class="d-none d-lg-block col-12 p-0 m-0">
            <b-navbar variant="faded" type="light">
                <b-navbar-brand href="#/">
                    <img src="../../assets/logos/kc-logo-dark.svg" class="brand-logo d-inline-block align-top" alt="keen communication logo" />
                </b-navbar-brand>
                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item class="nav-link mx-3" href="#/">Home</b-nav-item>
                        <b-nav-item class="nav-link mr-4" href="#/services">Services</b-nav-item>
                        <b-nav-item class="nav-link mr-4" href="#/accomplishments">Achievements</b-nav-item>
                        <b-nav-item class="nav-link" href="#/aboutus">About us</b-nav-item>
                    </b-navbar-nav>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                        </b-nav-form>

                        <!-- <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                        </b-nav-item-dropdown> -->

                        <!-- <b-nav-item-dropdown right> -->
                        <!-- Using 'button-content' slot -->
                        <!-- <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown> -->
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>  
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
    .header {
        padding: 10px 0;
        margin: 0;
        position: absolute;
        width: 100%;
        z-index: 999;
    }
    .nav-link {
        font-size: .86vw;
    }
</style>
