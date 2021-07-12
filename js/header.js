let toggleBtn = $('.toggle-theme');
let sunIcon = $('.sun');
let moonIcon = $('.moon');

moonIcon.hide();

toggleBtn.click(function () {
    sunIcon.toggle(200) && moonIcon.toggle(200);
    $('.header').toggleClass('header-light');
    $('.slider').toggleClass('slider-light');
    $('main').toggleClass('main-light');
    $('footer').toggleClass('footer-light');
})