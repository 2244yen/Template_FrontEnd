$(function(){
    var controller = new ScrollMagic.Controller();
    /*var blockTween = new TweenMax.to('#block', 1.5, {background: 'red'});*/

    /*pim the intro*/
    var scenePin = new ScrollMagic.Scene({
        triggerElement: "#intro",
        triggerHook: 0,
        duration: '30%'
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);

    var scenePin1 = new ScrollMagic.Scene({
        triggerElement: "#project01",
        triggerHook: 0.4
    })
    .setPin('#intro', {pushFollowers: false})
    .addTo(controller);


    /*Parallax*/
    var ptimeline = new TimelineMax();
    ptimeline 
        .from('.content-wrapper', 1, {autoAlpha: 0, ease: Power0.easeNone})
        .from('.bcg', 1, {y: '-50%', ease: Power0.easeNone}, 0)
        ;


    var parallaxScene = new ScrollMagic.Scene({
        triggerElement: ".bcg-parallax",
        triggerHook : 1,
        duration: '100%'    
    })
    .setTween(ptimeline)
    .addTo(controller);

    /*Jquery loop: create one scene for multiple elements*/
    $(".project").each(function() {
        var scene = new ScrollMagic.Scene({
            triggerElement:this.children[0],
            triggerHook: 0.9
        })
        .setClassToggle(this, "fade-in")
        .addIndicators({
            name : "fade scene",
            colorTrigger : "red",
            colorStart: "#75c895",
            colorEnd: "blue",
        })
        .addTo(controller);
    });
});