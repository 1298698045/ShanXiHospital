$(function(){
    let header = document.querySelector('.headerWrap')
    // let str = `
    //     <div class="flex_head_container">
    //         <div class="back_top"></div>
    //         <div class="header_box">
    //             <div class="header spacing">
    //                 <div class="header_child">
    //                     <div class="lLogo">
    //                         <img src="../../images/logo1.png" alt="">
    //                     </div>
    //                     <div class="rBox">
    //                         <div class="back_icon"  id="edition">
    //                             <p class="back_url active h">患者版</p>
    //                             <p class="back_url">员工版</p>
    //                             <p class="Avatar">

    //                             </p>
    //                         </div>
    //                         <div class="search_row">
    //                             <div class="hospitalTab">
    //                                 <div class="topTab maxTab">治未病健康体检中心</div>
    //                                 <div class="topTab minTab">名医门诊</div>
    //                                 <div class="topTab minTab">胜利分院</div>
    //                                 <div class="topTab minTab">和平分院</div>
    //                             </div>
    //                             <div class="search_wrap">
    //                                 <div class="searchs">
    //                                     <input type="text" class="inp" placeholder="请输入你要查询的内容">
    //                                     <i class="serach_icon"></i>
    //                                 </div>
    //                                 <div class="btn_text">
    //                                     搜索
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div class="nav">
    //             <div class="nav_box spacing">
    //                 <ul class="spacing">
    //                     <li>
    //                         <span class="" id="home">
    //                             首页
    //                         </span>
    //                         <div class="content"></div>
    //                     </li>
    //                     <li id="patient">
    //                         <span>
    //                             患者服务
    //                         </span>      
    //                         <div class="content">
    //                             <div class="content_child spacing">
    //                                 <div class="row">
    //                                     <div class="column">
    //                                         <h3>患者服务</h3>
    //                                     </div>
    //                                     <div class="column hover">
    //                                         <p class="lis_p" id="cz">出诊信息</p>
    //                                         <p class="lis_p">停诊信息</p>
    //                                         <p class="lis_p">就医须知</p>
    //                                         <p class="lis_p">住院指南</p>
    //                                         <p class="lis_p">医保指南</p>
    //                                         <p class="lis_p">体检中心</p>
    //                                     </div>
    //                                     <div class="column border hover">
    //                                         <p class="lis_p">交通路线</p>
    //                                         <p class="lis_p">院内导航</p>
    //                                         <p class="lis_p">查询服务</p>
    //                                         <p class="lis_p">便民服务</p>
    //                                         <p class="lis_p">常见问题</p>
    //                                     </div>
    //                                     <div class="column border column_flex">
    //                                         <h5>就诊须知</h5>
    //                                         <p class="lis_p">· 预约挂号须知</p>
    //                                         <p class="lis_p width">· 就诊须知（总院）</p>
    //                                         <p class="lis_p width">· 就医须知（名医门诊）</p>
    //                                         <p class="lis_p">· 门诊就诊流程</p>
    //                                     </div>
    //                                     <div class="column column_flex">
    //                                         <h5>院内导航</h5>
    //                                         <p class="lis_p width">· 门诊楼层科示意图</p>
    //                                         <p class="lis_p">· 病房楼楼层分布</p>
    //                                         <p class="lis_p">· 西楼楼层分布</p>
    //                                         <p class="lis_p">· 院内导航二维码</p>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </li>
    //                     <li id="characteristic">
    //                         <span>
    //                             特色诊疗
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li id="department">
    //                         <span>
    //                             科室导航
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li id="expert">
    //                         <span>
    //                             专家介绍
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li id="hostipalSurvey">
    //                         <span>
    //                             医院概况
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li id="journalism">
    //                         <span>
    //                             新闻中心
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li id="infoPublic">
    //                         <span>
    //                             信息公开
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li id="teaching">
    //                         <span>
    //                             科研教学
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li id="talentDevelopment">
    //                         <span>
    //                             人才建设
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li id="chineseMedicine">
    //                         <span>
    //                             中医特色
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                     <li>
    //                         <span>
    //                             GCP中心
    //                         </span>      
    //                         <div class="content">

    //                         </div>
    //                     </li>
    //                 </ul>
    //             </div>
    //         </div>
    //     </div>
    // `
    // let pos = `
    //     <div class="rightNav">
    //         <div class="box">
    //             <div class="icon_img">
    //                 <img src="../../images/r_icon7.jpg" />
    //             </div>
    //             <div class="w_text">
    //                 <p>远程</p>
    //                 <p>医疗</p>
    //             </div>
    //         </div>
    //         <div class="box">
    //             <div class="icon_img">
    //                 <img src="../../images/r_icon6.jpg" />
    //             </div>
    //             <div class="w_text">
    //                 <p>远程</p>
    //                 <p>医疗</p>
    //             </div>
    //         </div>
    //         <div class="box">
    //             <div class="icon_img">
    //                 <img src="../../images/r_icon5.jpg" />
    //             </div>
    //             <div class="w_text">
    //                 <p>远程</p>
    //                 <p>医疗</p>
    //             </div>
    //         </div>
    //         <div class="box">
    //             <div class="icon_img">
    //                 <img src="../../images/r_icon8.jpg" />
    //             </div>
    //             <div class="w_text">
    //                 <p>远程</p>
    //                 <p>医疗</p>
    //             </div>
    //         </div>
    //         <div class="box">
    //             <div class="icon_img">
    //                 <img src="../../images/r_icon9.png" />
    //             </div>
    //             <div class="w_text">
    //                 <p>远程</p>
    //                 <p>医疗</p>
    //             </div>
    //         </div>
    //         <div class="box">
    //             <div class="icon_img">
    //                 <img src="../../images/r_icon3.jpg" />
    //             </div>
    //             <div class="w_text">
    //                 <p>远程</p>
    //                 <p>医疗</p>
    //             </div>
    //         </div>
    //         <div class="box">
    //             <div class="icon_img">
    //                 <img src="../../images/r_icon2.jpg" />
    //             </div>
    //             <div class="w_text">
    //                 <p>远程</p>
    //                 <p>医疗</p>
    //             </div>
    //         </div>
    //         <div class="box">
    //             <div class="icon_img">
    //                 <img src="../../images/r_icon1.jpg" />
    //             </div>
    //             <div class="w_text">
    //                 <p>远程</p>
    //                 <p>医疗</p>
    //             </div>
    //         </div>
    //     </div>
    // `
    let str ;
       str = '<div class="flex_head_container">'+
       '            <div class="back_top"></div>'+
       '            <div class="header_box">'+
       '                <div class="header spacing">'+
       '                    <div class="header_child">'+
       '                        <div class="lLogo">'+
       '                            <img src="../../images/logo1.png" alt="">'+
       '                        </div>'+
       '                        <div class="rBox">'+
       '                            <div class="back_icon"  id="edition">'+
       '                                <p class="back_url active h">患者版</p>'+
       '                                <p class="back_url">员工版</p>'+
       '                                <p class="Avatar">'+
       '                                </p>'+
       '                            </div>'+
       '                            <div class="search_row">'+
       '                                <div class="hospitalTab">'+
       '                                    <div class="topTab maxTab">治未病健康体检中心</div>'+
       '                                    <div class="topTab minTab">名医门诊</div>'+
       '                                    <div class="topTab minTab">胜利分院</div>'+
       '                                    <div class="topTab minTab">和平分院</div>'+
       '                                </div>'+
       '                                <div class="search_wrap">'+
       '                                    <div class="searchs">'+
       '                                        <input type="text" class="inp" placeholder="请输入你要查询的内容">'+
       '                                        <i class="serach_icon"></i>'+
       '                                    </div>'+
       '                                    <div class="btn_text">'+
       '                                        搜索'+
       '                                    </div>'+
       '                                </div>'+
       '                            </div>'+
       '                        </div>'+
       '                    </div>'+
       '                </div>'+
       '            </div>'+
       '            <div class="nav">'+
       '                <div class="nav_box spacing">'+
       '                    <ul class="spacing">'+
       '                        <li>'+
       '                            <span class="" id="home">'+
       '                                首页'+
       '                            </span>'+
       '                            <div class="content"></div>'+
       '                        </li>'+
       '                        <li id="patient">'+
       '                            <span>'+
       '                                患者服务'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                                <div class="content_child spacing">'+
       '                                    <div class="row">'+
       '                                        <div class="column">'+
       '                                            <h3>患者服务</h3>'+
       '                                        </div>'+
       '                                        <div class="column hover">'+
       '                                            <p class="lis_p" id="cz">出诊信息</p>'+
       '                                            <p class="lis_p">停诊信息</p>'+
       '                                            <p class="lis_p">就医须知</p>'+
       '                                            <p class="lis_p">住院指南</p>'+
       '                                            <p class="lis_p">医保指南</p>'+
       '                                            <p class="lis_p">体检中心</p>'+
       '                                        </div>'+
       '                                        <div class="column border hover">'+
       '                                            <p class="lis_p">交通路线</p>'+
       '                                            <p class="lis_p">院内导航</p>'+
       '                                            <p class="lis_p">查询服务</p>'+
       '                                            <p class="lis_p">便民服务</p>'+
       '                                            <p class="lis_p">常见问题</p>'+
       '                                        </div>'+
       '                                        <div class="column border column_flex">'+
       '                                            <h5>就诊须知</h5>'+
       '                                            <p class="lis_p">· 预约挂号须知</p>'+
       '                                            <p class="lis_p width">· 就诊须知（总院）</p>'+
       '                                            <p class="lis_p width">· 就医须知（名医门诊）</p>'+
       '                                            <p class="lis_p">· 门诊就诊流程</p>'+
       '                                        </div>'+
       '                                        <div class="column column_flex">'+
       '                                            <h5>院内导航</h5>'+
       '                                            <p class="lis_p width">· 门诊楼层科示意图</p>'+
       '                                            <p class="lis_p">· 病房楼楼层分布</p>'+
       '                                            <p class="lis_p">· 西楼楼层分布</p>'+
       '                                            <p class="lis_p">· 院内导航二维码</p>'+
       '                                        </div>'+
       '                                    </div>'+
       '                                </div>'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="characteristic">'+
       '                            <span>'+
       '                                特色诊疗'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="department">'+
       '                            <span>'+
       '                                科室导航'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="expert">'+
       '                            <span>'+
       '                                专家介绍'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="hostipalSurvey">'+
       '                            <span>'+
       '                                医院概况'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="journalism">'+
       '                            <span>'+
       '                                新闻中心'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="infoPublic">'+
       '                            <span>'+
       '                                信息公开'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="teaching">'+
       '                            <span>'+
       '                                科研教学'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="talentDevelopment">'+
       '                            <span>'+
       '                                人才建设'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li id="chineseMedicine">'+
       '                            <span>'+
       '                                中医特色'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                        <li>'+
       '                            <span>'+
       '                                GCP中心'+
       '                            </span>      '+
       '                            <div class="content">'+
       '                            </div>'+
       '                        </li>'+
       '                    </ul>'+
       '                </div>'+
       '            </div>'+
       '        </div>';
       let pos ;
       pos = '<div class="rightNav">'+
       '            <div class="box">'+
       '                <div class="icon_img">'+
       '                    <img src="../../images/r_icon7.jpg" />'+
       '                </div>'+
       '                <div class="w_text">'+
       '                    <p>远程</p>'+
       '                    <p>医疗</p>'+
       '                </div>'+
       '            </div>'+
       '            <div class="box">'+
       '                <div class="icon_img">'+
       '                    <img src="../../images/r_icon6.jpg" />'+
       '                </div>'+
       '                <div class="w_text">'+
       '                    <p>远程</p>'+
       '                    <p>医疗</p>'+
       '                </div>'+
       '            </div>'+
       '            <div class="box">'+
       '                <div class="icon_img">'+
       '                    <img src="../../images/r_icon5.jpg" />'+
       '                </div>'+
       '                <div class="w_text">'+
       '                    <p>远程</p>'+
       '                    <p>医疗</p>'+
       '                </div>'+
       '            </div>'+
       '            <div class="box">'+
       '                <div class="icon_img">'+
       '                    <img src="../../images/r_icon8.jpg" />'+
       '                </div>'+
       '                <div class="w_text">'+
       '                    <p>远程</p>'+
       '                    <p>医疗</p>'+
       '                </div>'+
       '            </div>'+
       '            <div class="box">'+
       '                <div class="icon_img">'+
       '                    <img src="../../images/r_icon9.png" />'+
       '                </div>'+
       '                <div class="w_text">'+
       '                    <p>远程</p>'+
       '                    <p>医疗</p>'+
       '                </div>'+
       '            </div>'+
       '            <div class="box">'+
       '                <div class="icon_img">'+
       '                    <img src="../../images/r_icon3.jpg" />'+
       '                </div>'+
       '                <div class="w_text">'+
       '                    <p>远程</p>'+
       '                    <p>医疗</p>'+
       '                </div>'+
       '            </div>'+
       '            <div class="box">'+
       '                <div class="icon_img">'+
       '                    <img src="../../images/r_icon2.jpg" />'+
       '                </div>'+
       '                <div class="w_text">'+
       '                    <p>远程</p>'+
       '                    <p>医疗</p>'+
       '                </div>'+
       '            </div>'+
       '            <div class="box">'+
       '                <div class="icon_img">'+
       '                    <img src="../../images/r_icon1.jpg" />'+
       '                </div>'+
       '                <div class="w_text">'+
       '                    <p>远程</p>'+
       '                    <p>医疗</p>'+
       '                </div>'+
       '            </div>'+
       '        </div>';
    $('.headerWrap').html(str);
    $('.posBoxWrap').html(pos);
    $('#edition .back_url').click(function () {
        $('#edition .back_url').removeClass('active');
        $(this).addClass('active');
    })
    function onMyLoad() {
        var lis = $('.nav ul li');
        for (var i = 0; i < lis.length; i++) {
            var num = i;
            lis[num].onclick = function () {
                $(this).children("span").addClass('active').parent().siblings().children("span").removeClass('active');
                $(this).children(".content").addClass('active').parent().siblings().children(".content").removeClass('active');
            };
        }
    }
    // onMyLoad();
    $('.nav ul li').hover(function(){
        $('.nav ul li').children('span').removeClass('active');
        $(this).children('span' ).addClass('active');
    },function(){
        // $(this).children('span' ).addClass('active');
        resetFun();
    })
    $('#cz').click(function(){
        window.location.href = '../patient/index.html';
    })
    resetFun();
    function resetFun(){
        let index = getQueryVariable("index");
        $('.nav ul li').children('span').removeClass('active');
        $('.nav ul li').eq(index).children('span').addClass('active');
    }

    function getQueryVariable(variable)
    {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i=0;i<vars.length;i++) {
                var pair = vars[i].split("=");
                if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }
    $('#home').click(function(){
        window.location.href = '/index.html?index='+0;
    })
    $('#characteristic').click(function(){
        window.location.href = '/page/characteristic/characteristic.html?index='+2;
    })
    $('#patient').click(function(){
        window.location.href = '/page/patient/index.html?index='+1;
    })
    $('#department').click(function(){
        window.location.href = '/page/department/department.html?index='+3;
    })
    $('#journalism').click(function(){
        window.location.href = '/page/journalism/journalism.html?index='+6
    })
    $('#infoPublic').click(function(){
        window.location.href = '/page/infoOpen/infoOpen.html?index='+7
    })
    $('#expert').click(function(){
        window.location.href = '/page/expert/expert.html?index='+4
    })
    $('#hostipalSurvey').click(function(){
        window.location.href = '/page/hospitalSurvey/hospitalSurvey.html?index='+5
    })
    $('#teaching').click(function(){
        window.location.href = '/page/teaching/teaching.html?index='+8
    })
    $('#talentDevelopment').click(function(){
        window.location.href = '/page/talentDevelopment/index.html?index='+9
    })
    $('#chineseMedicine').click(function(){
        window.location.href = '/page/chineseMedicine/index.html?index='+10
    })
    $('#homePage').click(function(){
        console.log(12123)
        window.location.href = '/index.html?index='+0
    })
})