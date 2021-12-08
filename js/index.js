$(document).ready(function(){
    $('.slides').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        customPaging : function(slider, i) {
            return '<button type="button"></button>';
        },
    });
});

$(document).ready(function(){
    $(".nav-bars-mobile").click(function(){
        $(".collapse").collapse('toggle');
        $(".menu-mobile").addClass('show');
    });
});

