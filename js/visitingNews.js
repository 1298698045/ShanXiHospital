$(function(){
    let name = getUrlParam("name");
    $('#defaultVal').html(name)
    console.log(name,'name')
    $('#swiperId .swiper-slide').removeClass('active');
    $('#swiperId .swiper-slide[title="'+name+'"]').addClass('active');
    var index = $('#swiperId .swiper-slide[title="'+name+'"]').index();
    $('.container .content').hide().eq(index).show()
    console.log($('#swiperId .swiper-slide[title="'+name+'"]'))
    let hospitalName = getUrlParam("hospitalName");
    console.log(hospitalName,'hospitalName')
    if(hospitalName=='victory'){
        $('.container .content').eq(0).find('#tab_child p').removeClass('active');
        $('.container .content').find('#tab_child p').eq(2).addClass('active');
        $('.container .content').eq(0).find('.blockWrap').removeClass('active');
        $('.container .content').eq(0).find('.blockWrap').eq(2).addClass('active');
    }else if(hospitalName=='peace'){
        $('.container .content').eq(0).find('#tab_child p').removeClass('active');
        $('.container .content').find('#tab_child p').eq(3).addClass('active');
        $('.container .content').eq(0).find('.blockWrap').removeClass('active');
        $('.container .content').eq(0).find('.blockWrap').eq(3).addClass('active');
    }else if(hospitalName=='total'){
        $('.container .content').eq(0).find('#tab_child p').removeClass('active');
        $('.container .content').find('#tab_child p').eq(1).addClass('active');
        $('.container .content').eq(0).find('.blockWrap').removeClass('active');
        $('.container .content').eq(0).find('.blockWrap').eq(1).addClass('active');
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
    
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 5,
        paginationClickable: true,
        spaceBetween: 30,
        nextButton: '.right_icon',
        prevButton: '.left_icon',
        onSlideChangeEnd: function(swiper){
            if(swiper.isBeginning){
                swiper.prevButton.removeClass('prev_active');
            }else{
                swiper.prevButton.addClass('prev_active');
            }
            if(swiper.isEnd){
                swiper.nextButton.addClass('next_active');
                $('#swiperId').css('transition-duration','0ms')
                $('#swiperId').addClass('swiperId')
                var X = $('#swiperId').css('transform').replace(/[^0-9\-,]/g,'').split(',')[4]-40
                $('#swiperId').css('transform','translate3d('+X+'px,0px,0px)')
                setTimeout(function(){
                    $('#swiperId').removeClass('swiperId')
                },150);
            }else{
                swiper.nextButton.removeClass('next_active');
            }
        }
    });
    let slideIdx = getUrlParam("slideIdx");
    swiper.slideTo(slideIdx, 1000, false);
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
        let idx = $(this).index();
        if(idx==2){
            fun();
        }else if(idx==4){
            // funScroll();
            var scrollLeft = new scrollBar('.left_wrap','.l_text',55,40,'Y');
            scrollLeft.init();
            var scrollRight = new scrollBar('.article','.d-visible',55,40,'Y');
            scrollRight.init();
        }else if(idx==5){
            // window.location.href = '/page/home/nursing.html?index=-1';
        }
    })
    let peaceData = [
        {
            departName:"肿瘤科",
            name:"刘丽坤",
            title:"主任医师、省优秀专家、省名医",
            indications:"肺癌；乳腺癌；结肠直肠癌",
            time:"周5上午"
        },
        {
            departName:"脾胃科",
            name:"冯五金",
            title:"主任医师、享受国贴专家、省名医、省优秀专家",
            indications:"慢性胃炎、慢性结肠炎、 消化不良、溃疡性结肠炎",
            time:"周5上午"
        },
        {
            departName:"脾胃科",
            name:"苏娟萍",
            title:"主任医师、省优秀专家、院名医",
            indications:"慢性胃炎、慢性结肠炎、 消化不良、溃疡性结肠炎",
            time:"周2上午"
        },
        {
            departName:"脾胃科",
            name:"肖芳",
            title:"主任医师",
            indications:"胃肠疾病、萎缩性胃炎、胰腺炎、胆囊炎、胆结石",
            time:"周4上午"
        },
        {
            departName:"脾胃科",
            name:"杨丽萍",
            title:"副主任医师",
            indications:"消化系统疾病、功能性消化不良、慢性萎缩性胃炎",
            time:"周1上午"
        },
        {
            departName:"脾胃科",
            name:"李曾妮",
            title:"医师",
            indications:"功能性胃肠病、慢性胃炎、便秘等消化疾病",
            time:"周1、2、3、4全天，周6上午"
        },


        {
            departName:"肾病一科",
            name:"米彩云",
            title:"主任医师、省优秀专家、省名医",
            indications:"急慢肾炎，肾功衰竭、IgA肾病，肾炎血尿、复发性尿路感染",
            time:"周1上午"
        },
        {
            departName:"肾病一科",
            name:"李智",
            title:"副主任医师",
            indications:"紫癜肾、各种肾脏病、泌尿系感染",
            time:"周2下午"
        },

        {
            departName:"肾病二科",
            name:"宋跃飞",
            title:"主任医师",
            indications:"各种肾脏疾病、前列腺疾病、内科杂病",
            time:"周3上午"
        },

        {
            departName:"妇科",
            name:"吴艳萍",
            title:"主任医师",
            indications:"盆腔炎、月经失调、外阴营养不良",
            time:"周2、3全天，周1、5下午"
        },
        {
            departName:"妇科",
            name:"申宝林",
            title:"主任医师、国家优秀人才   ",
            indications:"不孕症、子宫肌瘤、盆腔炎",
            time:"周1上午"
        },
        {
            departName:"妇科",
            name:"梁冰",
            title:"主任医师",
            indications:"月经病、不孕症、更年期综合症、多囊卵巢综合症等疾病",
            time:"周2、4、6上午"
        },
        {
            departName:"妇科",
            name:"李艳萍",
            title:"副主任医师",
            indications:"功能性子宫出血、子宫肌瘤、不孕症、更年期综合征、外阴白斑等妇科疾病",
            time:"周3上午"
        },
        {
            departName:"妇科",
            name:"宋蓉杰",
            title:"医师",
            indications:"月经不调，外阴营养不良，阴道炎及不孕症等妇科常见疾病",
            time:"周1、2、3、4、5全天，周6上午"
        },

        {
            departName:"肝病科",
            name:"曹月英",
            title:"主任医师、享受国贴专家、省名老中医、省优秀专家 ",
            indications:"各种急慢性肝炎、肝硬化及并发症、肝脏肿瘤",
            time:"周3上午"
        },

        {
            departName:"心病科",
            name:"牛天福",
            title:"主任医师省、优秀专家、省名医",
            indications:"冠心病、高血压病、心律失常",
            time:"周3下午"
        },
        {
            departName:"心病科",
            name:"耿强",
            title:"主任医师 ",
            indications:"冠心病、高血压病、心律失常",
            time:"周5上午"
        },

        {
            departName:"脑病科",
            name:"焦黎明",
            title:"主任医师、省优秀专家、院名医",
            indications:"脑血管疾病、头痛眩晕面瘫、失眠焦虑抑郁",
            time:"周4上午"
        },
        {
            departName:"脑病科",
            name:"杜秀娟",
            title:"主任医师、国家优秀人才、省名医",
            indications:"眩晕、头痛、失眠焦虑、脑血管疾病",
            time:"周2上午"
        },
        {
            departName:"脑病科",
            name:"陈琳",
            title:"主任医师",
            indications:"失眠焦虑、眩晕、头痛、面瘫、脑梗死、脑出血",
            time:"周3上午"
        },

        {
            departName:"眼科",
            name:"王健",
            title:"主任医师",
            indications:"眼表疾病、外眼疾病、眼底疾病",
            time:"周3上午"
        },

        {
            departName:"内科",
            name:"李庭凯",
            title:"主任医师",
            indications:"咳嗽、汗症、调理体质、治未病",
            time:"周2上午"
        },
        {
            departName:"内科",
            name:"胡兰贵",
            title:"主任医师、国家优秀人才、省优秀专家、省 名 医 ",
            indications:"内科疾病、疑难病",
            time:"周2上午，周5全天"
        },
        {
            departName:"内科",
            name:"李聚林",
            title:"主任医师",
            indications:"功能性胃肠病、消化呼吸病、内科疾病",
            time:"周1、3、6上午"
        },
        {
            departName:"内科",
            name:"王福岗",
            title:"主任医师",
            indications:"内科及神经系统疾病、中风、失眠、抽动症、神经内分泌紊乱",
            time:"周3上午，周5下午"
        },
        {
            departName:"内科",
            name:"任光荣",
            title:"主任医师",
            indications:"内科疾病、亚健康状态的中医药干预",
            time:"周3下午"
        },
        {
            departName:"内科",
            name:"原道昱",
            title:"副主任医师",
            indications:"冠心病、高血压等心脑血管，呼吸、消化系统及内科杂病",
            time:"周1下午，周4上午"
        },
        {
            departName:"内科",
            name:"白震宁",
            title:"副主任医师",
            indications:"呼吸系统疾病、消化系统疾病、内科疑难杂病",
            time:"周2下午，周3上午"
        },

        {
            departName:"疼痛科",
            name:"郑世江",
            title:"主任医师",
            indications:"痛风、疱疹神经痛、颈肩腰腿疼痛",
            time:"周2、4上午，周5全天"
        },
        {
            departName:"疼痛科",
            name:"张德雄",
            title:"主任医师",
            indications:"各种疼痛性疾病、呼吸消化系统疾病、内科杂病",
            time:"周2、4全天，周1、3、5上午"
        },

        {
            departName:"皮肤科",
            name:"李凤仙",
            title:"主任医师、省优秀专家、省名医",
            indications:"痤疮、牛皮癣、各种皮肤病",
            time:"周4上午"
        },
        {
            departName:"皮肤科",
            name:"燕陶然",
            title:"主任医师、院名医",
            indications:"银屑病、脱发、痤疮",
            time:"周4下午"
        },
        {
            departName:"皮肤科",
            name:"王泽辉",
            title:"主任医师",
            indications:"各类型脱发、痤疮、荨麻疹",
            time:"周1、3、5全天,周2、4、6上午"
        },
        
        {
            departName:"皮肤科",
            name:"闫旺娟",
            title:"医师",
            indications:"尊麻疹、痤疮、带状疱疹、皮炎等皮肤病",
            time:"周1、2、3.全天,周5、6上午"
        },
        {
            departName:"骨伤科",
            name:"张传稷",
            title:"主任医师",
            indications:"四肢骨折脱位、骨关节炎、颈腰椎间盘突出",
            time:"周3下午,周2上午"
        },
        {
            departName:"骨伤科",
            name:"潘宝祥",
            title:"主任医师",
            indications:"颈腰椎间盘突出、骨质疏松、神经卡压疾病",
            time:"周1上午"
        },
        {
            departName:"骨伤科",
            name:"杜志伟",
            title:"主任医师",
            indications:"四肢骨折脱位、颈腰间盘突出症、老年性骨性关节炎",
            time:"周5下午"
        },
        {
            departName:"骨伤科",
            name:"白根利",
            title:"副主任医师",
            indications:"四肢骨折、颈腰椎管狭窄、髋膝关节骨病",
            time:"周4下午"
        },
        {
            departName:"脊柱外科",
            name:"赵聚峰",
            title:"主任医师",
            indications:"颈椎病及腰椎病、骨质疏松压缩骨折、癌症椎体骨转移",
            time:"周3上午"
        },
        {
            departName:"儿科",
            name:"李兰芳",
            title:"主任医师",
            indications:"小儿多动、秽语抽动症、目眨、小儿脾虚、消化不良、咳嗽",
            time:"周6上午"
        },
        {
            departName:"儿科",
            name:"孟亚静",
            title:"主任医师",
            indications:"小儿上呼吸道感染、小儿腹泻、消化不良、小儿抽动症",
            time:"周2全天,周6上午"
        },
        {
            departName:"儿科",
            name:"刘彤宇",
            title:"主治医师",
            indications:"小儿呼吸消、化道疾病;小儿多动症;遗尿",
            time:"周2、5上午"
        },
        {
            departName:"针灸推拿",
            name:"李建仲",
            title:"主任医师、省优秀专家、省名医",
            indications:"颈肩腰腿痛;头痛眩晕;面瘫耳鸣",
            time:"周2下午"
        },
        {
            departName:"针灸推拿",
            name:"任留江",
            title:"副主任医师",
            indications:"面瘫、各种疼痛、各种疑难杂症",
            time:"周2、4、6上午"
        },
        {
            departName:"针灸推拿",
            name:"赵立胜",
            title:"副主任医师",
            indications:"颈椎病;腰椎间盘突出症;头晕失眠",
            time:"周1、2、3、4、5、6上午"
        },
        {
            departName:"针灸推拿",
            name:"范高峰",
            title:"主治医师",
            indications:"腰椎间盘突出、颈椎病、面瘫",
            time:"周1、2、3、4、5、6上午"
        },
        {
            departName:"针灸推拿",
            name:"赵建伟",
            title:"主治医师",
            indications:"面瘫、偏瘫、颈椎病、腰椎病、各种疼痛、内科病、疑难病",
            time:"周1、3、5全天,周2、4、6上午"
        },
        {
            departName:"社区医师",
            name:"郑建明",
            title:"主治医师",
            indications:"糖尿病、高血压、内科疾病、湿疹、痤疮",
            time:"周2、3、4、5上午"
        },
        {
            departName:"社区医师",
            name:"张春英",
            title:"医师",
            indications:"小儿上呼吸道感染疾病，小儿腹泻，小儿厌食,生长发育",
            time:"周1、2、3、5全天,周4下午"
        }
    ]
    function peaceFun(){
        let str = '';
        for(var i = 0 ; i < peaceData.length; i++){
            str += `
            <tr class="dataRow">
                <td  class="name">${peaceData[i].departName}</td>
                <td>${peaceData[i].name}</td>
                <td>${peaceData[i].title}</td>
                <td>${peaceData[i].indications}</td>
                <td>${peaceData[i].time}</td>
                <td class="operation">
                    <button class="btn">预约</button>
                    <button class="btn msg">在线咨询</button>
                </td>
            </tr>
            `
        }
        $('#tbodyPeace').append(str);
    }
    $('#tab_child p').click(function(){
        $('#tab_child p').removeClass('active');
        $(this).addClass('active');
        $('#visitInfo .blockWrap').hide();
        $('#visitInfo .blockWrap').eq($(this).index()).show();
        let idx = $(this).index();
        if(idx==3){
            peaceFun();
        }
    })
    
    function fun(){
        //设置滑块的高度 
        //$('.slider').css('height',h1+'px'); 
        //设置y轴的增量 
        var y = 0; 

        //确定每次滚动滚轮右侧滚动条移动的距离
        var ystepnumber = (($('.l_text').height()+40 - $('.left_wrap').height())/55) // 滚动次数
        var ysteplength = $('.scrollBar').height()/ystepnumber // 每次滚动的距离

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
    function scrollTwo(idx){
        // 设置y轴的增量
        let y = 0;
        // 确定每次滚动滚轮右侧滚动条移动的距离
        let dContHeight = $('.NoticeBody .right_wrap .rightCont').eq(idx).children('.articleWrap').children('.article').children('.d-visible').height();
        let ystepNumber = (dContHeight - $('.right_wrap').height()) / 30;
        // console.log(ystepNumber,'ysetpNumber')
        let ystepLength =  $('.right_wrap .sliderWrapTwo').height()/ystepNumber;
        // console.log(ystepLength,'ystepLength')
        
        let wrapDiv1 = document.querySelector('.NoticeBody .right_wrap');
        console.log(dContHeight,'dContHeightdContHeightdContHeight')
        wrapDiv1.onmousewheel = function(e){
            if(dContHeight>485){
                e.stopPropagation()
                e.preventDefault();
                var event1 = event || e ;
                if(event1.wheelDelta < 0){
                    y+=ystepLength;
                }else if(event1.wheelDelta > 0){
                    y-=ystepLength;
                }
    
                if(y <= 0){
                    y=0;
                }
                if(y >= $('.sliderWrapTwo').height() - $('.sliderTwo').height()){
                    y = $('.sliderWrapTwo').height() -  $('.sliderTwo').height();
                }
                let scale = y/($('.sliderWrapTwo').height() - $('.sliderTwo').height()); 
                $('.sliderTwo').css('top',y+'px')
                $('.right_wrap .rightCont .article').css('top',-scale*((dContHeight-200) - $('.right_wrap .rightCont').height())+'px');
            }
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

    // 交通路线
    $('#traffic .tabs .tab').click(function(){
        $('#traffic .tabs .tab').removeClass('active');
        $(this).addClass('active');
    })
    // 就医须知
    $('#jyxz_id .row_back').click(function(){
        // 重置滚动条
        $('.sliderTwo').css('top',0+'px')
        $('.right_wrap .rightCont .article').css('top',0+'px');
        $('#jyxz_id .row_back').removeClass('active');
        $('#jyxz_id .row_back span').removeClass('active');
        $(this).addClass('active');
        $(this).children('span').addClass('active');
        $('#jyxz_id .rightCont').hide();
        $('#jyxz_id .rightCont').eq($(this).index()).show();
        // if($(this).index()==1){
            // scrollTwo($(this).index());
        // }
        let idx = $(this).index();
        if(idx==1){
            var scrollRightTwo = new scrollBar('.articleTwo','.d-visible_two',55,40,'Y');
            scrollRightTwo.init();
        }
    })
    $('#zyzn .row_back').click(function(){
        $('#zyzn .row_back').removeClass('active');
        $('#zyzn .row_back span').removeClass('active');
        $(this).addClass('active');
        $(this).children('span').addClass('active');
        $('#zyzn .rightCont').hide();
        $('#zyzn .rightCont').removeClass('active');
        $('#zyzn .rightCont').eq($(this).index()).show();
        $('#zyzn .rightCont').eq($(this).index()).addClass('active');
    })
    // 医保指南
    $('#ybzn_tab_child p').click(function(){
        $('#ybzn_tab_child p').removeClass('active');
        $(this).addClass('active');
        $('#ybzn_id .insurance').hide();
        $('#ybzn_id .insurance').eq($(this).index()).show();
    })
})