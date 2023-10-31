// init controller
var controller = new ScrollMagic.Controller();

function stopMobileMagic(magic,width){
    var winW = $(window).width();
    winW<width ? magic.enabled(false) : magic.enabled(true);
}

// var myTween = TweenMax.from(".box", 1, {x: 200});
var tween_s1_frame = TweenMax.from('#wusir',1.25 ,{y: '+=200px', autoAlpha: 0});
var tween_s1 = new TimelineMax();
tween_s1.to('#big51', 1, {y: '-=300px', rotationX: '0deg'},0)
        .to('#big52', 1, {y: '-=300px', rotationX: '0deg'},0.1)
        .to('#big55', 1, {y: '-=300px', rotationX: '0deg'},0.2)
        .to('#big53', 1, {y: '-=300px', rotationX: '0deg'},0.3)
        .to('#big54', 1, {y: '-=300px', rotationX: '0deg'},0.2);
var scene_s1 = new ScrollMagic
                .Scene({
                    triggerElement: "#s1",
                    triggerHook: "onEnter",
                    duration: '80%', 
                    offset: 0
                })
                .setTween(tween_s1)
                .addTo(controller);
stopMobileMagic(scene_s1,768);
$(window).resize(function(){stopMobileMagic(scene_s1,768);});

var timeline_s3 = new TimelineMax();
timeline_s3.from('#g3440', 1, {x: '-=100px'},0)
           .from('#g3037', 1, {x: '+=100px'},0)
           .from('#t3037', 1, {x: '+=100px', autoAlpha: 0},"<")
           .from('#t3440', 1, {x: '-=100px', autoAlpha: 0},"<")
           .from('#ggSincere1', 1, {y: '-=100px', autoAlpha: 0},"<+1")
           .from('#ggSincere2', 1, {y: '+=100px', autoAlpha: 0},"<+1")
           .to('#g3440', 2, {x: '-=100px'},"<+2.5")
           .to('#g3037', 2, {x: '+=100px'},"<+2.5")
           .to('#t3037', 2, {x: '+=100px', autoAlpha: 0},"<+2.55")
           .to('#t3440', 2, {x: '-=100px', autoAlpha: 0},"<+2.55");
var scene_s3 = new ScrollMagic
                .Scene({
                    triggerElement: "#s3",
                    triggerHook: "onEnter",
                    duration: '200%', 
                    offset: "1000%"
                })
                .setTween(timeline_s3)
                .addTo(controller);

var scene_s4_1 = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: "#pIntro1",
                    duration: "100%",
                    offset: 0
                }).on("progress", function(e) {
                    
                }).addTo(controller);
var scene_s4_2 = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: "#pIntro2",
                    duration: 0,
                    offset: -200
                }).on("enter", function(e) {
                    $('#gallery1').removeClass('active');
                    $('#gallery2').addClass('active');
                }).on("leave", function(e) {
                    $('#gallery1').addClass('active');
                    $('#gallery2').removeClass('active');
                }).addTo(controller);
var scene_s4_3 = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: "#pIntro3",
                    duration: 0,
                    offset: -200
                }).on("enter", function(e) {
                    $('#gallery2').removeClass('active');
                    $('#gallery3').addClass('active');
                }).on("leave", function(e) {
                    $('#gallery2').addClass('active');
                    $('#gallery3').removeClass('active');
                }).addTo(controller);
var scene_s4_4 = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: "#pIntro4",
                    duration: 0,
                    offset: -200
                }).on("enter", function(e) {
                    $('#gallery3').removeClass('active');
                    $('#gallery4').addClass('active');
                }).on("leave", function(e) {
                    $('#gallery3').addClass('active');
                    $('#gallery4').removeClass('active');
                }).addTo(controller);
var scene_s4_5 = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: "#pIntro5",
                    duration: 0,
                    offset: -200
                }).on("enter", function(e) {
                    $('#gallery4').removeClass('active');
                    $('#gallery5').addClass('active');
                }).on("leave", function(e) {
                    $('#gallery4').addClass('active');
                    $('#gallery5').removeClass('active');
                }).addTo(controller);
