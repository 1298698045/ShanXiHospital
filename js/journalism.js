$(function(){
    $('.tabs .tab').click(function(){
        $('.tabs .tab').children().removeClass('active');
        $(this).children().addClass('active');
        $('.content_wrap').hide();
        let index = $(this).index();
        $('.content_wrap').eq(index).show();
    })
    $('#detail').click(function(){
        window.location.href = '../journalism/detail.html'
    })
})
new Pagination({
    element: '#pages',
    type: 1,
    pageIndex: 1,
    pageSize: 10,
    pageCount: 5,
    total: 100,
    jumper: true,
    singlePageHide: false,
    prevText: '',
    nextText: '',
    disabled: true,
    currentChange: function(index) {
        console.log(index);
    }
});