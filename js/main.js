function getUrlParms(){ //取得網頁參數
    var args = new Object();
    var url = location.search.substring(1);
    var pairs = url.split("&");
    for(var i=0; i<pairs.length; i++) {
        var pos = pairs[i].indexOf('='); // 找到每個name value
        if(pos==-1)   continue; //如果沒有就跳過
        var argname = pairs[i].substring(0,pos); //取得name
        var value = pairs[i].substring(pos+1); //取得value
        args[argname] = decodeURI(value); //把取到的name value丟到此陣列去
    }
    return args;
}

var theDate;
var args = new Object();
    args = getUrlParms();
    if (args["date"]!=undefined) {
        theDate = args["date"];
    }
console.log(theDate);

$('.kvSlider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$('.kvSlider_mb').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$(document).ready(function(){

    $('.ppscroll').scrollParallax();

    $('#openEnvelope').on('click',function(){
        $('#envelopeModal').modal('show');
        return false;
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() < 200) {
            if ($("#goTop").hasClass("show")) {
                $("#goTop").toggleClass("show");
            }
        } else {
            $("#goTop").addClass("show");
        }
    });
    $('#goTop').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },600);
    });

});