var changePath = [
    "M62,487.19V468.41c6.81-9.16,12.38-19.67,20.63-27.27Q272.3,266.56,462.52,92.6c24.32-22.3,49.33-22.43,74.32-.54q160.8,140.88,321.78,281.57c21.4,18.73,43,37.3,64,56.43,13,11.76,18,27.4,11.32,43.42-8.86,21.34-24.68,37.31-46.78,45.83-8.39,3.24-16.12,1.37-22.81-4.92-4.37-4.1-9.11-7.82-15-12.82v11.49q0,148.53,0,297.05c0,23.62.25,47.24-.22,70.84-.47,23-18.27,41.19-41.41,41.37-54.62.44-109.26.34-163.89,0-18.28-.1-32.59-11.71-37.12-29.5-1.65-6.48-1.88-13.46-1.89-20.22q-.18-125.48-.08-251V612H410.17v10.7q0,126.33,0,252.66c0,29.46-17.88,47.16-47.4,47.18q-70.85.06-141.7,0c-32.91,0-49.62-16.85-49.62-50V496.18C161.24,505.23,152.68,513,144,520.54c-16.43,14.28-38.43,14.81-55.39,1.17C77,512.38,67.34,501.43,62,487.19Z",
    "M352,126.38h21.47c.4.31.77.82,1.21.9,23.26,4.39,45.16,23.3,47.27,53.34,1.9,27.18-10.81,47-35.46,59-1.53.74-3.45,2.73-3.48,4.17-.28,12.94-.16,25.9-.16,39H618.14c0-11.66-.31-22.86.12-34,.22-5.59-1.59-8.3-6.71-11-21.55-11.31-32.92-29.5-32.36-54,.55-23.81,12.41-41,33.52-51.8,4.43-2.26,9.23-3.79,13.87-5.65h21.47c.42.29.81.74,1.27.84,26.22,5.39,45.29,26.05,47.36,52.47,2.15,27.55-10.35,47.62-35.24,59.9-1.54.75-3.5,2.71-3.53,4.14-.28,13-.16,25.92-.16,39.59,6.81,0,12.66-.07,18.5,0,56.57.78,99.08,43.56,99.13,100.06q.12,166.82,0,333.61c-.08,52.88-44,96.56-96.71,96.68-33.49.08-67,.27-100.46-.15a40.8,40.8,0,0,0-23.53,6.81c-45.31,28.67-90.88,56.9-136.27,85.43-8.15,5.12-16.19,9-25.64,3.63s-10.25-14.23-10.12-23.86c.27-21.22.08-42.44.08-63.66V813.7c-20.63,0-40.52.61-60.36-.25a119.14,119.14,0,0,1-31.4-5.55c-34.23-11.15-65.74-46.81-65.46-95.72.61-108.9.18-217.81.2-326.71,0-3.57.17-7.15.38-10.72,2.69-46.58,40.61-86.11,86.89-90.37,9.82-.9,19.71-1.1,30.18-1.66,0-13.19.17-25.93-.2-38.65-.06-1.76-2.51-4.08-4.4-5.07-24.53-12.79-36.83-34.88-33.95-61.46,2.52-23.35,19.87-42.5,44.93-49.68A11,11,0,0,0,352,126.38ZM500.31,676.19a328.9,328.9,0,0,0,142.27-29.62c13-5.88,18.07-16.69,13-27.53-5-10.62-16.19-13.72-28.75-8-60.15,27.38-122.9,31.69-187.27,20.67a254,254,0,0,1-66.8-21.37c-10.71-5.1-21.37-1.83-26.56,7.48-5.93,10.64-1.33,22.46,11.18,28.16C402.89,666.71,450.61,677.06,500.31,676.19ZM401.37,401.8c-31.82.85-57.17,26-57.39,56.92-.08,12,6.94,20.21,17.74,20.76,11.5.6,19.72-6.72,20.94-18.62,1.29-12.67,8.47-20,19.67-20,11.46,0,18.7,7.39,20.07,20.57,1.2,11.48,9.26,18.57,20.53,18.07,10.47-.47,17.92-8.65,18.06-19.82C461.4,427.83,433.69,400.94,401.37,401.8Zm198.34,0c-31.82-.81-58.87,24.91-59.37,56.44-.2,12.15,6.55,20.47,17.21,21.24,11.82.84,20.2-6.52,21.48-18.88,1.29-12.52,8.63-19.78,19.91-19.71,11.13.07,18.42,7.47,19.79,20.09,1.32,12.17,9.21,19.18,20.84,18.52,10.64-.61,17.81-9,17.77-20.86C657.23,427.94,631.53,402.59,599.71,401.78Z",
    "M944.44,321.12V678.8a43.75,43.75,0,0,0-1.92,4.54c-4.9,16.26-14.49,28.82-29.47,36.94-24.91,13.49-52.19,8.65-74.31-13.35q-51.69-51.42-103.15-103.09c-2.1-2.09-4.35-4-8.05-7.42,0,25.43.52,48.53-.11,71.6a89.31,89.31,0,0,1-89.72,87.12q-246.09.11-492.18,0c-28.38,0-51.26-11.67-69.58-33.06-10.8-12.61-16-27.73-20.39-43.29V321.12a51,51,0,0,0,1.84-5.56c8.33-39,45-70.6,83.7-70.66q250.67-.36,501.34,0c43.68.08,83.79,40.22,84.9,83.8.56,22,.25,43.95.37,65.92,0,2.33.34,4.66.52,7l2.63,1.47c1.84-2.6,3.35-5.53,5.57-7.76q44.66-44.89,89.51-89.59c6.75-6.73,13.36-13.69,20.65-19.79,28.17-23.59,71.66-15.63,89.71,16.39C939.63,308.27,941.76,314.85,944.44,321.12ZM308.63,499.51h0c0,30.65.11,61.29-.06,91.93-.07,12.7,4.61,22.49,16,28.49,11.65,6.14,22.67,3.37,32.42-4q60-45.68,119.57-91.9c17.13-13.33,17.1-34.75,0-48.07Q417,429.62,356.92,384c-7.32-5.6-15.6-8.8-25.06-6.61-14.42,3.35-23,13.86-23.15,29.35C308.45,437.65,308.63,468.58,308.63,499.51Z",
    "M943.47,500.59v60.53c-.68,4.76-1.58,9.49-2,14.27-1.69,19.18-10.84,27.69-30,27.93-4,0-8,.61-12,.84-44.94,2.54-85.8,44.55-87.7,89.45-1.3,30.87,8.76,56.83,30.58,78.61,11.52,11.5,12.37,24.53,2.81,36.28-20.6,25.33-43.44,48.48-69.44,68.25-4.83,3.67-12,5.43-18.2,5.88-10.54.75-16.85-7.6-23.8-13.94-36.46-33.22-96.7-32.64-132,1.46q-29.65,28.64-30.3,70c-.35,20.6-9.87,29.82-30.21,30.79-3.65.17-7.25,1.15-10.88,1.76H469.71c-5.61-.76-11.22-1.54-16.84-2.27-16.44-2.16-24.49-10.64-25.6-27.16-.29-4.31-.25-8.64-.43-13-2-47.21-45.13-88.82-92.33-89.07-29.59-.16-55.06,9.75-76.27,30.68-11.24,11.09-24.16,12-35.63,2.65a435.81,435.81,0,0,1-68.46-69.39c-8.32-10.59-7.75-22.71,1.07-33.09,2.23-2.64,4.62-5.14,7-7.67,38.1-40.73,33-107.4-10.72-141.93C133.37,608.18,112.76,601.87,90,600.8c-19.48-.92-29.33-11.36-29.93-30.67-.65-20.43-1.52-40.86-1.45-61.29a182.84,182.84,0,0,1,3.12-31.73c2.34-13,9.29-18.7,22.26-20.26,8.84-1.06,17.81-1.36,26.53-3,47.52-9.08,79.37-47.61,79.39-95.74,0-28-11.31-51.12-30.87-70.76C147.73,276,147.2,263,157,251a458.81,458.81,0,0,1,68.72-67.93c7.11-5.7,15.34-8.24,23.33-4.9,7.16,3,13.46,8.5,19.48,13.67,37.67,32.33,104,35.94,141.37-12.82,13.59-17.71,20.23-37.67,20.55-60.06.29-19.54,10.06-28.94,29.33-29.83,4.31-.2,8.62-1.11,12.91-1,27,.68,54.05.94,81,2.65,11.48.73,18.9,10,20.26,21.41.71,6,.65,12.08.94,18.12,2.27,46.85,45.22,88.14,92,88.46,29.59.21,55.09-9.59,76.34-30.49,11.34-11.16,24.21-12.21,35.63-3a433.71,433.71,0,0,1,68.54,69.31c8.42,10.73,8,22.76-.78,33.11-2.42,2.86-5,5.57-7.58,8.3-41.5,44.44-30.18,118.78,22.48,149.05,15.91,9.14,33.08,12.68,51,14.08,19.07,1.47,28.24,11.44,29.15,30.61C941.87,493.38,942.86,497,943.47,500.59ZM719.4,660.11c60.14-96.81,48.27-240.93-57.2-327.32-104.86-85.89-255-73.7-345.39,20.92A254.83,254.83,0,0,0,319,708.61c92.27,94.09,232.08,95,317.6,36a6.14,6.14,0,0,0-.85-1.48Q582.34,689.6,529,636c-3.76-3.79-6.79-2.61-10.73-1.14a152.76,152.76,0,0,1-84.08,6.87c-86.79-16.86-141.81-102.24-122.44-188.8,1.94-8.68,4.71-16.1,14.16-18.68,8.93-2.44,14.65,3,20.26,8.59C368,464.56,390,486.22,411.7,508.09c4.84,4.87,10,7.36,16.93,6.22,14.45-2.37,28.92-4.74,43.44-6.61,7.09-.91,10.67-4.11,11.57-11.26,1.61-12.82,3-25.75,5.82-38.32,2.47-10.88-.51-18.32-8.44-26-22-21.19-43.35-43.05-64.66-64.94-10.86-11.15-6.95-26.49,7.3-30.56,58.87-16.82,127.33,6.22,164.27,55.7,34.28,45.92,41,96.2,23.08,150.3-1,2.87-.7,7.83,1.14,9.7C647.52,588.28,683.22,623.89,719.4,660.11Z"
];
$("#svgMask").addClass("p0");
// $("#setPath").attr({d:changePath[0]});
// svg code需要調整
var $path = Snap("#setPath");
$path.attr({d:changePath[0]});
var scene_s4_1_2 = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: "#sClass2",
                    duration: 0,
                    offset: -200
                }).on("enter", function(e) {
                    // $("#setPath").attr({d: changePath[1]});
                    $path.stop().animate({
                        d: changePath[1],
                    }, 600);     
                    $("#svgMask").removeClass("p0 p1 p2 p3").addClass("p1");
                }).on("leave", function(e) {
                    // $("#setPath").attr({d:changePath[0]});
                    $path.stop().animate({
                        d: changePath[0],
                    }, 600);
                    $("#svgMask").removeClass("p0 p1 p2 p3").addClass("p0");
                })
                .addTo(controller);
