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
        window.location.href = '/page/department/detail.html?index='+3+'&id='+'d_ksdh';
    })
    $('.detail .label').click(function(){
        window.location.href = '/page/characteristic/detail.html?index='+2+'&id='+'d_ksdh'
    })
    $('.imgList .box').click(function(){
        let idx = $(this).index();
        if(idx==0){
            window.location.href = '/page/home/nursing.html?index=-1';
        }else if(idx==1){
            window.location.href = '/page/hospital/famousDoctor.html?index=-1';
        }else if(idx==2){
            window.location.href = '/page/hospital/victory.html?index=1'+'&id='+'d_fyjs';
        }else if(idx==3){
            window.location.href = '/page/hospital/peace.html?index=1'+'&id='+'d_fyjs';
        }
    })
    let childId = getUrlParam("childId");
    if(childId){
        $("html, body").scrollTop(0).animate({scrollTop: $("#"+childId).offset().top});
    }
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
})