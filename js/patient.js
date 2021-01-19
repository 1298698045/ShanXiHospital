$(function(){
    $('.tabs .tab').click(function(){
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');
        let value = $(this).html();
        console.log(value);
        //if(value=='停诊信息'){}
        console.log()
        $('.container .content').hide()
        $('.container .content').eq($(this).index()).show()
    })
    $('#tab_child p').click(function(){
        $('#tab_child p').removeClass('active');
        $(this).addClass('active');
    })
})