"use strict";
var $;
$(function () {
    // $('.lis_p').click(function () { 
    //     $('.lis_p').removeClass('active')
    //     $(this).addClass('active');
    //     $(this).parents('.content').removeClass('active');
    // })
    $('#depart .tab').click(function () {
        $('#depart .tab').removeClass('active');
        $(this).addClass('active');
    });
    $('#newsOne .back').click(function () {
        $('#newsOne .back').removeClass('active');
        $(this).addClass('active');
    });
    $('#newsTwo .back').click(function () {
        $('#newsTwo .back').removeClass('active');
        $(this).addClass('active');
    });
    // $('#edition .back_url').click(function () {
    //     $('#edition .back_url').removeClass('active');
    //     $(this).addClass('active');
    // })
    $('#uls .lis').click(function () {
        $('#uls .lis').removeClass('active');
        $(this).addClass('active');
    });
    function onMyLoad() {
        var lis = $('.nav ul li');
        for (var i = 0; i < lis.length; i++) {
            var num = i;
            lis[num].onclick = function () {
                // alert(num);
                // $(this).addClass('active').siblings().removeClass('active');
                $(this).children("span").addClass('active').parent().siblings().children("span").removeClass('active');
                $(this).children(".content").addClass('active').parent().siblings().children(".content").removeClass('active');
            };
        }
    }
    //    onMyLoad();
});
