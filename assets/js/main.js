


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

        gsap.set($('.hero-slider .slide:not(.hero-slider .slide:first)').find('.slider-caption h2, .slider-caption .category'), { autoAlpha:0 })

        $('.hero-slider .slide').on('click', function(){
        gsap.set($(this).find('a'), { 'display':'inline-block'})
        gsap.set($('.hero-slider .slide:not(.hero-slider .slide:first)').find('.slider-caption h2, .slider-caption .category'), { autoAlpha:0 })

        gsap.set($('.hero-slider .slide'), { 'pointer-events': 'none' })

        gsap.set($(this), {'z-index': '2' })

        gsap.to( $(this).prevAll().find('.category') , {delay:.8, clearProps: 'all'})
        gsap.to( $(this).prevAll().find('h2') , {delay:.8, clearProps: 'all'})
        gsap.to( $(this).prevAll().find('.letter') , {delay:.8, clearProps: 'all'})

        gsap.to($(this).find('.letter'), { autoAlpha:0 })
        gsap.to($(this).find('.slider-caption .category'), { autoAlpha:1, x:0, delay:.3, duration:.8})
        gsap.to($(this).find('.slider-caption h2'), { autoAlpha:1, x:0, delay:.5, duration:.8})

        if(($(window).width()) > 1024){
          gsap.to($(this), {'width': '60%', left: 0 })
        }
          
        gsap.set($(this).nextAll().find('a'), { 'display':'none'})
        gsap.set($(this).nextAll().find('.overlay'), { clearProps: 'all'})
        gsap.to($(this).find('.overlay'), {autoAlpha:0 })

        if ($(window).width() > 1024) {
          transportAmount =  10;
        }     

        gsap.to($(this).nextAll(), { right: '+=' +  $(this).index() * transportAmount + '%' });


        gsap.to($('.hero-slider .slide'), {delay:.8, clearProps: 'transform'})

        setTimeout(() => {
        $(this).prevAll().removeAttr('style');
        sliderOrder();
          gsap.set($('.hero-slider .slide'), { 'pointer-events': 'all' })
        }, 1000);

        });

});
