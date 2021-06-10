$(function(){
    let name = getUrlParam("name");
    $('#defaultVal').html(name)
    console.log(name,'name')
    $('#swiperId .swiper-slide').removeClass('active');
    $('#swiperId .swiper-slide[title="'+name+'"]').addClass('active');
    var index = $('#swiperId .swiper-slide[title="'+name+'"]').index();
    $('.container .content').hide().eq(index).show()
    let listId = getUrlParam('listId');
    // let childlist = $('.container .content').hide().eq(index).find('.left_wrap .row_back');
    if(listId!=''&&listId){
       let idx = $('#'+listId).index();
       $('.container .content').find('.left_wrap .row_back').removeClass('active').eq(idx).addClass('active');
       $('.container .content').find('.left_wrap .row_back span').removeClass('active');
       $('.container .content').find('.right_wrap .rightCont').removeClass('active').eq(idx).addClass('active');
    }
    // for(let i = 0; i < childlist.length; i++){
    //     let id = childlist.eq(i).attr('id');
    //     if(id == listId){
    //         $('.container .content').hide().eq(index).show().find('.left_wrap .row_back').removeClass('active');
    //         $('.container .content').hide().eq(index).show().find('.left_wrap .row_back span').removeClass('active');
    //         $('.container .content').hide().eq(index).show().find('.left_wrap .row_back').eq(i).addClass('active');
    //         $('.container .content').hide().eq(index).show().find('.right_wrap .rightCont').removeClass('active');
    //         $('.container .content').hide().eq(index).show().find('.right_wrap .rightCont').eq(i).addClass('active');
    //     }
    // }
    // console.log($('#swiperId .swiper-slide[title="'+name+'"]'))
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
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.right_icon',
        prevButton: '.left_icon',
        onSlideChangeEnd: function(swiper){
            if(swiper.isBeginning){
                swiper.prevButton.removeClass('prev_active');
            }else{
                swiper.prevButton.addClass('prev_active');
            }
            if(swiper.isEnd){
                swiper.nextButton.addClass('next_active');
            }else{
                swiper.nextButton.removeClass('next_active');
            }
        }
    });
    let slideIdx = getUrlParam("slideIdx");
    swiper.slideTo(slideIdx, 1000, false);
    $('.swiper-wrapper .swiper-slide').click(function(){
        $('.swiper-wrapper .swiper-slide').removeClass('active');
        $(this).addClass('active');
        let value = $(this).html();
        $('#defaultVal').html(value);
        console.log(value);
        //if(value=='停诊信息'){}
        console.log()
        $('.container .content').hide()
        $('.container .content').eq($(this).index()).show()
        let idx = $(this).index();
        // if(idx==2){
        //     fun();
        // }else if(idx==3){
        //     funScroll();
        // }else if(idx==5){
        //     window.location.href = '/page/home/nursing.html?index=-1';
        // }
        if(idx==1){
            var scrollLeftTwo = new scrollBar('.left_wrap_two','.l_text_tow',55,40,'Y');
            scrollLeftTwo.init();
            var scrollRightThree = new scrollBar('.articleThree','.d-visible_three',55,40,'Y');
            scrollRightThree.init();
        }

    })
    var scrollLeft = new scrollBar('.left_wrap','.l_text',55,40,'Y');
    scrollLeft.init();
    var scrollRight = new scrollBar('.article','.d-visible',55,40,'Y');
    scrollRight.init();
    $('#tab_child p').click(function(){
        $('#tab_child p').removeClass('active');
        $(this).addClass('active');
        $('#visitInfo .blockWrap').hide();
        $('#visitInfo .blockWrap').eq($(this).index()).show();
    })
    new Pagination({
        element: '#downPages',
        type: 1,
        pageIndex: 1,
        pageSize: 10,
        pageCount: 7,
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
    // 交通路线
    $('#traffic .tabs .tab').click(function(){
        $('#traffic .tabs .tab').removeClass('active');
        $(this).addClass('active');
    })
    // 就医须知
    $('#jyxz_id .row_back').click(function(){
        // 重置滚动条
        $('.sliderTwo').css('top',0+'px')
        $('.right_wrap .rightCont .article').css('top',0+'px');
        $('#jyxz_id .row_back').removeClass('active');
        $('#jyxz_id .row_back span').removeClass('active');
        $(this).addClass('active');
        $(this).children('span').addClass('active');
        $('#jyxz_id .rightCont').hide();
        $('#jyxz_id .rightCont').eq($(this).index()).show();
        // if($(this).index()==1){
            // scrollTwo($(this).index());
        // }
        let idx = $(this).index();
        if(idx==1){
            var scrollRightTwo = new scrollBar('.articleTwo','.d-visible_two',55,40,'Y');
            scrollRightTwo.init();
        }
    })
    $('#zyzn .row_back').click(function(){
        $('#zyzn .row_back').removeClass('active');
        $('#zyzn .row_back span').removeClass('active');
        $(this).addClass('active');
        $(this).children('span').addClass('active');
        $('#zyzn .rightCont').hide();
        $('#zyzn .rightCont').removeClass('active');
        $('#zyzn .rightCont').eq($(this).index()).show();
        $('#zyzn .rightCont').eq($(this).index()).addClass('active');
        let idx = $(this).index();
        if(idx==1){
            var scrollRightFour = new scrollBar('.articleFour','.d-visible_four',55,40,'Y');
            scrollRightFour.init();
        }else if(idx==2){
            var scrollRightFive = new scrollBar('.articleFive','.d-visible_five',55,40,'Y');
            scrollRightFive.init();
        }
    })
    // 医保指南
    $('#ybzn_tab_child p').click(function(){
        $('#ybzn_tab_child p').removeClass('active');
        $(this).addClass('active');
        $('#ybzn_id .insurance').hide();
        $('#ybzn_id .insurance').eq($(this).index()).show();
    })
})