$(function(){
    $('.tabs .tab').click(function(){
        $('.tabs .tab').children().removeClass('active');
        $(this).children().addClass('active');
    })
})