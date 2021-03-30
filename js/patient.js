$(function(){
    $(function () {
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
    })
    $('.swiper-wrapper .swiper-slide').click(function(){
        $('.swiper-wrapper .swiper-slide').removeClass('active');
        $(this).addClass('active');
        let value = $(this).html();
        console.log(value);
        //if(value=='停诊信息'){}
        console.log()
        $('.container .content').hide()
        $('.container .content').eq($(this).index()).show()
        if($(this).index()==2){
            fun();
        }
    })
    $('#tab_child p').click(function(){
        $('#tab_child p').removeClass('active');
        $(this).addClass('active');
    })
    function fun(){
        let contentHeight = $('.l_text').height(); // 左侧内容高度
        var scale = $('.left_wrap').height() / contentHeight;
        //设置滑块的高度 
        var h1 = $('.sliderWrap').height() * scale;
        if (h1 < 26) { 
            h1 = 26; 
        }else if (scale >= 1) { 
            //说明当前内容能过完全显示在可视区域内，不需要滚动条 
            $('.sliderWrap').css('display','none');
        } 
        //设置滑块的高度 
        $('.slider').css('height',h1+'px'); 
        //设置y轴的增量 
        var y = 0; 
        //为wrap添加滚轮事件 
        var wrapDiv = document.querySelector('.left_wrap');
        wrapDiv.onmousewheel = function(e){
            e.preventDefault();
            var event1 = event || e 
            if (event.wheelDelta < 0) { 
                //滑动条向下滚动 
                y += 10; 
            }else if (event.wheelDelta > 0) { 
                //滑动条向上滚动 
                y -= 10; 
            } 
            //y变化时说明在滚动，此时使滚动条发生滚动，以及设置content内容部分滚动 
            //判断极端情况，滑块不能划出屏幕 
            if (y <= 0) { 
                //滑块最多滑到顶部 
                y = 0; 
            } 
            if(y >= $('.sliderWrap').height() - $('.slider').height()){ 
                //滑块最多滑到最底部 
                y = $('.sliderWrap').height() - $('.slider').height(); 
            } 
            //更新滑块的位置 
            $('.slider').css('top',y+'px')
            scale = $('.left_wrap').height() / $('.l_text').height(); 
            $('.l_text').css('top',-y/scale+'px');
        }
    }
    new Pagination({
        element: '#pages',
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
})