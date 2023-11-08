// init controller
var controller = new ScrollMagic.Controller();

function stopMobileMagic(magic,width){
    var winW = $(window).width();
    winW<width ? magic.enabled(false) : magic.enabled(true);
}



var timeline_sCe = new TimelineMax();
timeline_sCe.staggerFromTo('.comicEndText', 1, 
                            {x: 1500,rotation:180},
                            {x: 0,rotation:0, ease: Back.easeOut}
                            ,0.15)
            .from('#comicEndPic', 1, {y: '+=100px', autoAlpha: 0})
            .from('#g3441', 4, {x: '-=100%'},3)
            .from('#g3441 p', 1, {autoAlpha: 0},3);
var scene_sCe = new ScrollMagic
                .Scene({
                    triggerElement: "#sCe",
                    triggerHook: "onEnter",
                    duration: '85%', 
                    offset: "1000%"
                }).on("progress", function(e) {
                    var o = Math.floor(100 * e.progress);
                    if (o>50) {
                        $('.comicEndTitle').addClass('active');
                    }else {
                        $('.comicEndTitle').removeClass('active');
                    }
                })
                .setTween(timeline_sCe)
                .addTo(controller);

var timeline_sAro = new TimelineMax();
timeline_sAro.from('.aroundMid', 1, {scale: 3,autoAlpha: 0, ease:Power4.easeInOut})
           .from('#iphone1', 1, {y: '-=800px', ease:Power4.easeInOut},0)
           .from('#iphone2', 1, {x: '+=600px', ease:Power4.easeInOut},0)
           .from('#iphone3', 1, {x: '-=600px', ease:Power4.easeInOut},0)
           .from('#iphone4', 1, {y: '+=800px', ease:Power4.easeInOut},0);
var scene_sAro = new ScrollMagic
                    .Scene({
                        triggerElement: "#sAro",
                        duration: "50%", 
                        offset: "50%"
                    })
                    .setTween(timeline_sAro)
                    .addTo(controller);

var timeline_sEnv = new TimelineMax();
timeline_sEnv.staggerFrom('.envelopePuzzple', 1, {y: '+=1000px'},0.5)
            .to('.envelopePuzzple', 1, {autoAlpha: 0},"<")
            .to('.envelopeComplete', 1, {autoAlpha: 0.5},"<")
            .to('.envelopePuzzpleBox', 1, {scale: 0.8, ease:Power4.easeInOut},"<+5");
var scene_sEnv = new ScrollMagic
                .Scene({
                    triggerElement: "#sEnv",
                    triggerHook: "onEnter",
                    duration: '200%', 
                    offset: "1000%"
                })
                .setTween(timeline_sEnv)
                .addTo(controller);
var scene_sEnv_btn = new ScrollMagic
                .Scene({
                    triggerElement: "#sEnv",
                    triggerHook: "onEnter",
                    duration: 0, 
                    offset: "2100%"
                })
                .setClassToggle('.envelopeBtn','active')
                .addTo(controller);
