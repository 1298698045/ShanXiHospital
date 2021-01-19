$(function(){
    $('.paging .num').click(function(){
        $('.paging .num').removeClass('active');
        $(this).addClass('active');
    })
    $('#pageValue').change(function(e){
        console.log($(this).val());
    })
    // let val = $('#pageValue').val();
    // console.log(val);
})