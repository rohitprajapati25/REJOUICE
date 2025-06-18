function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locoScroll()


function cursorEffect(){
var page1Text=document.querySelector("#page1-text") 
//var page1Text=document.getElementById("page1-text") also write this type
var cursor=document.querySelector("#cursor")
var page3=document.querySelector("#page3")


page1Text.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:.9,
        
    })
})
page1Text.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Text.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
page1Text.addEventListener("click",function(){
   gsap.to("#click-video",{
    transform: "translate(0%)",
    delay:.5,
    duration:1,

   })
   
})



}
cursorEffect()


function closeAnimation(){
    var videoClose = document.querySelector("#click-video");
var close = document.querySelector("#close");

videoClose.addEventListener("mousemove",function(det){
    gsap.to(close,{
        x:det.x,
        y:det.y,
        duration:1,
    })
})

close.addEventListener("click",function(){
    gsap.to("#click-video",{
    transform: "translate(-100%)",
    delay:.5,
    duration:1,

   })
})

}
closeAnimation();


function page1Text(){
    gsap.from("#page1-text nav h3",{
        y:-100,
        duration:.9,
        delay:1,
        opacity:0,
        stagger:.5,
    })
    gsap.from("#page1-text h1",{
        y:45,
        duration:1,
        delay:1.5,
        opacity:0,
        stagger:.5,
    })
    
}
page1Text()

gsap.from("body",{
    opacity:0,
    duration:1,
    delay:.8
})


gsap.registerPlugin(ScrollTrigger);
gsap.from("#page2 hr",{
    y:-10,
    duration:.5,
    delay:.3,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"hr",
        scroller:"#main",
        start:"top 120%",
        end:"top 20%",
        scrub:1
    }
})
gsap.from("#page2-nav h4",{
    y:20,
    duration:.2,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2-nav h4",
        scroller:"#main",
        start:"top 120%",
        end:"top 20%",
        scrub:1.5
    }
})
gsap.from("#page2-text p",{
    y:20,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page2-text p",
        scroller:"#main",
        start:"top 100%",
        end:"top 20%",
        scrub:1.5
    }
})
gsap.from("#page3-top h4",{
    y:-20,
    duration:1,
    delay:.5,
    opacity:0,
    scale:.7,
    scrollTrigger:{
        trigger:"#page3-top h4",
        scroller:"#main",
        start:"top 120%",
        end:"top 20%",
        scrub:1.5
    }
})
gsap.from("#page3-top h2",{
    y:60,
    duration:.5,
    delay:.5,
    opacity:0,
    scale:.7,
    scrollTrigger:{
        trigger:"#page3-top h2",
        scroller:"#main",
        start:"top 120%",
        end:"top 20%",
        scrub:1.5
    }
})
gsap.from("#page3 #video-header",{
    y:20,
    duration:.5,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page3 #video-header",
        scroller:"#main",
        start:"top 120%",
        end:"top 20%",
        scrub:1.5
    }
})
gsap.from("#page4 hr",{
    y:-10,
    duration:.5,
    delay:.3,
    opacity:0,
    scale:0,
    scrollTrigger:{
        trigger:"#page4 hr",
        scroller:"#main",
        start:"top 120%",
        end:"top 20%",
        scrub:1
    }
})
gsap.from("#page4-nav h4",{
    y:20,
    duration:.2,
    delay:.5,
    opacity:0,
    scrollTrigger:{
        trigger:"#page4-nav h4",
        scroller:"#main",
        start:"top 120%",
        end:"top 20%",
        scrub:1.5
    }
})
gsap.from("#page4-text p",{
    y:20,
    duration:1,
    delay:.5,
    opacity:0,
    stagger:.3,
    scrollTrigger:{
        trigger:"#page4-text p",
        scroller:"#main",
        start:"top 100%",
        end:"top 20%",
        scrub:1.5
    }
})
