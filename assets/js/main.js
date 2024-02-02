


$(document).ready(function(){

function orderSlides(){
    var slides = document.querySelectorAll('.hero-slider .slide');

    for (let i = 1; i < slides.length; i++) {
        var rightValue = -9 + (9 * i);
        slides[i].style.right = `${rightValue}%`;
      }
}

orderSlides();

            $(".hero-slider .slide").on("click", function(){
                $(this).prevAll()
                gsap.set(this, { 'z-index':'2'});
                gsap.to(".hero-slider .slide:first-child", { autoAlpha:0, duration: 0.5 });
                gsap.to(this, { width: "62%",  left:0, delay:.5, duration: 0.7});
                setTimeout(() => {
                    $(this).addClass('active');
                }, 500);

                setTimeout(() => {
                    $(this).prependTo(".hero-slider");
                    $(".hero-slider .slide:last-child").appendTo(".hero-slider");
                    $('.hero-slider .slide').removeClass('disabled');
                    gsap.set($('.hero-slider .slide'), {clearProps: 'all'})
                    orderSlides();
                    $(this).removeClass('active');
                }, 1000);

                
                gsap.to($(this).prevAll(), { right: '+=' +  ($(this).index() - 2) * 9 + '%' });

                setTimeout(() => {
                    $(this).nextAll().addClass('disabled');
                }, 900);
            });

        });
