$(function(){
    $('.tabs .tab').click(function(){
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active')
    })
    $('.boxContent .row').click(function(){
        $(this).next().toggle();
        $(this).toggleClass('active');
    })
    $('.label').click(function(){
        window.location.href = '/page/department/detail.html?index='+3;
    })
})