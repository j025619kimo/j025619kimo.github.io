// init controller
var controller = new ScrollMagic.Controller();

function stopMobileMagic(magic,width){
    var winW = $(window).width();
    winW<width ? magic.enabled(false) : magic.enabled(true);
}



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
                    offset: "3000%"
                })
                .setClassToggle('.envelopeBtn','active')
                .addTo(controller);
