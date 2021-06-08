$(function(){
    // let str = `
    // <div class="bottomBack">
    //         <div class="top"></div>
    //         <div class="cont">
    //             <div class="minW">
    //                 <div class="box_wrap">
    //                     <div class="item">
    //                         <p class="imgs">
    //                             <img src="../../images/i.png" alt="">
    //                         </p>
    //                         <p class="name">门诊出诊表</p>
    //                     </div>
    //                     <div class="item">
    //                         <p class="imgs">
    //                             <img src="../../images/icon_2.png" alt="">
    //                         </p>
    //                         <p class="name">就医须知</p>
    //                     </div>
    //                     <div class="item">
    //                         <p class="imgs">
    //                             <img src="../../images/icon_3.png" alt="">
    //                         </p>
    //                         <p class="name">医院位置</p>
    //                     </div>
    //                     <div class="item">
    //                         <p class="imgs">
    //                             <img src="../../images/icon.png" alt="">
    //                         </p>
    //                         <p class="name">专科专病</p>
    //                     </div>
    //                     <div class="item">
    //                         <p class="imgs">
    //                             <img src="../../images/icon_5.png" alt="">
    //                         </p>
    //                         <p class="name">健康体检</p>
    //                     </div>
    //                     <div class="item">
    //                         <p class="imgs">
    //                             <img src="../../images/icon_6.png" alt="">
    //                         </p>
    //                         <p class="name">健康科普</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="top"></div>
    //     </div>
    // <div class="footer">
    //     <div class="top">
    //         <div class="box">
    //             <span class="write">友情链接：</span>
    //             <span class="black">“十四五”规划意见建议</span>
    //             <span class="solid">
    //                 |
    //             </span>
    //             <span class="black left">中华人民共和国国家卫生健康委员会</span>  
    //             <span class="solid">
    //                 |
    //             </span>
    //             <span class="black left">      国家中医药管理</span>
    //             <span class="solid">
    //                 |
    //             </span>
    //             <span class="black left">山西省卫生健康委员会</span>
    //             <span class="solid">
    //                 |
    //             </span>
    //             <span class="black left">山西省医院管理中心</span>
    //             <span class="solid">
    //                 |
    //             </span>
    //             <span class="black left">山西省中医管理局</span>
    //             <span class="solid">
    //                 |
    //             </span>
    //             <span class="black left">山西省医药大学</span>
    //             <span class="back left">|</span>
    //         </div>
    //     </div>
    //     <div class="bottom">
    //         <div class="box spacing">
    //             <div class="flex_row">
    //                 <div class="left">
    //                     <p>地&nbsp;&nbsp;址：太原市迎泽区并州西街16号</p>
    //                     <p>邮&nbsp;&nbsp;编：100000</p>
    //                     <p>咨询电话：0351-303009</p>
    //                 </div>
    //                 <div class="right">
    //                     <p>
    //                         版权声明&nbsp;|&nbsp;隐私声明&nbsp;|&nbsp;帮助信息&nbsp;|&nbsp;网站地图&nbsp;|&nbsp;志愿服务
    //                         &nbsp;|&nbsp;联系我们&nbsp;|&nbsp;投诉意见
    //                     </p>
    //                     <p>
    //                         Copyright 山西省中医院 All Rights Reserved. 本站内容仅供参考，不作为诊断及医疗依据
    //                     </p>
    //                     <p>
    //                         晋ICP备12000773号  晋公网安备 14010502050691号  网站标识码：1230000045
    //                     </p>
    //                     <p>
    //                         网站建设：北京凤凰世纪科技有限公司
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    // `
    let str = '<div class="bottomBack">'+
    '            <div class="top"></div>'+
    '            <div class="cont">'+
    '                <div class="minW">'+
    '                    <div class="box_wrap">'+
    '                        <div class="item">'+
    '                            <p class="imgs">'+
    '                                <img src="../../images/i.png" alt="">'+
    '                            </p>'+
    '                            <p class="name">门诊出诊表</p>'+
    '                        </div>'+
    '                        <div class="item">'+
    '                            <p class="imgs">'+
    '                                <img src="../../images/icon_2.png" alt="">'+
    '                            </p>'+
    '                            <p class="name">就医须知</p>'+
    '                        </div>'+
    '                        <div class="item">'+
    '                            <p class="imgs">'+
    '                                <img src="../../images/icon_3.png" alt="">'+
    '                            </p>'+
    '                            <p class="name">医院位置</p>'+
    '                        </div>'+
    '                        <div class="item">'+
    '                            <p class="imgs">'+
    '                                <img src="../../images/icon.png" alt="">'+
    '                            </p>'+
    '                            <p class="name">专科专病</p>'+
    '                        </div>'+
    '                        <div class="item">'+
    '                            <p class="imgs">'+
    '                                <img src="../../images/icon_5.png" alt="">'+
    '                            </p>'+
    '                            <p class="name">健康体检</p>'+
    '                        </div>'+
    '                        <div class="item">'+
    '                            <p class="imgs">'+
    '                                <img src="../../images/icon_6.png" alt="">'+
    '                            </p>'+
    '                            <p class="name">健康时间</p>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="top"></div>'+
    '        </div>'+
    '    <div class="footer">'+
    '        <div class="top">'+
    '            <div class="box">'+
    '<a class="black" href="http://www.satcm.gov.cn/" target="_blank">中医药管理局</a>'+
    '                <span class="solid">'+
    '                    |'+
    '                </span>'+
    '<a class="black" href="http://www.nhc.gov.cn/" target="_blank">中华人民共和国国家卫生健康委员会</a>'+
    '                <span class="solid">'+
    '                    |'+
    '                </span>'+
    '<a class="black" href="http://wjw.shanxi.gov.cn/" target="_blank">山西省卫生健康委员会</a>'+
    '                <span class="solid">'+
    '                    |'+
    '                </span>'+
    '<a class="black" href="http://sxzyy.dayi100.com/" target="_blank">山西省中医院图书馆</a>'+
    '                <span class="solid">'+
    '                    |'+
    '                </span>'+
    '<a class="black" href="http://39.100.209.170:9006/secur/signin.aspx" target="_blank">医院OA系统</a>'+
    '            </div>'+
    '        </div>'+
    '        <div class="bottom">'+
    '            <div class="box spacing">'+
    '                <div class="flex_row">'+
    '                    <div class="left">'+
    '                        <p>地&nbsp;&nbsp;址：太原市迎泽区并州西街16号</p>'+
    '                        <p>邮&nbsp;&nbsp;编：100000</p>'+
    '                        <p>咨询电话：0351-303009</p>'+
    '                    </div>'+
    '                    <div class="right">'+
    '                        <p>'+
    '                            <a href="#">联系我们</a>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;<a href="#">意见信箱</a>'+
    '                        </p>'+
    '                        <p>'+
    '                            Copyright 山西省中医院 All Rights Reserved. 本站内容仅供参考，不作为诊断及医疗依据'+
    '                        </p>'+
    '                        <p>'+
    '                            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=14010602060667">晋公网安备 14010602060667号</a>  <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=14010602060667">备案号：晋ICP备12002475</a>'+
    '                        </p>'+
    '                        <p>'+
    '                            网站建设：北京凤凰世纪科技有限公司'+
    '                        </p>'+
    '                    </div>'+
    '                </div>'+
    '            </div>'+
    '        </div>'+
    '    </div>';
    $('.footer_wrap').html(str);
    $('.minW .box_wrap .item').click(function(){
        console.log($(this).index())
        let idx = $(this).index();
        if(idx == 0) {
            // 门诊出诊表
            let val = encodeURI('出诊查询');
            window.location.href = '/page/visitingNews/index.html?index='+7+'&name='+val+'&slideIdx='+1+'&id='+'d_czdt';
        }else if(idx == 1){
            let val = encodeURI('就医须知');
            window.location.href = '/page/patient/index.html?name='+val+'&id='+'d_hzfw'
        }else if(idx == 2){
            let val = encodeURI('交通路线');
            window.location.href = '/page/hospitalSurvey/hospitalSurvey.html?index='+5+'&name='+val+'&id='+'d_yygk'+'&slideIdx=2';
        }else if(idx == 3){ 
            window.location.href = '/page/department/department.html?id='+'d_ksdh'+'&childId='+'tszl'
        }else if(idx == 4){
            window.location.href = '/page/home/nursing.html?id='+'d_ksdh'
        }else if(idx == 5){
            window.location.href = '/page/chineseMedicine/therapy.html?index=10'+'&id='+'d_zyts'
        }
    })
})