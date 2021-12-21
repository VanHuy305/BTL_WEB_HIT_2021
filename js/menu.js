$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'>","<i class='fas fa-chevron-right'>"],
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        992:{
            items:1
        }
    }
})

wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
});
wow.init();

