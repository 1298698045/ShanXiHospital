var $: any;
$(() => {
    function onMyLoad():void{
        let lis: any = $('.nav ul li');
        for(var i = 0; i < lis.length; i++){
            let num:number = i;
            lis[num].onclick = function(){
                // alert(num);
                $(this).addClass('active').siblings().removeClass('active');
                $(this).children("span").addClass('active').parent().siblings().
                children("span").removeClass('active');
            }
        }
   }
   onMyLoad();
})