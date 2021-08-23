import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for style


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
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

// data() {
//   return{
//     inMove: false,
//     activeSection: 0,
//     touchStartY: 0,
//     offsets: []
//   }
// },
// methods: {
//   calculateSection(){
//     let sections = document.querySelector('.section');
//     let length = sections.length;

//     for(var i =0; i < length; i++){
//       let sectionOffset = sections[i].offsetTop;
//       this.offsets.push(sectionOffset)
//     }
//   },
//   scrollToSection(id, force = false){
//     if(this.inMove && !force) return false;

//     this.activeSection = id;
//     this.inMove = true;

//     document.getElementsByClassName('section')[id].scrollIntoView({
//       behavior: 'smooth'
//     });

//     setTimeout(() => {
//       this.inMove = false;
//     }, 400);
//   },
//   handleMouse: function(e){
//     if(e.wheelDelta < 30 && !this.inMove){
//       this.moveUp();
//     } else if(e.wheelDelta > 30 && !this.inMove) {
//       this.moveDown();
//     }

//     e.preventDefault();
//     return false;
//   },
//   moveUp(){
//     this.inMove = true;
//     this.activeSection--;

//     if(this.activeSection < 0)this.activeSection = this.offsets.length - 1;

//     this.scrollToSection(this.activeSection, true);
//   },
//   moveDown(){
//     this.inMove = true;
//     this.activeSection++;

//     if(this.activeSection > this.offsets.length)this.activeSection = 0;

//     this.scrollToSection(this.activeSection, true);
//   },
//   touchStart(e){
//     e.preventDefault();

//     this.touchStartY = e.touches[0].clientY;
//   },
//   touchMove(e){
//     if(this.inMove) return false;

//     e.preventDefault();

//     const currentY = e.touches[0].clientY;

//     if(this.inMove < currentY){
//       this.moveDown();
//     } else {
//       this.moveUp();
//     }

//     this.touchStartY = 0;
//     return false;
//   }
// },
// created(){
//   this.calculateSection();

//   window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM);
//   window.addEventListener('mousewheel', this.handleMouseWheel,{
//     passive: false
//   });
//   window.addEventListener('touchstart', this.touchstart, {
//     passive: false
//   });
//   window.addEventListener('touchmove', this.touchmove, {
//     passive: false
//   });
// },
// destroyed(){
//   window.addEventListener('DOMMouseScroll', this.handleMouseWheelDOM, {
//     passive: false
//   });
//   window.addEventListener('mousewheel', this.handleMouseWheel);
//   window.addEventListener('touchstart', this.touchstart);
//   window.addEventListener('touchmove', this.touchmove);
// }