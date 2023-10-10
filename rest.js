
(function ($) {

    "use strict";
    //wow js
    new wow().init();

    //counter-up
$('[data-toggle="counter-up"]').counterUp({
    delay:10,
    time:2000
});
    //testimonail-carousel
$(".testimonial-carousel").owlCarousel({
    autoplay:true,
    smartspeed:1000,
    center:true,
    margin:24,
    dots:true,
    loop:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});
//back to top button
$(window).scroll(function(){
    if($(this).sctollTop()>300){
        $('.back-to-top').fadeIn('slow');
    }else{
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function (){
    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
    return false;
});

})(jQuery);


