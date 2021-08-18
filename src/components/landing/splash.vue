<template>
    <div>
        <div class="backdrop"></div>
		<div class="container-fluid">
            <div class="container d-flex justify-content-center">
                <div class="content">
                    <div class="d-flex justify-content-center floating">
                        <div class="rounded-box white-bg">
                            <div class="d-flex justify-content-center">
                                <img class="kc-logo" src="../../assets/logos/KeenComms-official.svg" alt="keen communications logo" title="keen communications">
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center">
                        <i class="loader four"></i>
                    </div>
                </div>
            </div>
		</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.rounded-box {
	border-radius: 12px;
	width: 150px;
	height: 150px;
	padding: 14px 0;
	box-shadow: 0 12px 16px rgba(4, 30, 66, .1);
}

.backdrop {
	background-image: linear-gradient(45deg, #041E42, #0A79FF);
	position: absolute;
	z-index: 999;
	width: 100vw;
	height: 100vh;
}
.content {
	position: absolute;
	z-index: 2;
	top: 28vh;
	height: 72%;
}
.kc-logo {
	width: 120px;
	height: 120px;
}
.v-bottom {
	top: 30vh;
	padding: 20px;
	margin: 10px;
	position: relative;
}

/* Floating animation */

.floating {  
    animation-name: floating;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
}
  
@keyframes floating {
    0% { transform: translate(0,  0px); }
    50%  { transform: translate(0, 10px); }
    100%   { transform: translate(0, -0px); }    
}

/* loader four */

.loader .four::before {
	height: var(--size-bar);
	width: 6vmin;
	background-color: var(--color);
	animation: loader-4 2s cubic-bezier(0, 0, 0.03, 0.9) infinite;
}

@keyframes loader-4 {
	0%, 44%, 88.1%, 100% {
		transform-origin: left;
	}
	
	0%, 100%, 88% {
		transform: scaleX(0);
	}
	
	44.1%, 88% {
		transform-origin: right;
	}
	
	33%, 44% {
		transform: scaleX(1);
	}
}

.loader {
	--color: #FFCC00;
	--size-mid: 6vmin;
	--size-dot: 1.5vmin;
	--size-bar: 0.4vmin;
	--size-square: 3vmin;
	
	display: block;
	position: relative;
	width: 50%;
	display: grid;
	place-items: center;
}

.loader::before,
.loader::after {
	content: '';
	box-sizing: border-box;
	position: absolute;
}

/* Responsive */

@media screen and (max-width: 1200px){
	
}

@media screen and (max-width: 1024px){
	.rounded-box {
		width: 200px;
		height: 200px;
		padding: 42px 0;
		border-radius: 16px;
	}
	.kc-logo {
		width: 187.5px;
		height: 117.33px;
	}
	.v-bottom {
		top: 36vh;
	}
}

@media screen and (max-width: 768px){
	.rounded-box {
		width: 170px;
		height: 170px;
		padding: 30px 0;
	}
	.kc-logo {
		width: 127.5px;
		height: 107.33px;
	}
	.v-bottom {
		top: 34vh;
	}
}

@media screen and (max-width: 480px){
	.rounded-box {
		width: 130px;
		height: 130px;
		padding: 12px 0;
	}
	.kc-logo {
		width: 97.5px;
		height: 113.33px;
	}
	.v-bottom {
		top: 26vh;
	}
}

@media screen and (max-width: 380px) {
	.rounded-box {
		width: 120px;
		height: 120px;
		padding: 12px 0;
	}
	.kc-logo {
		width: 87.5px;
		height: 103.33px;
	}
	.v-bottom {
		top: 22vh;
	}
}

@media screen and (max-width: 320px){
	.rounded-box {
		width: 110px;
		height: 110px;
		padding: 12px 0;
	}
	.kc-logo {
		width: 77.5px;
		height: 93.33px;
	}
	.v-bottom {
		top: 18vh;
	}
}

@media screen and (max-height: 823px){
	.v-bottom {
		top: 32vh;
	}
}

@media screen and (max-height: 812px){
	.v-bottom {
		top: 32vh;
	}
}

@media screen and (max-height: 736px){
	.v-bottom {
		top: 27vh;
	}
}

@media screen and (max-height: 731px){
	.v-bottom {
		top: 27vh;
	}
}


@media screen and (max-height: 720px){
	.v-bottom {
		top: 19vh;
	}
}

@media screen and (max-height: 512px){
	.v-bottom {
		top: 10vh;
	}
	.content {
	top: 16vh;
	}
}
</style>