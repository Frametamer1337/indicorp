$('.mobile-menu').on('click', function(e) {
    e.preventDefault();
    $('.menu-btn').toggleClass('active-menu');
    $('.menu-wrap').toggleClass('active-menu');
    // $('body').toggleClass('hidden')

});