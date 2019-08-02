import { SlideNav } from './slide.js';

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
// Ativando botao slide
slide.addArrow('.prev', '.next');
console.log(slide);

// slide.changeSlide(3);
// slide.activePrevSlide();