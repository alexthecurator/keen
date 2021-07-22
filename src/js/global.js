import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for style
import Rellax from 'rellax';

AOS.init({
    // Global settings:
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

var rellax = new Rellax('.rellax');
console.log(rellax);