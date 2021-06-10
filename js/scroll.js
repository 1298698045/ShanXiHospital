
function scrollBar(scrollid,textclass,step,margin,type){
    var self = this
    this.scrollid = scrollid
    this.dom = $(scrollid)
    this.textclass = this.dom.find(textclass)
    console.log(this.dom,this.textclass,'textclass')
    this.init = function(){
        this.createddom()
        this.addstyle()
        this.sethw()
        if(type=='X'){
            this.scrollX()
            this.dragX()
        }else if(type=='Y'){
            this.scrollY()
            this.dragY()
        }        
    }
    this.remove = function(){
        if(type=='Y'){
            this.dom.find('.YscrollBar').remove();
        }else if(type=='X'){
            this.dom.find('.XscrollBar').remove();
        } 
    }
    
    this.createddom = function(){
        if(type=='Y'){
            this.dom.find('.YscrollBar').remove()
            this.dom.append(`<div class="YscrollBar">
                <div class="YsliderWrap">
                    <div class="slider">
                    </div>
                </div>
            </div>`)
        }else if(type=='X'){
            this.dom.find('.XscrollBar').remove()
        this.dom.append(`<div class="XscrollBar">
            <div class="XsliderWrap">
                <div class="slider">
                </div>
            </div>
        </div>`)
        }  
        

    }
    this.addstyle = function(){
         this.dom.css({
             overflow: 'hidden',
             position: 'relative'
         })
        this.textclass.css({
            overflow: 'hidden',
            position: 'absolute'
        })
    }
    this.sethw = function(){
        if(type=='Y'){
            this.dom.find('.YscrollBar').height(this.dom.height()-margin)
            this.dom.find('.YsliderWrap').height(this.dom.height()-margin)
        }else if(type=='X'){
            this.dom.find('.XscrollBar').width(this.dom.width())
            this.dom.find('.XsliderWrap').width(this.dom.width())
        }          
    }
    this.scrollY = function(){
        //设置滑块的高度 
        //dom.find('.slider').css('height',h1+'px'); 
        //设置y轴的增量 
        var y = 0; 
        //确定每次滚动滚轮右侧滚动条移动的距离
        var ystepnumber = ((this.textclass.height()+margin - this.dom.height())/step)
        var ysteplength = this.dom.find('.YscrollBar').height()/ystepnumber
        if(ystepnumber>0){
            //为wrap添加滚轮事件 
            var wrapDiv = this.dom[0];
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
                if(y >= self.dom.find('.YsliderWrap').height() - self.dom.find('.slider').height()){ 
                    //滑块最多滑到最底部 
                    y = self.dom.find('.YsliderWrap').height() - self.dom.find('.slider').height(); 
                } 
                var scale = y/(self.dom.find('.YsliderWrap').height() - self.dom.find('.slider').height()); 
                // console.log(scale)
                self.dom.find('.slider').css('top',y+'px')
                self.textclass.css('top',-scale*((self.textclass.height()+margin) - self.dom.height())+'px');
            }
        }
    }
    this.dragY = function(){
        console.log(this.dom.height(),this.textclass.height())
        if(this.dom.height()<this.textclass.height()){
            this.dom.find('.slider').mousedown(function(e){
                var pageX1 = e.pageY - $(this)[0].offsetTop;
                $(document).mousemove(function(e){
                    var pageX2 = e.pageY - pageX1
                    if(pageX2<0){
                        pageX2 = 0
                    }
                    var maxtop = self.dom.height()-margin-27
                    if(pageX2>maxtop){
                        pageX2 = maxtop
                    }
                    self.dom.find('.slider').css({
                        'top':pageX2+'px'
                    });
                    var step =  pageX2/maxtop
                    var length =  (self.textclass.height()-self.dom.height())*step
                    self.textclass.css('top',-length+'px')
                    e.preventDefault()
                    e.returnValue = false
                    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
                    return false
                }).mouseup(function(){
                    $(this).unbind('mousemove')
                })
            })
        }
    }
    this.scrollX = function(){
        var y = 0; 
        var ystepnumber = ((this.textclass.width()+margin - this.dom.width())/step)
        var ysteplength = this.dom.find('.XscrollBar').width()/ystepnumber
        if(ystepnumber>0){
            var wrapDiv = this.dom[0];
            wrapDiv.onmousewheel = function(e){
                e.preventDefault();
                var event1 = event || e 
                if (event.wheelDelta < 0) { 
                    y += ysteplength; 
                }else if (event.wheelDelta > 0) { 
                    y -= ysteplength; 
                } 
                if (y <= 0) {
                    y = 0; 
                } 
                if(y >= self.dom.find('.XsliderWrap').width() - self.dom.find('.slider').width()){ 
                    y = self.dom.find('.XsliderWrap').width() - self.dom.find('.slider').width(); 
                }
                console.log(y)
                var scale = y/(self.dom.find('.XsliderWrap').width() - self.dom.find('.slider').width());
                self.dom.find('.slider').css('left',y+'px')
                self.textclass.css('left',-scale*((self.textclass.width()+margin) - self.dom.width())+'px');
            }
        }
    }
    this.dragX = function(){
        if(this.dom.width()<this.textclass.width()){
            this.dom.find('.slider').mousedown(function(e){
                var pageX1 = e.pageX - $(this)[0].offsetLeft;
                $(document).mousemove(function(e){
                    var pageX2 = e.pageX - pageX1
                    if(pageX2<0){
                        pageX2 = 0
                    }
                    var maxleft = self.dom.width()-margin-27
                    if(pageX2>maxleft){
                        pageX2 = maxtop
                    }
                    self.dom.find('.slider').css({
                        'left':pageX2+'px'
                    });
                    var step =  pageX2/maxleft
                    var length =  (self.textclass.width()-self.dom.width())*step
                    self.textclass.css('left',-length+'px')
                    e.preventDefault()
                    e.returnValue = false
                    e.preventDefault ? e.preventDefault() : (e.returnValue = false)
                    return false
                }).mouseup(function(){
                    $(this).unbind('mousemove')
                })
            })
        }
    }
}
$('body').append(`<style>
.YscrollBar{margin:20px 20px 0 0}
.YscrollBar{width:10px;}
.YsliderWrap{height:500px;width:10px;background:url(/images/sliderWrap.png) no-repeat;position:absolute;right:20px;top:30px;background-size: 100% 100%;}
.YscrollBar .YsliderWrap .slider{width:27px;height:26px;background:url(/images/slider.png) no-repeat;position:absolute;top:0;left:-9px;cursor:pointer}
.XscrollBar{height:50px;width:500px;position: relative;margin-top:40px}
.XsliderWrap{width:500px;height:10px;background:url(/images/slider_max.png) no-repeat;position:absolute;}
.XscrollBar .XsliderWrap .slider{width:27px;height:26px;background:url(/images/slider.png) no-repeat;position:absolute;top:-5px;left:0;cursor:pointer}
</style>
`)
