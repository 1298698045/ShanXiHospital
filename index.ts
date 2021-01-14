var $: any;
$(() => {
    // $('.lis_p').click(function () { 
    //     $('.lis_p').removeClass('active')
    //     $(this).addClass('active');
    //     $(this).parents('.content').removeClass('active');
    // })
    function onMyLoad():void{
        let lis: any = $('.nav ul li');
        for(var i = 0; i < lis.length; i++){
            let num:number = i;
            lis[num].onclick = function(){
                // alert(num);
                // $(this).addClass('active').siblings().removeClass('active');
                $(this).children("span").addClass('active').parent().siblings().children("span").removeClass('active');
                $(this).children(".content").addClass('active').parent().siblings().children(".content").removeClass('active');
            }
        }
   }
   onMyLoad();
})