var scene_s4_1_3 = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: "#sClass3",
                    duration: 0,
                    offset: -200
                }).on("enter", function(e) {
                    // $("#setPath").attr({d:changePath[2]});
                    $path.stop().animate({
                        d: changePath[2],
                    }, 600);
                    $("#svgMask").removeClass("p0 p1 p2 p3").addClass("p2");
                }).on("leave", function(e) {
                    // $("#setPath").attr({d:changePath[1]});
                    $path.stop().animate({
                        d: changePath[1],
                    }, 600);
                    $("#svgMask").removeClass("p0 p1 p2 p3").addClass("p1");
                })
                .addTo(controller);
var scene_s4_1_4 = new ScrollMagic.Scene({
                    triggerHook: "onLeave",
                    triggerElement: "#sClass4",
                    duration: 0,
                    offset: -200
                }).on("enter", function(e) {
                    // $("#setPath").attr({d:changePath[3]});
                    $path.stop().animate({
                        d: changePath[3],
                    }, 600);
                    $("#svgMask").removeClass("p0 p1 p2 p3").addClass("p3");
                }).on("leave", function(e) {
                    // $("#setPath").attr({d:changePath[2]});
                    $path.stop().animate({
                        d: changePath[2],
                    }, 600);
                    $("#svgMask").removeClass("p0 p1 p2 p3").addClass("p2");
                })
                .addTo(controller);

