


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


  var sliderAnime = gsap.timeline({yoyo: false, reversed: true});
  sliderAnime.pause();

  sliderAnime.to($('.hero-slider .slide.active'), {right: $(this).css('right'), width: '9%', position: 'absolute'}, 0.1);
  sliderAnime.set($('.hero-slider .slide.active'), {left:'auto'}, 0.2);
  sliderAnime.to($('.hero-slider .slide.active').find('.slide-content'), {autoAlpha:0, position:'absolute' }, 0.1);
  sliderAnime.to($('.hero-slider .slide.active').find('.image'), {'border-radius':'35px', width:'100%', duration: 0.5 }, 0.1);
  
  sliderAnime.to($(this), {width: '60%', left: 0, duration: 0.5 }, 0.1);
  sliderAnime.to($(this).find('.slide-content'), {width: '50%', duration: 0.5 }, 0.1);
  sliderAnime.to($(this).find('.image'), {width: '50%', float: 'right', 'border-radius': '0', duration: 0.5 }, 0.1);
  sliderAnime.to($(this).find('.slide-content'), {position: 'relative', autoAlpha: 1, duration: 0.5 });
  sliderAnime.from($(this).find('.slide-content h1'), {x:-100, autoAlpha:0, duration: 0.5 });

  sliderAnime.play();

  $('.hero-slider .slide').removeClass('active');
  $(this).addClass('active');
        });

});
