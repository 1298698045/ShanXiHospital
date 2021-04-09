$(function(){
    let name = getUrlParam("name");
    $('#defaultVal').html(name);
    $('.tabs .tab p').removeClass('active');
    $('.tabs .tab p[title="'+name+'"]').addClass('active');
    var index = $('.tabs .tab p[title="'+name+'"]').parent().index();
    $('.content_wrap').hide().eq(index).show()
    function getUrlParam(key) {
        // 获取参数
        var url = window.location.search;
        // 正则筛选地址栏
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        // 匹配目标参数
        var result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }

    $('.tabs .tab').click(function(){
        $('.tabs .tab').children().removeClass('active');
        $(this).children().addClass('active');
        let value = $(this).children().html();
        $('#defaultVal').html(value);
        $('.content_wrap').hide();
        let index = $(this).index();
        $('.content_wrap').eq(index).show();
    })
    $('#news .box').click(function(){
        window.location.href = '../journalism/detail.html?index='+6;
    })
    $('#news .box').hover(function () {
        $('#news .box').removeClass('active');
        $('#news .box .desc_wrap').children('.title').removeClass('active');
        $(this).addClass('active');
        $(this).children('.desc_wrap').children('.title').addClass('active');
    },function(){
        $(this).addClass('active');
    });
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