var timeline_s5 = new TimelineMax();
timeline_s5.to('#ytid', 1, {scale: .38, x: '-1.5%', y: '-23%'},0);
var scene_s5 = new ScrollMagic
                .Scene({
                    triggerElement: "#s5",
                    triggerHook: "onEnter",
                    duration: '100%', 
                    offset: "1000%"
                }).on("enter", function(e) {
                    document.getElementById('lccVideo').play();
                    // $('#lccVideo').prop('muted', false);
                }).on("leave", function(e) {
                    document.getElementById('lccVideo').pause();
                    // $('#lccVideo').prop('muted', true);
                })
                .setTween(timeline_s5)
                .addTo(controller);

var timeline_s6 = new TimelineMax();
timeline_s6.staggerFromTo('.smallwang', 1, 
                            {x: 1500,rotation:180},
                            {x: 0,rotation:0, ease: Back.easeOut}
                            ,0.15)
            .from('#g1195', 1, {y: '+=100px', autoAlpha: 0})
            .from('#g3441', 4, {x: '-=100%'},3)
            .from('#g3441 p', 1, {autoAlpha: 0},3);
var scene_s6 = new ScrollMagic
                .Scene({
                    triggerElement: "#s6",
                    triggerHook: "onEnter",
                    duration: '85%', 
                    offset: "1000%"
                }).on("progress", function(e) {
                    var o = Math.floor(100 * e.progress);
                    if (o>50) {
                        $('.smallwangs').addClass('active');
                    }else {
                        $('.smallwangs').removeClass('active');
                    }
                })
                .setTween(timeline_s6)
                .addTo(controller);

