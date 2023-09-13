var t1 =gsap.timeline({pasued:true});
var menuToggle = document.querySelector(".toggle");
var menuBar =gsap.timeline();

menuToggle.onclick = function() {
  menuToggle.classList.toggle("active")
  t1.reversed(!t1.reversed());
};
t1.reverse();
t1.to('.fullpage_menu',{
    duration:0,
    display:"block",
    ease:'Expo.easeInOut'
});

t1.from('.menu_bg span',{
    duration:1,
     x:"100%",
     stagger:0.1,
     ease:'Expo.easeInOut'
});

t1.from('.main_menu li a',{
    duration:1.3,
     y:"100%",
     stagger:0.2,
     ease:'Expo.easeInOut'
},"-=0.5");


t1.from('.social_links li a',{
    duration:1,
     y:"-100%",
     opacity: 0,
     stagger:0.1,
     ease:'Expo.easeInOut'
},"-=0.5");




    





TweenMax.from('.left_menu',1,{
    delay:2.5,
    opacity: 0,
    x:-50,
    ease:Expo.easeInOut

})

TweenMax.from('.largerTextContent',1,{
    delay:2.8,
    opacity: 0,
    y:-100,
    ease:Expo.easeInOut

})

TweenMax.from('.decContect',1,{
    delay:2,
    opacity: 0,
    y:100,
    ease:Expo.easeInOut

})

TweenMax.to('.overlay',2,{
    delay:0.5,
    top:"-100%",
    ease:Expo.easeInOut

})


TweenMax.from('.btn',1,{
    delay:2.5,
    opacity:0,
    x:50,
    ease:Expo.easeInOut

})

