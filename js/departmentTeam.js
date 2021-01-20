$(function(){
    $('.paging .num').click(function(){
        $('.paging .num').removeClass('active');
        $(this).addClass('active');
    })
    $('#pageValue').change(function(e){
        let page = $(this).val();
        $('.paging .num').removeClass('active');
        $('.paging .num').eq(page-1).addClass('active');
    })
})