var timeline_s7 = new TimelineMax();
timeline_s7.from('#lccAroundLogo', 1, {scale: 3,autoAlpha: 0, ease:Power4.easeInOut})
           .from('#iphone1', 1, {y: '-=800px', ease:Power4.easeInOut},0)
           .from('#iphone2', 1, {x: '+=600px', ease:Power4.easeInOut},0)
           .from('#iphone3', 1, {x: '-=600px', ease:Power4.easeInOut},0)
           .from('#iphone4', 1, {y: '+=800px', ease:Power4.easeInOut},0);
var scene_s7 = new ScrollMagic
                    .Scene({
                        triggerElement: "#s7",
                        duration: "50%", 
                        offset: "50%"
                    })
					.setTween(timeline_s7)
					.addTo(controller);

var timeline_s8_1 = new TimelineMax();
timeline_s8_1.from('#mt1', 1, {x: '+=100px'},0)
           .from('#mt2', 1, {x: '-=100px'},0)
           .from('#mt3', 1, {x: '+=100px'},0);
var scene_s8_1 = new ScrollMagic
                .Scene({
                    triggerElement: "#s8",
                    triggerHook: "onEnter",
                    duration: '100%', 
                    offset: "200%"
                })
                .setTween(timeline_s8_1)
                .addTo(controller);
var timeline_s8_2 = new TimelineMax();
timeline_s8_2.from('.guidePin1 .guidePinTitle', 1, {y: '+=50px', autoAlpha: 0})
             .from('.guidePin1 .guidePinIntro', 1, {y: '+=50px', autoAlpha: 0})
             .from('.guidePin1 .guidePinLine', 1, {scaleX: '0', autoAlpha: 0})
             .from('.guidePin1 .guidePinNo', 1, {scale: '0', autoAlpha: 0})
             .from('.guidePin2 .guidePinTitle', 1, {y: '+=50px', autoAlpha: 0})
             .from('.guidePin2 .guidePinIntro', 1, {y: '+=50px', autoAlpha: 0})
             .from('.guidePin2 .guidePinLine', 1, {scaleX: '0', autoAlpha: 0})
             .from('.guidePin2 .guidePinNo', 1, {scale: '0', autoAlpha: 0})
             .from('.guidePin3 .guidePinTitle', 1, {y: '+=50px', autoAlpha: 0})
             .from('.guidePin3 .guidePinIntro', 1, {y: '+=50px', autoAlpha: 0})
             .from('.guidePin3 .guidePinLine', 1, {scaleX: '0', autoAlpha: 0});
var scene_s8_2 = new ScrollMagic
                .Scene({
                    triggerElement: "#s8",
                    triggerHook: "onEnter",
                    duration: '80%', 
                    offset: "1000%"
                })
                .setTween(timeline_s8_2)
                .addTo(controller);

