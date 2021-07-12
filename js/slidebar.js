$('.slidebar-overlay').hide();
$('.slidebar-category-item, .slidebar-nations-item').slideUp();
$('.arrow-up-1, .arrow-up-2').hide();

// Bar
$('.bar-icon').click(function () {
    $('.slidebar-menu').css('margin-right', '0');
    $('.slidebar-overlay').show();
})

// Close
$('.close-icon, .slidebar-overlay').click(function () {
    $('.slidebar-menu').css('margin-right', '-26rem');
    $('.slidebar-overlay, .arrow-up-1, .arrow-up-2').hide();
    $('.arrow-down-1, .arrow-down-2').show();
    $('.slidebar-category-item, .slidebar-nations-item').slideUp();
})

// Toggle menu
$('.slidebar-category').click(function () {
    $('.arrow-down-1, .arrow-up-1').toggle();
    $('.slidebar-category-item').slideToggle();
})

$('.slidebar-nations').click(function () {
    $('.arrow-down-2, .arrow-up-2').toggle();
    $('.slidebar-nations-item').slideToggle();
})