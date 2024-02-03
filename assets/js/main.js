


$(document).ready(function(){

    var slides = document.querySelectorAll('.hero-slider .slide');

        function sliderOrder(){
            function slidePosition(){
              if(($(window).width()) > 1024){
                for (let i = 1; i < slides.length; i++) {
                  var rightValue = 40 - (10 * i);
                  slides[i].style.right = `${rightValue}%`;
                }
              }

            }   
            slidePosition();
        }

        sliderOrder();

  
 $('.hero-slider .slide').on('click', function(){

  gsap.set($('.hero-slider .slide'), { 'pointer-events': 'none' });
  var sliderAnime = gsap.timeline({yoyo: false, reversed: true});
  sliderAnime.pause();

  sliderAnime.to($('.hero-slider .slide.active').find('.slide-content'), {'opacity':0, duration:.1, ease: "Expo.easeInOut",},0);
  sliderAnime.to($('.hero-slider .slide.active'), {width: '9%', duration:1, ease: "Expo.easeInOut",},0.5);
  sliderAnime.to($('.hero-slider .slide.active').find('.popup-image'), {x:-50, autoAlpha:0, duration:.4},.9);
  sliderAnime.set($('.hero-slider .slide.active'), { right: $(this).css('right'),  position: 'absolute',},.9);
  sliderAnime.to($(this), {width: '60%', left: 0, duration: 0.5 },0.9);
   sliderAnime.set($('.hero-slider .slide.active'), {left:'auto',},.9);
   sliderAnime.to($('.hero-slider .slide.active').find('.image'), {'border-radius':'35px', width:'100%', duration: 0.5 },.9);
  
   sliderAnime.to($(this).find('.slide-content'), {width: '45%', duration: 0.5 },.9);
   sliderAnime.to($('.hero-slider .slide.active').find('.slide-content'), {'position':'absolute', ease: "Expo.easeInOut",},0.9);
   sliderAnime.to($(this).find('.image'), {width: '45%', float: 'right', duration: 0.5 },.9);
   sliderAnime.to($(this).find('.slide-content'), {position: 'relative', autoAlpha: 1, duration: 0.5 },1.5);
   sliderAnime.to($(this).find('.popup-image'), {x:0, autoAlpha:1, duration:.5},1.5);
   sliderAnime.from($(this).find('.slide-content .item'), {x:-100, autoAlpha:0, stagger:0.2, },2);

  sliderAnime.play();

  setTimeout(() => {
    $('.hero-slider .slide').removeClass('active');
    $(this).addClass('active');
    gsap.set($('.hero-slider .slide'), { 'pointer-events': 'all' })
  }, 1400);


        });

});
