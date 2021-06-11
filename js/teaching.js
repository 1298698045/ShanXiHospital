$(function(){
    $('#return').click(function(){
        window.location.href = '/page/teaching/teaching.html?index=8&name=党务公开'+'&id='+'d_djgz';
        $('#defaultVal').html('科研动态')
    })
    let name = getUrlParam("name");
    console.log(name,'name')
    $('#defaultVal').html(name);
    $('.tabs .tab .text').removeClass('active');
    $('.tabs .tab .text[title="'+name+'"]').addClass('active');
    var index = $('.tabs .tab .text[title="'+name+'"]').parent().index();
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
        $('.container .content').hide();
        let index = $(this).index();
        $('.container .content').eq(index).show();
        if(index==2||index==3){
            $('#pages').hide();
        }else {
            $('#pages').show();
        }
    })
    tempFun();
    function tempFun(){
        let str = '';
        for(let i=0; i < 6; i++){
            str += '<li class="block">'+
            '                    <div class="box">'+
            '                        <div class="img">'+
            '                            <img src="/images/teaching1.1.png" alt="">'+
            '                        </div>'+
            '                        <div class="rightCont">'+
            '                            <p class="title d_multiline">我院圆满完成山西省科学技术厅社会发展攻关项目课题验...</p>'+
            '                            <div class="boxTime">'+
            '                                <p class="maxText">'+
            '                                    04'+
            '                                </p>'+
            '                                <p class="time">'+
            '                                    2020-12'+
            '                                </p>'+
            '                            </div>'+
            '                        </div>'+
            '                    </div>'+
            '                </li>';
        }
        $('.dynamic').append(str);
        $('.dynamic .block').click(function(){
            window.location.href = '/page/commen/detail.html?index=-1'
        })
    }
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