var timeline_s9 = new TimelineMax();
timeline_s9.from('#b1180', 1, {scale: 1.8, x: '-=200px', y: '+=400px', ease:Expo.easeInOut},0)
           .from('#pkH', 1, {y: '+=100px', autoAlpha: 0, ease:Power4.easeInOut},0)
           .from('#pkI', 1, {y: '+=100px', autoAlpha: 0, ease:Power4.easeInOut},1)
           .from('#pkF', 1, {y: '+=100px', autoAlpha: 0, ease:Power4.easeInOut},2)
           .from('#kick3585', 1, {x: '-=800px', autoAlpha: 0, ease:Power4.easeInOut},2)
           .from('#fist3440', 1, {x: '-=800px', autoAlpha: 0, ease:Power4.easeInOut},2);
var scene_s9 = new ScrollMagic
                .Scene({
                    triggerElement: "#s9",
                    triggerHook: "onEnter",
                    duration: '200%', 
                    offset: "1000%"
                })
                .setTween(timeline_s9)
                .addTo(controller);

var timeline_s10_bg = new TimelineMax()
                        .to("#grassBG", 1,{ y: "-10%", ease: Linear.easeNone });
var scene_s10_bg = new ScrollMagic.Scene({
                    triggerHook: "onEnter",
                    triggerElement: "#s11",
                    duration: "80%",
                    offset: 100
                })
                .setTween(timeline_s10_bg)
                .addTo(controller);
var tween_s10 = new TimelineMax();
tween_s10.from('#flower51', 1, {y: '+=300px', autoAlpha: 0},0)
         .from('#flower52', 1, {y: '+=300px', autoAlpha: 0},0.1)
         .from('#flower55', 1, {y: '+=300px', autoAlpha: 0},0.2)
         .from('#flower53', 1, {y: '+=300px', autoAlpha: 0},0.3)
         .from('#flower54', 1, {y: '+=300px', autoAlpha: 0},0.2);
var scene_s10 = new ScrollMagic
                .Scene({
                    triggerElement: "#s10",
                    triggerHook: "onEnter",
                    duration: '50%', 
                    offset: "1200%"
                })
                .setTween(tween_s10)
                .addTo(controller);

var tween_s11 = new TimelineMax();
tween_s11.staggerFrom('.tetris', 1, {y: '-=1000px'},2)
         .to('#tetris33',4,{y: 50},"<+2")
         .to('#tetris33',4,{y: 50},"<+2")
         .to('#tetris33',3,{x: -50 ,y: 200,rotation: 0},"<+5")
         .to('#tetris33',3,{x: -100 ,y: 300,rotation: 90},"<+10");
var scene_s11 = new ScrollMagic
                .Scene({
                    triggerElement: "#s11",
                    triggerHook: "onEnter",
                    duration: '300%', 
                    offset: "1000%"
                })
                .setTween(tween_s11)
                .addTo(controller);

var timeline_s12 = new TimelineMax();
timeline_s12.staggerFrom('.locationPuzzle', 1, {y: '+=1000px'},0.5)
            .to('.locationPuzzle', 1, {autoAlpha: 0},"<")
            .to('.locationComplete', 1, {autoAlpha: 0.5},"<")
            .to('.locationWrapper', 1, {scale: 0.5, ease:Power4.easeInOut},"<+5");
var scene_s12 = new ScrollMagic
                .Scene({
                    triggerElement: "#s12",
                    triggerHook: "onEnter",
                    duration: '200%', 
                    offset: "1000%"
                })
                .setTween(timeline_s12)
                .addTo(controller);
var scene_s12_title = new ScrollMagic
                .Scene({
                    triggerElement: "#s12",
                    triggerHook: "onEnter",
                    duration: 0, 
                    offset: "2000%"
                })
                .setClassToggle('.locationTitle','active')
                .addTo(controller);

var lcc_horizon = $('#lccHorizon');
var lcc_horizon_w = 0;
lcc_horizon.children().each(function() { lcc_horizon_w += $(this).width(); });
lcc_horizon_w = lcc_horizon_w*(-1) + 300;//about 100vw width,make not too much empty
var timeline_s13 = new TimelineMax();
timeline_s13.to('#lccHorizon', 1, {x: lcc_horizon_w ,ease: "none"});
var scene_s13 = new ScrollMagic
                .Scene({
                    triggerElement: "#s13",
                    triggerHook: "onEnter",
                    duration: '400%', 
                    offset: "1000%"
                })
                .setTween(timeline_s13)
                .addTo(controller);