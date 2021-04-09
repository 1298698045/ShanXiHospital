$(function(){
    let name = getUrlParam("name");
    $('#defaultVal').html(name)
    console.log(name,'name')
    $('#swiperId .swiper-slide').removeClass('active');
    $('#swiperId .swiper-slide[title="'+name+'"]').addClass('active');
    var index = $('#swiperId .swiper-slide[title="'+name+'"]').index();
    $('.container .content').hide().eq(index).show()
    console.log($('#swiperId .swiper-slide[title="'+name+'"]'))
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
        $('#defaultVal').html(value);
        console.log(value);
        //if(value=='停诊信息'){}
        console.log()
        $('.container .content').hide()
        $('.container .content').eq($(this).index()).show()
        if($(this).index()==2){
            fun();
        }else if($(this).index()==3){
            funScroll();
        }
    })
    $('#tab_child p').click(function(){
        $('#tab_child p').removeClass('active');
        $(this).addClass('active');
    })
    function fun(){
        //设置滑块的高度 
        //$('.slider').css('height',h1+'px'); 
        //设置y轴的增量 
        var y = 0; 

        //确定每次滚动滚轮右侧滚动条移动的距离
        var ystepnumber = (($('.l_text').height()+40 - $('.left_wrap').height())/55)
        var ysteplength = $('.scrollBar').height()/ystepnumber
        

        //为wrap添加滚轮事件 
        var wrapDiv = document.querySelector('.left_wrap');
        wrapDiv.onmousewheel = function(e){
            e.preventDefault();
            var event1 = event || e 
            if (event.wheelDelta < 0) { 
                //滑动条向下滚动 
                y += ysteplength; 
            }else if (event.wheelDelta > 0) { 
                //滑动条向上滚动 
                y -= ysteplength; 
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
            var scale = y/($('.sliderWrap').height() - $('.slider').height()); 
            // console.log(scale)
            $('.slider').css('top',y+'px')
            $('.l_text').css('top',-scale*(($('.l_text').height()+40) - $('.left_wrap').height())+'px');

            //console.log(y/sliderWrap)
            //console.log(-y/scale)
            //更新滑块的位置 
            //$('.l_text').css('top',-y/scale+'px');
        }
    }

    function funScroll(){
        //设置y轴的增量 
        var y = 0;
        $('#zyzn .article').height(500);
        //确定每次滚动滚轮右侧滚动条移动的距离
        var leftheight = -$('#zyzn .scrollBarTwo').height() + $('#zyzn .article').height();
        var rightheight = $('#zyzn .sliderWrapTwo').height() - $('#zyzn .sliderWrapTwo .sliderTwo').height();
        var ysteplength = (rightheight/leftheight)*50;
        var wrapDiv = document.querySelector('#zyzn .right_wrap');
        wrapDiv.onmousewheel = function(e){
            e.preventDefault();
            var events = event || e;
            if(events.wheelDelta < 0){
                y += ysteplength;
            }else if(events.wheelDelta > 0){
                y -= ysteplength;
            }
            if( y <= 0){
                y = 0;
            }
            if(y >= rightheight){
                //滑块最多滑到最底部 
                y = rightheight
            }
            var scale = y / rightheight;
            $('#zyzn .sliderWrapTwo .sliderTwo').css('top',y+'px')
            $('#zyzn .article').css('top',-scale * leftheight);
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