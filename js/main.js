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

    $('#form_submit').click(function(){
        event.preventDefault();
        var status = true;

        var guest_name = $('input[name="guest_name"]').val();
        var guest_message = $('textarea[name="guest_message"]').val();

        //前端驗證        
        if (guest_name=='') {
            $('input[name="guest_name"]').parent().addClass('error');
            status = false;
        }
        if (guest_message=='') {
            $('textarea[name="guest_message"]').parent().addClass('error');
            status = false;
        }

        if (status) { //驗證無誤的話
            // 新增時間
            var today = new Date();
            var guest_time = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
            // 打包 要的資料
            var data = {                
                'guest_name' : guest_name,
                'guest_message' : guest_message,
                'guest_time' : guest_time
            };
            // 呼叫 send ajax function
            console.log(data);
            send(data);
        }       
    });
    function send(data) { //使用ajax丟資料
        $.ajax({
            // 這邊用get type
            type: "get",
            // api url - google appscript 產出的 url
            url: "https://script.google.com/macros/s/AKfycbxANy7IvHy5T_q6BAaKydwdpLiVwFMC0a1BtN-Y2_36JAvnx1iBocruH7OgGwXY_FlyrQ/exec",
            // 剛剛整理好的資料帶入
            data: data,
            // 資料格式是JSON 
            dataType: "JSON",

            // 送出前，要loading
            beforeSend:function(){
                $('body').append('<div class="loaderWrapper" id="loaderWrapper"><span class="loader"></span></div>');
            },
            // 成功送出 會回頭觸發下面這塊感謝
            success: function (response) {
                console.log(response);
                $('#loaderWrapper').fadeOut();
                alert('感謝您的填寫！！');                
            },
            // 送出後，loading拿掉
            complete:function(){
                $('#envelopeModal').modal('hide');
                $('#loaderWrapper').remove();
            }
        });
    }


});