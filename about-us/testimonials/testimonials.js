const nextBtn = document.querySelector('.icon-next');
const prevBtn = document.querySelector('.icon-before');
const slides = document.querySelectorAll('.testimonial');
const slideIcons = document.querySelectorAll('.point');
const numberOfSlide = slides.length;
let slideNumber = 0;

//Slider next button

nextBtn.addEventListener('click', () => {
   slides.forEach((slide) => {
      slide.classList.remove('active');
   });

   slideIcons.forEach((slideIcons) => {
      slideIcons.classList.remove('active');
   });

   slideNumber++;

   if(slideNumber > (numberOfSlide - 1)){
      slideNumber = 0;
   }

   slides[slideNumber].classList.add('active');
   slideIcons[slideNumber].classList.add('active');
})

//Slider previous button

prevBtn.addEventListener('click', () => {
   slides.forEach((slide) => {
      slide.classList.remove('active');
   });

   slideIcons.forEach((slideIcons) => {
      slideIcons.classList.remove('active');
   });

   slideNumber--;

   if(slideNumber < 0){
      slideNumber = numberOfSlide - 1;
   }

   slides[slideNumber].classList.add('active');
   slideIcons[slideNumber].classList.add('active');
})