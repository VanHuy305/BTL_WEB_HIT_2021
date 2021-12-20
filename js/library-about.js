function setHeightBanner() {
    let hAlbum = $('.left').height();
    $('.modifyHeightImg').height(hAlbum - 10);
}
if ($(window).width() > 767) {
    setHeightBanner();
}
$(window).resize(function() {
    if ($(window).width() > 767) {
        setHeightBanner();
    }
});
$(document).ready(function() {
    if ($(window).width() > 767) {
        setHeightBanner();
    }
});

wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
});
wow.init();