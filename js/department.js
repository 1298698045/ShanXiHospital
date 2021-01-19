$(function(){
    $('.tabs .tab').click(function(){
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active')
    })
})