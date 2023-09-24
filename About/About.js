let valueDisplays = document.querySelectorAll(".number");
let interval = 5000;
// console.log(valueDisplays);
valueDisplays.forEach((valueDisplays)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    // console.log(endValue);
let duration = Math.floor(interval/endValue);
let counter = setInterval (function(){
startValue+=1;
valueDisplays.textContent=startValue;
if(startValue== endValue){
    clearInterval(counter)
}
},21);
});

gsap.from(".bar abbr",{
    scrollTriger:".bar",
    left:0,
    ease:Power2.easeInOut,
    duration:3,
    stagger:0.1
})
gsap.from(".bar span",{
    scrollTriger:".bar",
    width: "0px",
    ease:Power2.easeInOut,
    duration:3,
    stagger:0.1
})