function cursorEffect(){
    var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})

}
cursorEffect()

function page2textEffect(){
    const myText = new SplitType('.page2-h1 , h2')

gsap.to('.word',{
    y:0,
    stagger:0.05,
    delay:0.2,
    duration:.1,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        start:"top 83%",
        end:"top 85%",
        // markers:true,
        scrub:2
    }
})
}
page2textEffect()