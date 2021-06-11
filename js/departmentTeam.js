$(function(){
    $('.paging .num').click(function(){
        $('.paging .num').removeClass('active');
        $(this).addClass('active');
    })
    $('#pageValue').change(function(e){
        let page = $(this).val();
        $('.paging .num').removeClass('active');
        $('.paging .num').eq(page-1).addClass('active');
    })
    function tempFun(){
        let template = '';
        for(let i = 0; i < 12 ; i++){
            // template += `
            //     <div class="box">
            //         <div class="block">
            //             <div class="hover">
            //                 <div class="box_child">
            //                     <div class="pad">
            //                         <div class="img">
            //                             <img src="../../images/avatar1_1.png" alt="">
            //                         </div>
            //                         <p class="name">王晞星</p>
            //                         <p class="position">肿瘤病专家</p>
            //                     </div>
            //                 </div>
            //                 <div class="box_active_wrap">
            //                     <div class="box_active">
            //                         <div class="descWrap">
            //                             <p class="text">
            //                                 王晞星，主任医师，教授，博/硕士研究生导师，国贴专家，山西名医，全国中医药专家学术经验继承导师，山西省中医院院长，重点专科带头人。
            //                             </p>
            //                             <p class="title">擅长：</p>
            //                             <p class="text">
            //                                 中西医结合治疗肺癌、胃癌、食管癌、结直肠癌、肾癌等；对消化道疾病有独到的治疗方法
            //                             </p>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div class="back_row">
            //                 <div class="cel_o">挂号</div>
            //                 <div class="cel_t">问诊</div>
            //             </div>
            //         </div>
            //     </div>
            // `
            template += '<div class="box">'+
            '                    <div class="block">'+
            '                        <div class="hover">'+
            '                            <div class="box_child">'+
            '                                <div class="pad">'+
            '                                    <div class="img">'+
            '                                        <img src="../../images/avatar1_1.png" alt="">'+
            '                                    </div>'+
            '                                    <p class="name">王晞星</p>'+
            '                                    <p class="position">肿瘤病专家</p>'+
            '                                </div>'+
            '                            </div>'+
            '                            <div class="box_active_wrap">'+
            '                                <div class="box_active">'+
            '                                    <div class="descWrap">'+
            '                                        <p class="text">'+
            '                                            王晞星，主任医师，教授，博/硕士研究生导师，国贴专家，山西名医，全国中医药专家学术经验继承导师，山西省中医院院长，重点专科带头人。'+
            '                                        </p>'+
            '                                        <p class="title">擅长：</p>'+
            '                                        <p class="text ellipsis">'+
            '                                            中西医结合治疗肺癌、胃癌、食管癌、结直肠癌、肾癌等；对消化道疾病有独到的治疗方法1123123213'+
            '                                        </p>'+
            '                                    </div>'+
            '                                </div>'+
            '                            </div>'+
            '                        </div>'+
            '                        <div class="back_row">'+
            '                            <div class="cel_o">挂号</div>'+
            '                            <div class="cel_t">问诊</div>'+
            '                        </div>'+
            '                    </div>'+
            '                </div>';
        }
        return template;
    }
    $('.headPhoto').append(tempFun());
    $('.box').click(function(){
        let hospitalCode = getUrlParam('hospitalCode');
        if(hospitalCode){
            window.location.href = '/page/department/doctorDetail.html?index='+3+'&id='+'d_ksdh'+'&hospitalCode='+hospitalCode
        }else {
            window.location.href = '/page/department/doctorDetail.html?index='+3+'&id='+'d_ksdh'
        }
    })
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
    $('.Breadcrumb .return').click(function(){
        window.location.href = '/page/department/department.html?id='+'d_ksdh'+'&childId='+'ksdh'
    })
    $('.Breadcrumb .depart').click(function(){
        window.location.href = '/page/department/detail.html?id='+'d_ksdh';
    })
    let hospitalCode = getUrlParam('hospitalCode');
    if(hospitalCode=='victory'){
        $('.Breadcrumb .black').eq(3).hide();
        $('.Breadcrumb .black').eq(2).html('<span class="black"><a href="/page/hospital/victory.html?id=d_fyjs">胜利分院<a/> ></span>')
    }else if(hospitalCode=='peace'){
        $('.Breadcrumb .black').eq(3).hide();
        $('.Breadcrumb .black').eq(2).html('<span class="black"><a href="/page/hospital/peace.html?id=d_fyjs">和平分院<a/> ></span>')
    }else if(hospitalCode=='doctor'){
        $('.Breadcrumb .black').eq(3).hide();
        $('.Breadcrumb .black').eq(2).html('<span class="black"><a href="/page/hospital/famousDoctor.html?index=-1">名医门诊<a/> ></span>')
    }else if(hospitalCode=='health'){
        $('.Breadcrumb .black').eq(3).hide();
        $('.Breadcrumb .black').eq(2).html('<span class="black"><a href="/page/home/nursing.html?index=-1">治未病健康体检中心<a/> ></span>')
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