$(function(){
    let header = document.querySelector('.headerWrap');
    let str = '<div class="flex_head_container"> '+
    '            <div class="back_top"></div> '+
    '            <div class="header_box"> '+
    '                <div class="header spacing"> '+
    '                    <div class="header_child"> '+
    '                        <div class="lLogo"> '+
    '                            <img src="/images/newLogo.png" alt=""> '+
    '                        </div> '+
    '                        <div class="rBox"> '+
    '                            <div class="back_icon"  id="edition"> '+
    '                                <p class="back_url active h">患者版</p> '+
    '                                <p class="back_url">员工版</p> '+
    '                            </div> '+
    '                            <div class="search_row"> '+
    '                                <div class="search_wrap"> '+
    '                                    <div class="searchs"> '+
    '                                        <input type="text" class="inp" name="searchVal" placeholder="请输入你要查询的内容"> '+
    '                                        <i class="serach_icon"></i> '+
    '                                    </div> '+
    '                                    <div class="btn_text"> '+
    '                                        搜索 '+
    '                                    </div> '+
    '                                </div> '+
    '                                <div class="hospitalTab"> '+
    '                                    <div class="topTab maxTab">治未病健康体检中心</div> '+
    '                                    <div class="topTab minTab">名医门诊</div> '+
    '                                </div> '+

    '                            </div> '+
    '                        </div> '+
    '                    </div> '+
    '                </div> '+
    '            </div> '+
    '            <div class="nav"> '+
    '                <div class="nav_box spacing"> '+
    '                    <ul class="spacing"> '+
    '                        <li  id="home"> '+
    '                            <span class=""> '+
    '                                首页 '+
    '                            </span> '+
    '                            <div class="content"></div> '+
    '                        </li> '+
    '                        <li id="d_yygk"> '+
    '                            <span> '+
    '                                医院概况 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>医院概况</h3> '+
    '                                            </div>'+
    '                                            <div class="column columnBox hover"> '+
    '                                                <p class="lis_p" slideIdx="0">医院介绍</p> '+
    '                                                <p class="lis_p" slideIdx="0">历史沿革</p> '+
    '                                                <p class="lis_p" slideIdx="0">院容院貌</p> '+
    '                                                <p class="lis_p" slideIdx="0">医院文化</p> '+
    '                                                <p class="lis_p" slideIdx="2">院内导航</p> '+
    '                                                <p class="lis_p" slideIdx="2">交通路线</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex"> '+
    '                                                <h5>医院介绍</h5> '+
    '                                                <div class="paragraph"> '+
    '                                                    山西省中医药研究院成立于1957年，2005年增挂山西省中医院院牌，2007年增挂北京中医药大学附属山西省中医院院牌。全院占地面积8万余平方米，建筑面积5万余平方米。 '+
    '                                                        全院现有在职职工866人，离退休职工367人，享.. '+
    '                                                </div> '+
    '                                                <div class="detail_btn"><a href="/page/hospitalSurvey/hospitalSurvey.html?index=5&name=医院介绍&id=d_yygk">查看详细</a></div> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column columnBox column_flex"> '+
    '                                                <h5>医院文化</h5> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/hospitalSurvey.html?index=5&name=医院文化&id=d_yygk">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/hospitalSurvey.html?index=5&name=医院文化&id=d_yygk">· 北京协和医院伍学焱教授山西省中医院义...</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/hospitalSurvey.html?index=5&name=医院文化&id=d_yygk">· 山西省中医院巡查工作反馈会召开</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/hospitalSurvey.html?index=5&name=医院文化&id=d_yygk">· 山西省中医院首届抖音短视频大赛顺利闭...</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_fyjs"> '+
    '                            <span class=""> '+
    '                                分院介绍 '+
    '                            </span> '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>分院介绍</h3>'+
    '                                            </div> '+
    '                                            <div class="column columnBox hover"> '+
    '                                                <p class="lis_p" name="victory">胜利分院</p> '+
    '                                                <p class="lis_p" name="peace">和平分院</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column border column_flex"> '+
    '                                                <h5>胜利分院</h5> '+
    '                                                <div class="paragraph"> '+
    '                                                    胜利分院隶属山西省中医院，是省、市基本医疗保险、铁路医保定点机构，医疗资源与总院共享，出诊专家均为山西省中医院副高职称以上专家，汇集山西省中医界老专家和学术权威。分院位于胜利街与解放北路十字口东边200米处，一.. '+
    '                                                </div> '+
    '                                                <div class="detail_btn"><a href="/page/hospital/victory.html?id=d_fyjs">查看详细</a></div> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex"> '+
    '                                                <h5>和平分院</h5> '+
    '                                                <div class="paragraph"> '+
    '                                                    山西省中医院和平分院系山西省卫生厅批准设立的中医医疗机构，是山西省中医院的下属机构，位于万柏林区和平南路336号。和平分院开设六年来，门诊量呈快速增长的态势，年门诊量八万余人次，满足了河西百姓看中医，求名中医的需求。'+
    '                                                </div> '+
    '                                                <div class="detail_btn"><a href="/page/hospital/peace.html?id=d_fyjs">查看详细</a></div> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_xwzx"> '+
    '                            <span> '+
    '                                新闻中心 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>新闻中心</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox hover"> '+
    '                                                <p class="lis_p">医院新闻</p> '+
    '                                                <p class="lis_p">媒体报道</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column columnBox column_flex"> '+
    '                                                <h5>医院新闻</h5> '+
    '                                                <p class="newLi"><a href="/page/journalism/detail.html?index=6&name=医院新闻&id=d_xwzx">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                                <p class="newLi"><a href="/page/journalism/detail.html?index=6&name=医院新闻&id=d_xwzx">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                                <p class="newLi"><a href="/page/journalism/detail.html?index=6&name=医院新闻&id=d_xwzx">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                                <p class="newLi"><a href="/page/journalism/detail.html?index=6&name=医院新闻&id=d_xwzx">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex"> '+
    '                                                <h5>媒体报道</h5> '+
    '                                                <p class="newLi"><a href="/page/journalism/detail.html?index=6&name=医院新闻&id=d_xwzx">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                                <p class="newLi"><a href="/page/journalism/detail.html?index=6&name=医院新闻&id=d_xwzx">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                                <p class="newLi"><a href="/page/journalism/detail.html?index=6&name=医院新闻&id=d_xwzx">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                                <p class="newLi"><a href="/page/journalism/detail.html?index=6&name=医院新闻&id=d_xwzx">· 山西省中医院组织观看警示教育片《镜鉴》</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_tzgg"> '+
    '                            <span> '+
    '                                通知公告 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>通知公告</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox  hover"> '+
    '                                                <p class="lis_p" slideIdx="0">招标公告</p> '+
    '                                                <p class="lis_p" slideIdx="1">招聘信息</p>'+
    '                                                <p class="lis_p" slideIdx="0">医讯</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column columnBox border column_flex"> '+
    '                                                <h5>招标公告</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex"> '+
    '                                                <h5>招聘信息</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_czdt"> '+
    '                            <span class=""> '+
    '                                出诊动态 '+
    '                            </span> '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>出诊动态</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox hover"> '+
    '                                                <p class="lis_p" id="cz" slideIdx="0">出诊信息</p>'+
    '                                                <p class="lis_p" slideIdx="2">停诊信息</p> '+
    '                                                <p class="lis_p" slideIdx="0">出诊查询</p>'+
    '                                                <p class="lis_p" slideIdx="3">假期出诊</p>  '+
    '                                                <p class="lis_p" slideIdx="0">挂号须知</p> '+
    '                                                <p class="lis_p" slideIdx="4">预约挂号</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column border columnBox column_flex" id="jzxz"> '+
    '                                                <h5>出诊信息</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 预约挂号须知</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 就诊须知（总院）</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 就医须知（名医门诊）</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 门诊就诊流程</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex" id="yndh"> '+
    '                                                <h5>挂号须知</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 门诊楼层科示意图</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 病房楼楼层分布</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 西楼楼层分布</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 院内导航二维码</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_hzfw"> '+
    '                            <span> '+
    '                                患者服务 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>患者服务</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox hover alignment"> '+
    '                                                <p class="lis_p" id="cz" slideIdx="0">就医须知</p> '+
    '                                                <p class="lis_p" slideIdx="2">住院指南</p> '+
    '                                                <p class="lis_p" slideIdx="0">医保指南</p>'+
    '                                                <p class="lis_p" slideIdx="3">检验报告查询</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column border columnBox column_flex" id="jzxz"> '+
    '                                                <h5>就诊须知</h5> '+
    '                                                <p class="newLi"><a href="/page/patient/index.html?id=d_hzfw&name=就医须知&listId=yyghxz">· 预约挂号须知</a></p> '+
    '                                                <p class="newLi"><a href="/page/patient/index.html?id=d_hzfw&name=就医须知&listId=mzjzlc">· 门诊就诊流程</a></p> '+
    '                                                <p class="newLi"><a href="#">· 就诊须知（总院）</a></p> '+
    '                                                <p class="newLi"><a href="#">· 就医须知（名医门诊</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex" id="yndh"> '+
    '                                                <h5>住院指南</h5> '+
    '                                                <p class="newLi"><a href="#">· 门诊楼层科示意图</a></p> '+
    '                                                <p class="newLi"><a href="#">· 病房楼楼层分布</a></p> '+
    '                                                <p class="newLi"><a href="#">· 西楼楼层分布</a></p> '+
    '                                                <p class="newLi"><a href="#">· 院内导航二维码</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_djgz"> '+
    '                            <span class="" > '+
    '                                党建工作 '+
    '                            </span> '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>党建工作</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox hover"> '+
    '                                                <p class="lis_p" id="cz" slideIdx="0">党务公开</p>'+
    '                                                <p class="lis_p" slideIdx="2">院务公开</p>  '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column border columnBox column_flex" id="jzxz"> '+
    '                                                <h5>党务公开</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 我院圆满完成山西省科学技术厅社会发展...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 我院2项科研成果鉴定达国际领先水平</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 我院肿瘤科承办“中西医结合防治肿瘤学术...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 第二届中西医结合消化年会及脾胃病新进...</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex" id="yndh"> '+
    '                                                <h5>院务公开</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 中医肠疗特色疗法研讨会暨外治疗法培训...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 我院举办规范处方管理专题培训</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 我院开展第四批全国老中医药专家学术经...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 我院“中医肠疗重点研究室”顺利通过年度...</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_ksdh"> '+
    '                            <span> '+
    '                                科室导航 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>科室导航</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox hover"> '+
    '                                                <p class="lis_p" childId="lchs">临床科室</p> '+
    '                                                <p class="lis_p" childId="yjks">医技科室</p> '+
    '                                                <p class="lis_p" childId="tszl">特色医疗</p> '+
    '                                                <p class="lis_p" childId="ysbz">优势病种</p> '+
    '                                                <p class="lis_p" childId="tj">治未病健康体检中心</p> '+
    '                                                <p class="lis_p" childId="mymz">名医门诊</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column border column_flex" style="width: 280px;"> '+
    '                                                <h5>临床科室</h5>'+
    '                                                <div class="rowLi"> '+
    '                                                    <p class="cel_li"><a href="/page/department/detail.html?index=3&id=d_ksdh">· 康复科</a></p> '+
    '                                                    <p class="cel_li"><a href="/page/department/detail.html?index=3&id=d_ksdh">· 康复科</a></p> '+
    '                                                </div> '+
    '                                                <div class="rowLi"> '+
    '                                                    <p class="cel_li"><a href="/page/department/detail.html?index=3&id=d_ksdh">· 康复科</a></p> '+
    '                                                    <p class="cel_li"><a href="/page/department/detail.html?index=3&id=d_ksdh">· 康复科</a></p> '+
    '                                                </div> '+
    '                                                <div class="rowLi"> '+
    '                                                    <p class="cel_li"><a href="/page/department/detail.html?index=3&id=d_ksdh">· 康复科</a></p> '+
    '                                                    <p class="cel_li"><a href="/page/department/detail.html?index=3&id=d_ksdh">· 康复科</a></p> '+
    '                                                </div> '+
    '                                                <div class="rowLi"> '+
    '                                                    <p class="cel_li"><a href="/page/department/detail.html?index=3&id=d_ksdh">· 康复科</a></p> '+
    '                                                    <p class="cel_li"><a href="/page/department/detail.html?index=3&id=d_ksdh">· 康复科</a></p> '+
    '                                                </div> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex"> '+
    '                                                <h5>优势病种</h5> '+
    '                                                <div class="rowLi"> '+
    '                                                    <p class="cel_li"><a href="/page/characteristic/detail.html?index=2&id=d_ksdh">· 肿瘤科中</a></p> '+
    '                                                    <p class="cel_li"><a href="/page/characteristic/detail.html?index=2&id=d_ksdh">· 肿瘤科中</a></p> '+
    '                                                </div> '+
    '                                                <div class="rowLi"> '+
    '                                                    <p class="cel_li"><a href="/page/characteristic/detail.html?index=2&id=d_ksdh">· 肿瘤科中</a></p> '+
    '                                                    <p class="cel_li"><a href="/page/characteristic/detail.html?index=2&id=d_ksdh">· 肿瘤科中</a></p> '+
    '                                                </div> '+
    '                                                <div class="rowLi"> '+
    '                                                    <p class="cel_li"><a href="/page/characteristic/detail.html?index=2&id=d_ksdh">· 肿瘤科中</a></p> '+
    '                                                    <p class="cel_li"><a href="/page/characteristic/detail.html?index=2&id=d_ksdh">· 肿瘤科中</a></p> '+
    '                                                </div> '+
    '                                                <div class="rowLi"> '+
    '                                                    <p class="cel_li"><a href="/page/characteristic/detail.html?index=2&id=d_ksdh">· 肿瘤科中</a></p> '+
    '                                                    <p class="cel_li"><a href="/page/characteristic/detail.html?index=2&id=d_ksdh">· 肿瘤科中</a></p> '+
    '                                                </div> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_zjjs"> '+
    '                            <span> '+
    '                                专家介绍 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_yjsjy"> '+
    '                            <span> '+
    '                                研究生教育 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>研究生教育</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox hover alignment"> '+
    '                                                <p class="lis_p">招生与就业</p>  '+
    '                                                <p class="lis_p">学位与培养</p> '+
    '                                                <p class="lis_p">导师团队</p> '+
    '                                                <p class="lis_p">导师工作</p> '+
    '                                                <p class="lis_p">学生工作</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column columnBox border column_flex"> '+
    '                                                <h5>招生与就业</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院2020年高层次人才引进专项招...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院2020年高层次人才引进专项招...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院2020年高层次人才引进专项招...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院2020年高层次人才引进专项招...</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column columnBox column_flex"> '+
    '                                                <h5>学位与培养</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院2020年高层次人才引进专项招...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院2020年高层次人才引进专项招...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院2020年高层次人才引进专项招...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院2020年高层次人才引进专项招...</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_zyts"> '+
    '                            <span> '+
    '                                中医特色 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>中医特色</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox hover alignment"> '+
    '                                                <p class="lis_p" zyy=\/\/ zyy\/\/ ><a href="/page/chineseMedicine/index.html?index=8&id=d_zyts">中医药博物馆</a></p> '+
    '                                                <p class="lis_p" zyy=\/\/ zyy\/\/ ><a href="/page/chineseMedicine/displayBlock.html?index=10&id=d_zyts">陈列展示</a></p> '+
    '                                                <p class="lis_p" zyy=\/\/ zyy\/\/ ><a href="/page/chineseMedicine/video.html?index=10&id=d_zyts">特色诊疗视频</a></p> '+
    '                                                <p class="lis_p"><a href="/page/chineseMedicine/therapy.html?index=10&id=d_zyts">健康时间</a></p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column border columnBox column_flex"> '+
    '                                                <h5>特色诊疗视频</h5> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/videoDetail.html?id=d_zyts">· 拔火罐疗法</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/videoDetail.html?id=d_zyts">· 拔火罐疗法</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/videoDetail.html?id=d_zyts">· 拔火罐疗法</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/videoDetail.html?id=d_zyts">· 拔火罐疗法</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex"> '+
    '                                                <h5>健康时间</h5> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/videoDetail.html?id=d_zyts">· 拔火罐疗法</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/videoDetail.html?id=d_zyts">· 拔火罐疗法</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/videoDetail.html?id=d_zyts">· 拔火罐疗法</a></p> '+
    '                                                <p class="newLi"><a href="/page/hospitalSurvey/videoDetail.html?id=d_zyts">· 拔火罐疗法</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                        <li id="d_GCP"> '+
    '                            <span> '+
    '                                GCP中心 '+
    '                            </span>       '+
    '                            <div class="content"> '+
    '                                <div class="content_child spacing"> '+
    '                                    <div class="row">'+
    '                                        <div class="itemBox">'+
    '                                            <div class="subject"> '+
    '                                                <h3>GCP中心</h3> '+
    '                                            </div> '+
    '                                            <div class="column columnBox hover alignment"> '+
    '                                                <p class="lis_p">GCP中心</p> '+
    '                                                <p class="lis_p">机构</p> '+
    '                                                <p class="lis_p">伦理委员会</p> '+
    '                                                <p class="lis_p">专业科室</p> '+
    '                                            </div>'+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column border columnBox column_flex"> '+
    '                                                <h5>GCP中心</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院国家药物临床试验机构简介</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 山西省中医院药物临床试验机构组织管理...</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 药物临床试验机构新药临床研究流程图</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 《药物临床试验质量管理规范》</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                        <div class="itemBox">'+
    '                                            <div class="column column_flex"> '+
    '                                                <h5>专业科室</h5> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 中医肿瘤专业</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 中医心血管病专业</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 中医消化专业</a></p> '+
    '                                                <p class="newLi"><a href="/page/commen/detail.html?index=-1">· 中医肾病专业</a></p> '+
    '                                            </div> '+
    '                                        </div>'+
    '                                    </div> '+
    '                                </div> '+
    '                            </div> '+
    '                        </li> '+
    '                    </ul> '+
    '                </div> '+
    '            </div> '+
    '        </div> ';
    let pos = '<div class="rightNav">'+
    '            <div class="box">'+
    '                <div class="icon_img">'+
    '                    <img src="../../images/r_icon7.jpg" />'+
    '                </div>'+
    '                <div class="w_text">'+
    '                    <p>预约</p>'+
    '                    <p>挂号</p>'+
    '                </div>'+
    '            </div>'+
    '            <div class="box">'+
    '                <div class="icon_img">'+
    '                    <img src="../../images/r_icon6.jpg" />'+
    '                </div>'+
    '                <div class="w_text">'+
    '                    <p>出诊</p>'+
    '                    <p>信息</p>'+
    '                </div>'+
    '            </div>'+
    '            <div class="box">'+
    '                <div class="icon_img">'+
    '                    <img src="../../images/r_icon5.jpg" />'+
    '                </div>'+
    '                <div class="w_text">'+
    '                    <p>科室</p>'+
    '                    <p>导航</p>'+
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
    '                    <p>报告</p>'+
    '                    <p>检查</p>'+
    '                </div>'+
    '            </div>'+
    '            <div class="box">'+
    '                <div class="icon_img">'+
    '                    <img src="../../images/r_icon2.jpg" />'+
    '                </div>'+
    '                <div class="w_text">'+
    '                    <p>微信</p>'+
    '                </div>'+
    '                <div class="qrCode">'+
    '                    <i></i>'+
    '                    <div class="imgs"></div>'+
    '                </div>'+
    '            </div>'+
    '            <div class="box">'+
    '                <div class="icon_img">'+
    '                    <img src="../../images/r_icon1.jpg" />'+
    '                </div>'+
    '                <div class="w_text">'+
    '                    <p>微博</p>'+
    '                </div>'+
    '                <div class="qrCode">'+
    '                    <i></i>'+
    '                    <div class="imgs"></div>'+
    '                </div>'+
    '            </div>'+
    '        </div>';
    
    $('.headerWrap').html(str);
    $('.posBoxWrap').html(pos);
    $('#edition .back_url').click(function () {
        $('#edition .back_url').removeClass('active');
        $(this).addClass('active');
    })
    $('.hospitalTab .topTab').click(function(){
        let idx = $(this).index();
        if(idx==0){
            window.location.href = '/page/home/nursing.html?id='+'d_ksdh'
        }else {
            window.location.href = '/page/hospital/famousDoctor.html?index=-1'
        }
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
        if($(this).find('.content .content_child').length!=0){
            $('.nav .content').hide()
        }
        $('.nav ul li').children('span').removeClass('active');
        $(this).children('.content').css({
            'height':0+'px'
        }).show()
        $(this).children('span' ).addClass('active');
        // $(this).children('.content').addClass('active');
        let height = $(this).children('.content').children('.content_child').height();
        $(this).children('.content').css({
            'height':height+'px'
        })
    },function(){
        // $(this).children('.content').removeClass('active');
        $(this).children('.content').css({
            'height':0+'px'
        })
        // $(this).children('span' ).addClass('active');
        resetFun();
    })
    resetFun();
    function resetFun(){
        // let index = getQueryVariable("index");
        let id = getQueryVariable("id");
        let index = ''; 
        // console.log(id,'----');
        for(var i = 0 ; i < $('.nav ul li').length; i++){
            let attrId = $('.nav ul li').eq(i).attr('id');
            // console.log(attrId,'---')
            if(id==attrId){
                console.log(i,'hello word')
                index = i;
            }
        }
        $('.nav ul li').children('span').removeClass('active');
        $('.nav ul li').eq(index).children('span').addClass('active');
        // 独立的模块不在任何导航下
        let newIdx = getQueryVariable('index');
        if(newIdx=='-1'){
            $('.nav ul li').children('span').removeClass('active');
        }
    }
    // 独立的模块不在任何导航下
    // let newIdx = getQueryVariable('index');
    // if(newIdx=='-1'){
    //     $('.nav ul li').children('span').removeClass('active');
    // }
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
    $('#department').click(function(){
        window.location.href = '/page/department/department.html?index='+3;
    })
    // 新闻
    $('#d_xwzx').children('span').click(function(){
        $('#d_xwzx .content').css({
            'display':'none'
        })
        let val = encodeURI('医院新闻');
        window.location.href = '/page/journalism/journalism.html?index='+6+'&name='+val+'&id='+'d_xwzx'
    })
    // 通知公告 --信息公开
    $('#d_tzgg').children('span').click(function(){
        $('#d_tzgg .content').css({
            'display':'none'
        })
        let val = encodeURI('招标公告');
        window.location.href = '/page/notice/index.html?index='+7+'&name='+val+'&id='+'d_tzgg';
    })
    $('#expert').click(function(){
        window.location.href = '/page/expert/expert.html?index='+4
    })
    // 医院概况
    $('#d_yygk').children('span').click(function(){
        $('#d_yygk .content').css({
            'display':'none'
        })
        let val = encodeURI('医院介绍');
        window.location.href = '/page/hospitalSurvey/hospitalSurvey.html?index='+5+'&name='+val+'&id='+'d_yygk';
    })
    $('#talentDevelopment').children('span').click(function(){
        $('#talentDevelopment .content').css({
            'display':'none'
        })
        let val = encodeURI('人才招聘');
        window.location.href = '/page/talentDevelopment/index.html?index='+9+'&name='+val;
    })
    // 中医特色
    $('#chineseMedicine').children('span').click(function(){
        window.location.href = '/page/chineseMedicine/index.html?index='+10
    })
    $('#chineseMedicine .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        if($(this).attr('zyy')=='zyy'){
            window.location.href = '/page/chineseMedicine/index.html?index='+10
        }else {
            window.location.href = '/page/chineseMedicine/healthyTime.html?index='+10+'&name='+val
        }
    })
    $('#homePage').click(function(){
        window.location.href = '/index.html?index='+0
    })
    // 患者服务
    $('#d_hzfw .hover .lis_p').click(function(){
        if($(this).attr('tjzx')=='tjzx'){
            window.location.href = '/page/home/nursing.html?index=-1'
        }else{
            let val = encodeURI($(this).html());
            let slideIdx = $(this).attr('slideIdx');
            window.location.href = '/page/patient/index.html?index='+1+'&name='+val+'&slideIdx='+slideIdx+'&id='+'d_hzfw';
        }
    })
    // $('#d_hzfw #jzxz .lis_p').click(function(){
    //     let val = encodeURI('就医须知');
    //     window.location.href = '/page/patient/index.html?index='+1+'&name='+val+'&slideIdx='+0+'&id='+'d_hzfw';
    // })
    // $('#d_hzfw #yndh .lis_p').click(function(){
    //     let val = encodeURI('院内导航');
    //     window.location.href = '/page/patient/index.html?index='+1+'&name='+val+'&slideIdx='+3+'&id='+'d_hzfw';
    // })
    $('#d_hzfw').children('span').click(function(){
        $('#d_hzfw .content').css({
            'display':'none'
        })
        let val = encodeURI('就医须知');
        window.location.href = '/page/patient/index.html?index='+1+'&name='+val+'&id='+'d_hzfw';
    })
    // 出诊动态
    $('#d_czdt').children('span').click(function(){
        $('#d_czdt .content').css({
            'display':'none'
        })
        let val = encodeURI('出诊信息');
        window.location.href = '/page/visitingNews/index.html?index='+1+'&name='+val+'&id='+'d_czdt';
    })
    $('#d_czdt .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        let slideIdx = $(this).attr('slideIdx');
        window.location.href = '/page/visitingNews/index.html?index='+7+'&name='+val+'&slideIdx='+slideIdx+'&id='+'d_czdt';
    })
    // 医院概况
    $('#d_yygk .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        let slideIdx = $(this).attr('slideIdx');
        window.location.href = '/page/hospitalSurvey/hospitalSurvey.html?index='+5+'&name='+val+'&slideIdx='+slideIdx+'&id='+'d_yygk';
    })
    // 通知公告 --信息公开
    $('#d_tzgg .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        let slideIdx = $(this).attr('slideIdx');
        window.location.href = '/page/notice/index.html?index='+7+'&name='+val+'&slideIdx='+slideIdx+'&id='+'d_tzgg';
    })
    // 人才建设
    $('#talentDevelopment .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/talentDevelopment/index.html?index='+9+'&name='+val;
    })
    // 新闻
    $('#d_xwzx .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/journalism/journalism.html?index='+6+'&name='+val+'&id='+'d_xwzx'
    })
    // 党建工作
    $('#d_djgz .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/teaching/teaching.html?index='+8+'&name='+val+'&id='+'d_djgz'
    })
    $('#d_djgz').children('span').click(function(){
        $('#d_djgz .content').css({
            'display':'none'
        })
        let val = encodeURI('党务公开');
        window.location.href = '/page/teaching/teaching.html?index='+8+'&name='+val+'&id='+'d_djgz'
    })
    // 科室导航
    $('#d_ksdh').children('span').click(function(){
        $('#d_ksdh .content').css({
            'display':'none'
        })
        // let val = encodeURI('党务公开');
        window.location.href = '/page/department/department.html?index='+8+'&id='+'d_ksdh'
    })
    $('#d_ksdh .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        let childId = $(this).attr('childId')
        if(childId=='tj'){
            window.location.href = '/page/home/nursing.html?index=-1';
        }else if(childId=='mymz'){
            window.location.href = '/page/hospital/famousDoctor.html?index=-1';
        }else{
            window.location.href = '/page/department/department.html?index='+8+'&name='+val+'&id='+'d_ksdh'+'&childId='+childId
        }
    })
    // 专家介绍
    $('#d_zjjs').children('span').click(function(){
        $('#d_zjjs .content').css({
            'display':'none'
        })
        // let val = encodeURI('党务公开');
        window.location.href = '/page/expert/expert.html?index='+8+'&id='+'d_zjjs'
    })
    // 研究生教育
    $('#d_yjsjy').children('span').click(function(){
        $('#d_zjjs .content').css({
            'display':'none'
        })
        // let val = encodeURI('党务公开');
        window.location.href = '/page/talentDevelopment/postgraduate.html?index='+8+'&id='+'d_yjsjy'
    })
    $('#d_yjsjy .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        let idx = $(this).index();
        if(idx==2)
        window.location.href = '/page/talentDevelopment/tudorTeam.html?id=d_yjsjy';
        else 
        window.location.href = '/page/talentDevelopment/student.html?index='+8+'&name='+val+'&id='+'d_yjsjy'
    })
    // 中医特色
    $('#d_zyts').children('span').click(function(){
        $('#d_zjjs .content').css({
            'display':'none'
        })
        // let val = encodeURI('党务公开');
        window.location.href = '/page/chineseMedicine/index.html?index='+8+'&id='+'d_zyts'
    })
    // 分院介绍
    $('#d_fyjs').children('span').click(function(){
        $('#d_fyjs .content').css({
            'display':'none'
        })
        window.location.href = '/page/hospital/victory.html?id='+'d_fyjs';
    })
    // GCP中心d_GCP
    $('#d_GCP').children('span').click(function(){
        $('#d_GCP .content').css({
            'display':'none'
        })
        let val = encodeURI('GCP中心');
        window.location.href = '/page/gcpView/index.html?name='+val+'&id='+'d_GCP';
    })
    $('#d_GCP .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/gcpView/index.html?index='+8+'&name='+val+'&id='+'d_GCP'
    })
    $('#d_fyjs .hover .lis_p').click(function(){
        // let val = encodeURI($(this).html());
        let val = $(this).attr('name');
        if(val == 'peace'){
            window.location.href = '/page/hospital/peace.html?id='+'d_fyjs';
        }else if(val == 'victory'){
            window.location.href = '/page/hospital/victory.html?id='+'d_fyjs';
        }
    })
    // 右侧固定快捷方式
    $('.rightNav .box').click(function(){
        let idx = $(this).index();
        if(idx == 1){
            let val = encodeURI('出诊信息');
            window.location.href = '/page/visitingNews/index.html?name='+val+'&id='+'d_czdt'
        }else if(idx == 2){
            window.location.href = '/page/department/department.html?name='+''+'&id='+'d_ksdh'
        }else if(idx == 3){
            window.location.href = '/page/home/server.html';
        }else if(idx == 4){
            let val = encodeURI('检验报告查询');
            window.location.href = '/page/patient/index.html?name='+val+'&id='+'d_hzfw'
        }
    })
    // $('.rightNav .box').click(function(){
    //     let idx = $(this).index();
    //     if(idx==0){
    //         window.location.href = '/page/patient/index.html?index=1&name=就医须知&slideIdx=0';
    //     }else if(idx==1){
    //         window.location.href = '/page/patient/index.html?index=1&name=出诊信息&slideIdx=0';
    //     }else if(idx==2){
    //         window.location.href = '/page/department/department.html?index=3';
    //     }else if(idx==3){
    //         window.location.href = '/page/home/server.html?index=-1';
    //     }else if(idx==4){
    //         window.location.href = '/page/patient/index.html?index=1&name=查询服务&slideIdx=4';
    //     }
    // })
    $('.lLogo').click(function(){
        window.location.href = '/index.html?index=0'
    })
    $('.lis_p').hover(function(){
        $('.lis_p').removeClass('active');
        $(this).addClass('active');
    },function(){
        $('.lis_p').removeClass('active');
    })
    $('.btn_text').click(function(){
        let val = $('input[name="searchVal"]').val();
        window.location.href = '/page/search/index.html?searchVal='+val+'&index=-1';
    })
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
