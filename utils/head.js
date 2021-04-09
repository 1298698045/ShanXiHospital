$(function(){
    let header = document.querySelector('.headerWrap')
    let str = `
        <div class="flex_head_container">
            <div class="back_top"></div>
            <div class="header_box">
                <div class="header spacing">
                    <div class="header_child">
                        <div class="lLogo">
                            <img src="../../images/logo1.png" alt="">
                        </div>
                        <div class="rBox">
                            <div class="back_icon"  id="edition">
                                <p class="back_url active h">患者版</p>
                                <p class="back_url">员工版</p>
                                <p class="Avatar">

                                </p>
                            </div>
                            <div class="search_row">
                                <div class="hospitalTab">
                                    <div class="topTab maxTab">治未病健康体检中心</div>
                                    <div class="topTab minTab">名医门诊</div>
                                    <div class="topTab minTab">胜利分院</div>
                                    <div class="topTab minTab">和平分院</div>
                                </div>
                                <div class="search_wrap">
                                    <div class="searchs">
                                        <input type="text" class="inp" placeholder="请输入你要查询的内容">
                                        <i class="serach_icon"></i>
                                    </div>
                                    <div class="btn_text">
                                        搜索
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav">
                <div class="nav_box spacing">
                    <ul class="spacing">
                        <li>
                            <span class="" id="home">
                                首页
                            </span>
                            <div class="content"></div>
                        </li>
                        <li id="patient">
                            <span>
                                患者服务
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>患者服务</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p" id="cz">出诊信息</p>
                                            <p class="lis_p">停诊信息</p>
                                            <p class="lis_p">就医须知</p>
                                            <p class="lis_p">住院指南</p>
                                            <p class="lis_p">医保指南</p>
                                            <p class="lis_p">体检中心</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">交通路线</p>
                                            <p class="lis_p">院内导航</p>
                                            <p class="lis_p">查询服务</p>
                                            <p class="lis_p">便民服务</p>
                                            <p class="lis_p">常见问题</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>就诊须知</h5>
                                            <p class="lis_p">· 预约挂号须知</p>
                                            <p class="lis_p width">· 就诊须知（总院）</p>
                                            <p class="lis_p width">· 就医须知（名医门诊）</p>
                                            <p class="lis_p">· 门诊就诊流程</p>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>院内导航</h5>
                                            <p class="lis_p width">· 门诊楼层科示意图</p>
                                            <p class="lis_p">· 病房楼楼层分布</p>
                                            <p class="lis_p">· 西楼楼层分布</p>
                                            <p class="lis_p">· 院内导航二维码</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="characteristic">
                            <span>
                                特色诊疗
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>特色诊疗</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p">优势病种</p>
                                            <p class="lis_p">特色诊疗</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">重点专科</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>特色医疗</h5>
                                            <p class="lis_p">· 肿瘤科中医特色治疗</p>
                                            <p class="lis_p width">· 心病二科中医特色治疗</p>
                                            <p class="lis_p width">· 心病一科特色疗法</p>
                                            <p class="lis_p">· 脾胃病科特色疗法</p>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>优势病种</h5>
                                            <p class="lis_p width">· 面瘫</p>
                                            <p class="lis_p">· 心血管病</p>
                                            <p class="lis_p">· 糖尿病</p>
                                            <p class="lis_p">· 肝病</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="department">
                            <span>
                                科室导航
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>科室导航</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p">临床科室</p>
                                            <p class="lis_p">医技科室</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">名义门诊</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>临床科室</h5>
                                            <div class="rowLi">
                                                <p class="cel_li">  · 康复科</p>
                                                <p class="cel_li">  · 男科</p>
                                            </div>
                                            <div class="rowLi">
                                                <p class="cel_li">  · 胸科</p>
                                                <p class="cel_li">  · 口腔科</p>
                                            </div>
                                            <div class="rowLi">
                                                <p class="cel_li">  · 脊柱外科</p>
                                                <p class="cel_li">  · 特需科</p>
                                            </div>
                                            <div class="rowLi">
                                                <p class="cel_li">  · 儿科</p>
                                                <p class="cel_li">  · 重症医学科</p>
                                            </div>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>优势病种</h5>
                                            <div class="rowLi">
                                                <p class="cel_li">  · 营养科</p>
                                                <p class="cel_li">  · 药剂科</p>
                                            </div>
                                            <div class="rowLi">
                                                <p class="cel_li">  · 综合检查科</p>
                                                <p class="cel_li">  · 检验科</p>
                                            </div>
                                            <div class="rowLi">
                                                <p class="cel_li">  · 病理科</p>
                                                <p class="cel_li">  · 消毒供应室</p>
                                            </div>
                                            <div class="rowLi">
                                                <p class="cel_li">  · 体检中心</p>
                                                <p class="cel_li">  · 病案统计室</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="expert">
                            <span>
                                专家介绍
                            </span>      
                            <div class="content">

                            </div>
                        </li>
                        <li id="hostipalSurvey">
                            <span>
                                医院概况
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>医院概况</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p">医院简介</p>
                                            <p class="lis_p">医院风貌</p>
                                            <p class="lis_p">大事记</p>
                                            <p class="lis_p">视频中心</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">医院领导</p>
                                            <p class="lis_p">医院文化</p>
                                            <p class="lis_p">历史沿革</p>
                                        </div>
                                        <div class="column hospitalJd">
                                            <div class="l_img"></div>
                                            <div class="r_jd">
                                                <p class="title">
                                                    医院简介
                                                </p>
                                                <p class="desc">
                                                    山西省中医药研究院成立于1957年，2005年增挂山西省中医院院牌，2007年增挂北京中医药大学附属山西省中医院院牌。全院占地面积8万余平方米，建筑面积5万余平方米。
                                                    全院现有在职职工866人，离退休职工367人，享..
                                                </p>
                                                <p class="detail_btn">
                                                    查看详细
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="journalism">
                            <span>
                                新闻中心
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>新闻中心</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p">院内新闻</p>
                                            <p class="lis_p">媒体聚焦</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">医院动态</p>
                                            <p class="lis_p">视频新闻</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>院内新闻</h5>
                                            <p class="lis_p widths">· 山西省中医院组织观看警示教育片《镜鉴》</p>
                                            <p class="lis_p widths">· 北京协和医院伍学焱教授山西省中医院义...</p>
                                            <p class="lis_p widths">· 山西省中医院巡查工作反馈会召开</p>
                                            <p class="lis_p widths">· 山西省中医院首届抖音短视频大赛顺利闭...</p>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>医院动态</h5>
                                            <p class="lis_p widths">· 2020年山西省中医药学会肾病专业委员会...</p>
                                            <p class="lis_p widths">· 冯立忠副主任参加山西省中医院巡查启动会</p>
                                            <p class="lis_p widths">· 谭利国书记携山西省中医院抗疫医师参加...</p>
                                            <p class="lis_p widths">· 精准医疗卫生对口帮扶，助力五寨脱贫攻坚</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="infoPublic">
                            <span>
                                信息公开
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>信息公开</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p">通知公告</p>
                                            <p class="lis_p">人才招聘</p>
                                            <p class="lis_p">院务、党务公开</p>
                                            <p class="lis_p">医院资源</p>
                                            <p class="lis_p">下载专区</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">招标信息</p>
                                            <p class="lis_p">规章制度</p>
                                            <p class="lis_p">用药信息</p>
                                            <p class="lis_p">医保新政</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>通知公告</h5>
                                            <p class="lis_p widths">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</p>
                                            <p class="lis_p widths">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</p>
                                            <p class="lis_p widths">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</p>
                                            <p class="lis_p widths">· 聚焦基层 关注贫困 医院“结对帮扶行动月...</p>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>招标信息</h5>
                                            <p class="lis_p widths">· 进修申请表</p>
                                            <p class="lis_p widths">· 医院自筹经费课题财务科用章审批表</p>
                                            <p class="lis_p widths">· 山西省中医院科研经费使用申请表</p>
                                            <p class="lis_p widths">· 山西省中医院科学研究与技术开发计划项...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="teaching">
                            <span>
                                科研教学
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>科研教学</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p">科研动态</p>
                                            <p class="lis_p">网上书城</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">教学天地</p>
                                            <p class="lis_p">网上商城</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>科研动态</h5>
                                            <p class="lis_p widths">· 我院圆满完成山西省科学技术厅社会发展...</p>
                                            <p class="lis_p widths">· 我院2项科研成果鉴定达国际领先水平</p>
                                            <p class="lis_p widths">· 我院肿瘤科承办“中西医结合防治肿瘤学术...</p>
                                            <p class="lis_p widths">· 第二届中西医结合消化年会及脾胃病新进...</p>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>教学天地</h5>
                                            <p class="lis_p widths">· 中医肠疗特色疗法研讨会暨外治疗法培训...</p>
                                            <p class="lis_p widths">· 我院举办规范处方管理专题培训</p>
                                            <p class="lis_p widths">· 我院开展第四批全国老中医药专家学术经...</p>
                                            <p class="lis_p widths">· 我院“中医肠疗重点研究室”顺利通过年度...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="talentDevelopment">
                            <span>
                                人才建设
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>人才建设</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p">人才招聘</p>
                                            <p class="lis_p">研究生教育</p>
                                            <p class="lis_p">通知公告</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">人才培养</p>
                                            <p class="lis_p">各类表单</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>人才招聘</h5>
                                            <p class="lis_p widths">· 山西省中医院2020年高层次人才引进专项招...</p>
                                            <p class="lis_p widths">· 山西省中医院 关于2020年度公开招聘拟聘人...</p>
                                            <p class="lis_p widths">· 关于2020年度高层次人才引进专项招聘拟聘...</p>
                                            <p class="lis_p widths">· 山西省中医院2020年公开招聘工作人员成绩...</p>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>研究生教育</h5>
                                            <p class="lis_p widths">· 研究生教育概况</p>
                                            <p class="lis_p widths">· 招生与就业</p>
                                            <p class="lis_p widths">· 学位与培养</p>
                                            <p class="lis_p widths">· 导师工作</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li id="chineseMedicine">
                            <span>
                                中医特色
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>中医特色</h3>
                                        </div>
                                        <div class="column hover margin_child">
                                            <p class="lis_p">中医药博物馆</p>
                                            <p class="lis_p">中医药文化宣传</p>
                                        </div>
                                        <div class="column border hover margin_child">
                                            <p class="lis_p">健康时间</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>中医药博物馆</h5>
                                            <p class="lis_p widths">· 山西中医博物馆简介</p>
                                            <p class="lis_p widths">· 山西省中医院 关于2020年度公开招聘拟聘人...</p>
                                            <p class="lis_p widths">· 陈列展示</p>
                                            <p class="lis_p widths">· 专题视频</p>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>健康时间</h5>
                                            <p class="lis_p widths">· 要想小儿安，养好脾胃是关键（宋明锁）</p>
                                            <p class="lis_p widths">· 虚实明辨，调治血压（南晓红）</p>
                                            <p class="lis_p widths">· 通督正脊治腰突（李建仲）</p>
                                            <p class="lis_p widths">· 肾，健康的源泉（ 刘光珍）</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span>
                                GCP中心
                            </span>      
                            <div class="content">
                                <div class="content_child spacing">
                                    <div class="row">
                                        <div class="subject">
                                            <h3>GCP中心</h3>
                                        </div>
                                        <div class="column hover">
                                            <p class="lis_p">  · GCP中心</p>
                                            <p class="lis_p">  · 伦理委员会</p>
                                        </div>
                                        <div class="column border hover">
                                            <p class="lis_p">  · 机构</p>
                                            <p class="lis_p">  · 专业科室</p>
                                        </div>
                                        <div class="column border column_flex">
                                            <h5>GCP中心</h5>
                                            <p class="lis_p widths">· 山西省中医院国家药物临床试验机构简介</p>
                                            <p class="lis_p widths">· 山西省中医院药物临床试验机构组织管理...</p>
                                            <p class="lis_p widths">· 药物临床试验机构新药临床研究流程图</p>
                                            <p class="lis_p widths">· 《药物临床试验质量管理规范》</p>
                                        </div>
                                        <div class="column column_flex">
                                            <h5>专业科室</h5>
                                            <p class="lis_p widths">· 中医肿瘤专业</p>
                                            <p class="lis_p widths">· 中医心血管病专业</p>
                                            <p class="lis_p widths">· 中医消化专业</p>
                                            <p class="lis_p widths">· 中医肾病专业</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `
    let pos = `
        <div class="rightNav">
            <div class="box">
                <div class="icon_img">
                    <img src="../../images/r_icon7.jpg" />
                </div>
                <div class="w_text">
                    <p>远程</p>
                    <p>医疗</p>
                </div>
            </div>
            <div class="box">
                <div class="icon_img">
                    <img src="../../images/r_icon6.jpg" />
                </div>
                <div class="w_text">
                    <p>远程</p>
                    <p>医疗</p>
                </div>
            </div>
            <div class="box">
                <div class="icon_img">
                    <img src="../../images/r_icon5.jpg" />
                </div>
                <div class="w_text">
                    <p>远程</p>
                    <p>医疗</p>
                </div>
            </div>
            <div class="box">
                <div class="icon_img">
                    <img src="../../images/r_icon8.jpg" />
                </div>
                <div class="w_text">
                    <p>远程</p>
                    <p>医疗</p>
                </div>
            </div>
            <div class="box">
                <div class="icon_img">
                    <img src="../../images/r_icon9.png" />
                </div>
                <div class="w_text">
                    <p>远程</p>
                    <p>医疗</p>
                </div>
            </div>
            <div class="box">
                <div class="icon_img">
                    <img src="../../images/r_icon3.jpg" />
                </div>
                <div class="w_text">
                    <p>远程</p>
                    <p>医疗</p>
                </div>
            </div>
            <div class="box">
                <div class="icon_img">
                    <img src="../../images/r_icon2.jpg" />
                </div>
                <div class="w_text">
                    <p>远程</p>
                    <p>医疗</p>
                </div>
            </div>
            <div class="box">
                <div class="icon_img">
                    <img src="../../images/r_icon1.jpg" />
                </div>
                <div class="w_text">
                    <p>远程</p>
                    <p>医疗</p>
                </div>
            </div>
        </div>
    `
    // let str ;
    //    str = '<div class="flex_head_container">'+
    //    '            <div class="back_top"></div>'+
    //    '            <div class="header_box">'+
    //    '                <div class="header spacing">'+
    //    '                    <div class="header_child">'+
    //    '                        <div class="lLogo">'+
    //    '                            <img src="../../images/logo1.png" alt="">'+
    //    '                        </div>'+
    //    '                        <div class="rBox">'+
    //    '                            <div class="back_icon"  id="edition">'+
    //    '                                <p class="back_url active h">患者版</p>'+
    //    '                                <p class="back_url">员工版</p>'+
    //    '                                <p class="Avatar">'+
    //    '                                </p>'+
    //    '                            </div>'+
    //    '                            <div class="search_row">'+
    //    '                                <div class="hospitalTab">'+
    //    '                                    <div class="topTab maxTab">治未病健康体检中心</div>'+
    //    '                                    <div class="topTab minTab">名医门诊</div>'+
    //    '                                    <div class="topTab minTab">胜利分院</div>'+
    //    '                                    <div class="topTab minTab">和平分院</div>'+
    //    '                                </div>'+
    //    '                                <div class="search_wrap">'+
    //    '                                    <div class="searchs">'+
    //    '                                        <input type="text" class="inp" placeholder="请输入你要查询的内容">'+
    //    '                                        <i class="serach_icon"></i>'+
    //    '                                    </div>'+
    //    '                                    <div class="btn_text">'+
    //    '                                        搜索'+
    //    '                                    </div>'+
    //    '                                </div>'+
    //    '                            </div>'+
    //    '                        </div>'+
    //    '                    </div>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '            <div class="nav">'+
    //    '                <div class="nav_box spacing">'+
    //    '                    <ul class="spacing">'+
    //    '                        <li>'+
    //    '                            <span class="" id="home">'+
    //    '                                首页'+
    //    '                            </span>'+
    //    '                            <div class="content"></div>'+
    //    '                        </li>'+
    //    '                        <li id="patient">'+
    //    '                            <span>'+
    //    '                                患者服务'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                                <div class="content_child spacing">'+
    //    '                                    <div class="row">'+
    //    '                                        <div class="column">'+
    //    '                                            <h3>患者服务</h3>'+
    //    '                                        </div>'+
    //    '                                        <div class="column hover">'+
    //    '                                            <p class="lis_p" id="cz">出诊信息</p>'+
    //    '                                            <p class="lis_p">停诊信息</p>'+
    //    '                                            <p class="lis_p">就医须知</p>'+
    //    '                                            <p class="lis_p">住院指南</p>'+
    //    '                                            <p class="lis_p">医保指南</p>'+
    //    '                                            <p class="lis_p">体检中心</p>'+
    //    '                                        </div>'+
    //    '                                        <div class="column border hover">'+
    //    '                                            <p class="lis_p">交通路线</p>'+
    //    '                                            <p class="lis_p">院内导航</p>'+
    //    '                                            <p class="lis_p">查询服务</p>'+
    //    '                                            <p class="lis_p">便民服务</p>'+
    //    '                                            <p class="lis_p">常见问题</p>'+
    //    '                                        </div>'+
    //    '                                        <div class="column border column_flex">'+
    //    '                                            <h5>就诊须知</h5>'+
    //    '                                            <p class="lis_p">· 预约挂号须知</p>'+
    //    '                                            <p class="lis_p width">· 就诊须知（总院）</p>'+
    //    '                                            <p class="lis_p width">· 就医须知（名医门诊）</p>'+
    //    '                                            <p class="lis_p">· 门诊就诊流程</p>'+
    //    '                                        </div>'+
    //    '                                        <div class="column column_flex">'+
    //    '                                            <h5>院内导航</h5>'+
    //    '                                            <p class="lis_p width">· 门诊楼层科示意图</p>'+
    //    '                                            <p class="lis_p">· 病房楼楼层分布</p>'+
    //    '                                            <p class="lis_p">· 西楼楼层分布</p>'+
    //    '                                            <p class="lis_p">· 院内导航二维码</p>'+
    //    '                                        </div>'+
    //    '                                    </div>'+
    //    '                                </div>'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="characteristic">'+
    //    '                            <span>'+
    //    '                                特色诊疗'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="department">'+
    //    '                            <span>'+
    //    '                                科室导航'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="expert">'+
    //    '                            <span>'+
    //    '                                专家介绍'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="hostipalSurvey">'+
    //    '                            <span>'+
    //    '                                医院概况'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="journalism">'+
    //    '                            <span>'+
    //    '                                新闻中心'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="infoPublic">'+
    //    '                            <span>'+
    //    '                                信息公开'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="teaching">'+
    //    '                            <span>'+
    //    '                                科研教学'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="talentDevelopment">'+
    //    '                            <span>'+
    //    '                                人才建设'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li id="chineseMedicine">'+
    //    '                            <span>'+
    //    '                                中医特色'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                        <li>'+
    //    '                            <span>'+
    //    '                                GCP中心'+
    //    '                            </span>      '+
    //    '                            <div class="content">'+
    //    '                            </div>'+
    //    '                        </li>'+
    //    '                    </ul>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '        </div>';
    //    let pos ;
    //    pos = '<div class="rightNav">'+
    //    '            <div class="box">'+
    //    '                <div class="icon_img">'+
    //    '                    <img src="../../images/r_icon7.jpg" />'+
    //    '                </div>'+
    //    '                <div class="w_text">'+
    //    '                    <p>远程</p>'+
    //    '                    <p>医疗</p>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '            <div class="box">'+
    //    '                <div class="icon_img">'+
    //    '                    <img src="../../images/r_icon6.jpg" />'+
    //    '                </div>'+
    //    '                <div class="w_text">'+
    //    '                    <p>远程</p>'+
    //    '                    <p>医疗</p>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '            <div class="box">'+
    //    '                <div class="icon_img">'+
    //    '                    <img src="../../images/r_icon5.jpg" />'+
    //    '                </div>'+
    //    '                <div class="w_text">'+
    //    '                    <p>远程</p>'+
    //    '                    <p>医疗</p>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '            <div class="box">'+
    //    '                <div class="icon_img">'+
    //    '                    <img src="../../images/r_icon8.jpg" />'+
    //    '                </div>'+
    //    '                <div class="w_text">'+
    //    '                    <p>远程</p>'+
    //    '                    <p>医疗</p>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '            <div class="box">'+
    //    '                <div class="icon_img">'+
    //    '                    <img src="../../images/r_icon9.png" />'+
    //    '                </div>'+
    //    '                <div class="w_text">'+
    //    '                    <p>远程</p>'+
    //    '                    <p>医疗</p>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '            <div class="box">'+
    //    '                <div class="icon_img">'+
    //    '                    <img src="../../images/r_icon3.jpg" />'+
    //    '                </div>'+
    //    '                <div class="w_text">'+
    //    '                    <p>远程</p>'+
    //    '                    <p>医疗</p>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '            <div class="box">'+
    //    '                <div class="icon_img">'+
    //    '                    <img src="../../images/r_icon2.jpg" />'+
    //    '                </div>'+
    //    '                <div class="w_text">'+
    //    '                    <p>远程</p>'+
    //    '                    <p>医疗</p>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '            <div class="box">'+
    //    '                <div class="icon_img">'+
    //    '                    <img src="../../images/r_icon1.jpg" />'+
    //    '                </div>'+
    //    '                <div class="w_text">'+
    //    '                    <p>远程</p>'+
    //    '                    <p>医疗</p>'+
    //    '                </div>'+
    //    '            </div>'+
    //    '        </div>';
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
    $('#department').click(function(){
        window.location.href = '/page/department/department.html?index='+3;
    })
    // 新闻
    $('#journalism').children('span').click(function(){
        let val = encodeURI('院内新闻');
        window.location.href = '/page/journalism/journalism.html?index='+6+'&name='+val
    })
    // 信息公开
    $('#infoPublic').children('span').click(function(){
        let val = encodeURI('通知公告');
        window.location.href = '/page/infoOpen/infoOpen.html?index='+7+'&name='+val;
    })
    $('#expert').click(function(){
        window.location.href = '/page/expert/expert.html?index='+4
    })
    // 医院概况
    $('#hostipalSurvey').children('span').click(function(){
        let val = encodeURI('医院简介');
        window.location.href = '/page/hospitalSurvey/hospitalSurvey.html?index='+5+'&name='+val;
    })
    // 科研教学
    $('#teaching').children('span').click(function(){
        let val = encodeURI('科研动态');
        window.location.href = '/page/teaching/teaching.html?index='+8+'&name='+val
    })
    $('#talentDevelopment').children('span').click(function(){
        let val = encodeURI('人才招聘');
        window.location.href = '/page/talentDevelopment/index.html?index='+9+'&name='+val;
    })
    $('#chineseMedicine').click(function(){
        window.location.href = '/page/chineseMedicine/index.html?index='+10
    })
    $('#homePage').click(function(){
        window.location.href = '/index.html?index='+0
    })
    // 患者服务
    $('#patient .hover .lis_p').click(function(){
      let val = encodeURI($(this).html());
      window.location.href = '/page/patient/index.html?index='+1+'&name='+val;
    })
    $('#patient').children('span').click(function(){
        let val = encodeURI('出诊信息');
        window.location.href = '/page/patient/index.html?index='+1+'&name='+val;
    })
    // 医院概况
    $('#hostipalSurvey .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/hospitalSurvey/hospitalSurvey.html?index='+5+'&name='+val;
    })
    // 信息公开
    $('#infoPublic .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/infoOpen/infoOpen.html?index='+7+'&name='+val;
    })
    // 人才建设
    $('#talentDevelopment .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/talentDevelopment/index.html?index='+9+'&name='+val;
    })
    // 新闻
    $('#journalism .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/journalism/journalism.html?index='+6+'&name='+val
    })
    // 科研教学
    $('#teaching .hover .lis_p').click(function(){
        let val = encodeURI($(this).html());
        window.location.href = '/page/teaching/teaching.html?index='+8+'&name='+val
    })
})