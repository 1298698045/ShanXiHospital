$(function(){
    $('.tabs .tab').click(function(){
        $('.tabs .tab').children().removeClass('active');
        $(this).children().addClass('active');
        // $('.content_wrap').hide();
        // let index = $(this).index();
        // $('.content_wrap').eq(index).show();
    })
    tempFun();
    function tempFun(){
        let str = '';
        for(let i=0; i < 6; i++){
            str += `
                <li class="block">
                    <div class="box">
                        <div class="img">
                            <img src="/images/teaching1.1.png" alt="">
                        </div>
                        <div class="rightCont">
                            <p class="title">我院圆满完成山西省科学技术厅社会发展攻关项目课题验...</p>
                            <div class="boxTime">
                                <p class="maxText">
                                    04
                                </p>
                                <p class="time">
                                    2020-12
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            `
        }
        $('.dynamic').append(str);
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