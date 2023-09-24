gsap.from("h1",1,{
    scale: 2,
    opacity: 0
})
gsap.from(".p",2.5,{
    scale:.5,
    opacity: 0,
    delay: .7,
    ease:"elastic.out(1,0.3)"
})
gsap.from(".input", .4,{
    x:500,
    scale:.4,
    stagger:.5,
    ease:"expo.out",
    delay:.7,
    opacity:0,
})
gsap.from(".icon_divide", 2.4,{
    x:-500,
    scale:.4,
    stagger:.5,
    ease:"elastic.out(1,0.3)",
    delay:.7,
    opacity:0,
})
gsap.from("h3",1,{
    x:500,
    scale:.2,
    opacity:0,
})