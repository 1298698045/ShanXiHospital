// 交通路线
$('#traffic .tabs .tab').click(function(){
    $('#traffic .tabs .tab').removeClass('active');
    $(this).addClass('active');
    let idx = $(this).index();
    $('.trafficContent').hide();
    $('.trafficContent').eq(idx).show();
})
let hospitalName = getUrlParam("hospitalName");
    console.log(hospitalName,'hospitalName')
if(hospitalName=='victory'){
    $('#traffic .tabs .tab').removeClass('active');
    $('#traffic .tabs .tab').eq(1).addClass('active');
    $('.trafficContent').hide();
    $('.trafficContent').eq(1).show();
}else if(hospitalName=='peace'){
    $('#traffic .tabs .tab').removeClass('active');
    $('#traffic .tabs .tab').eq(2).addClass('active');
    $('.trafficContent').hide();
    $('.trafficContent').eq(2).show();
}