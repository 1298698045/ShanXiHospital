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
    $('.detail .label').click(function(){
        window.location.href = '/page/characteristic/detail.html?index='+2+'&id='+'d_ksdh'
    })
})