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
    // let slideIdx = getUrlParam("slideIdx");
    // swiper.slideTo(slideIdx, 1000, false);
    // new Pagination({
    //     element: '#downPages',
    //     type: 1,
    //     pageIndex: 1,
    //     pageSize: 10,
    //     pageCount: 7,
    //     total: 100,
    //     jumper: true,
    //     singlePageHide: false,
    //     prevText: '',
    //     nextText: '',
    //     disabled: true,
    //     currentChange: function(index) {
    //         console.log(index);
    //     }
    // });
})