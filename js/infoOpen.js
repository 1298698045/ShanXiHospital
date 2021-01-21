$(function(){
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.right_icon',
        prevButton: '.left_icon'
    });
    $('.swiper-wrapper .swiper-slide').click(function(){
        $('.swiper-wrapper .swiper-slide').children().removeClass('active');
        $(this).children().addClass('active');
    })
})