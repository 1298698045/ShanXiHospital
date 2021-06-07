"use strict";
var $;
$(function () {
    // $('.lis_p').click(function () { 
    //     $('.lis_p').removeClass('active')
    //     $(this).addClass('active');
    //     $(this).parents('.content').removeClass('active');
    // })
    // module
    $('.module .box').click(function(){
        let idx = $(this).index();
        let val = '';
        if(idx==0){
            val = '出诊信息'
            window.location.href = '/page/visitingNews/index.html?index=1&name='+val
        }else if(idx==1){
            val = '就医须知'
            window.location.href = '/page/patient/index.html?index=1&name='+val
        }else if(idx==2){
            val = '交通路线'
            window.location.href = '/page/hospitalSurvey/hospitalSurvey.html?index=1&name='+val+'&id='+'d_yygk'
        }else if(idx==3){
            window.location.href = '/page/department/department.html?index=8&id=d_ksdh'+'&childId='+'tszl';
        }
    })
    // 科室导航
    $('#depart .tab').click(function () {
        $('#depart .tab').removeClass('active');
        $(this).addClass('active');
        $('.departList .ulsWrap').hide();
        $('.departList .ulsWrap').eq($(this).index()).show();
    });
    // 科室导航-查看更多
    $('#depart .more').click(function(){
        window.location.href = '/page/department/department.html?index=3'
    })
    // 新闻
    $('#newsOne .back').hover(function(){
        $('#newsOne .back').removeClass('active');
        $(this).addClass('active');
        $('.News .left_box .cont').hide();
        $('.News .left_box .cont').eq($(this).index()).show()
    },function(){
        $(this).addClass('active');
    })
    // 信息中心
    $('#newsTwo .back').hover(function(){
        $('#newsTwo .back').removeClass('active');
        $(this).addClass('active');
        $('.right_box .cont').hide();
        $('.right_box .cont').eq($(this).index()).show();
    },function(){
        $(this).addClass('active');
    })
    $('.right_box .cont .box').click(function(){
      let idx =  $(this).parent('.cont').attr('idx');
      if(idx==0){
        let val = encodeURI('招标公告');
        window.location.href = '/page/notice/index.html?index=7&name='+val+'&id='+'d_tzgg';
      }else if(idx==1){
        let val = encodeURI('招聘信息')
        window.location.href = '/page/notice/index.html?index=9&name='+val+'&id='+'d_tzgg';
      }else if(idx==2){
        let val = encodeURI('医讯')
        window.location.href = '/page/notice/index.html?index=7&name='+val+'&id='+'d_tzgg';
      }
    })
    // 新闻tab跳转
    $('#newsOne .back').click(function () {
        let val = encodeURI($(this).html());
        window.location.href = '/page/journalism/journalism.html?index=6'+'&name='+val+'&id='+'d_xwzx';
    });
    $('#xwzx').click(function(){
        let val = encodeURI('医院新闻');
        window.location.href = '/page/journalism/journalism.html?index=6'+'&name='+val+'&id='+'d_xwzx';
    })
    // 通知公告
    $('#tzgg').click(function(){
        let val = encodeURI('招标公告');
        window.location.href = '/page/notice/index.html?index=6'+'&name='+val+'&id='+'d_tzgg';
    })
    //通知tab跳转
    $('#newsTwo .tzgg').click(function () {
        let val = encodeURI($(this).html());
        window.location.href = '/page/notice/index.html?index=7&name='+val+'&id='+'d_tzgg';
    });
    $('#newsTwo .rczp').click(function () {
        let val = encodeURI('招聘信息');
        window.location.href = '/page/notice/index.html?index=9&name='+val+'&id='+'d_tzgg';
    });
    $('#newsTwo .zbxx').click(function () {
        let val = encodeURI($(this).html());
        window.location.href = '/page/notice/index.html?index=7&name='+val+'&id='+'d_tzgg';
    });
    // $('#edition .back_url').click(function () {
    //     $('#edition .back_url').removeClass('active');
    //     $(this).addClass('active');
    // })
    // 科室导航
    $('.departList .uls .lis').hover(function () {
        $('.departList .uls .lis').removeClass('active');
        $(this).addClass('active');
        console.log($(this).index())
        if($(this).index()==0){
            $('.img_wrap img').attr('src','/images/depart.png');
        }else {
            $('.img_wrap img').attr('src','/images/back2.png');
        }
    },function(){
        $(this).addClass('active');
    });
    $('.departList .uls .lis').click(function(){
        window.location.href = '/page/department/detail.html?index=3'
    })
    $('.img_wrap').click(function(){
        window.location.href = '/page/department/detail.html?index=3'
    })
    function onMyLoad() {
        var lis = $('.nav ul li');
        for (var i = 0; i < lis.length; i++) {
            var num = i;
            lis[num].onclick = function () {
                // alert(num);
                // $(this).addClass('active').siblings().removeClass('active');
                $(this).children("span").addClass('active').parent().siblings().children("span").removeClass('active');
                $(this).children(".content").addClass('active').parent().siblings().children(".content").removeClass('active');
            };
        }
    }
    // 跳转新闻详情
    $('.News .left_box .row_wrap').click(function(){
        window.location.href = '/page/journalism/detail.html?index='+6
    })
    //    onMyLoad();
});
