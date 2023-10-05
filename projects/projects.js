const ImgNames =document.querySelectorAll(".img_name");
// console.log(ImgName);
const ImgPreviewContainer =document.querySelector(".img_preview_container");
// console.log(ImgPreviewContainer);
const ImgViewContainer= document.querySelector(".img_modal .img_view");
// console.log(ImgViewContainer);
const closeBtn =document.querySelector(".close_btn");
// console.log(closeBtn);
const ModalName =document.querySelector(".modal_name");
// console.log(ModalName);
const tl =gsap.timeline({paused:true});

ImgNames.forEach((ImgName)=>{
ImgName.addEventListener("mouseover",()=>{
const dataImg =ImgName.getAttribute("data-img");
// console.log(dataImg);
ImgPreviewContainer.innerHTML =`<img src="./img/${dataImg}.png" alt="">`;
});
ImgName.addEventListener("click",()=>{
  const dataImg =ImgName.getAttribute("data-img");
  ImgViewContainer.innerHTML=`<img src="./img/${dataImg}.png" alt="">`;
  const name= ImgName.querySelector(".name").textContent;
  ModalName.textContent=name;
  tl.reversed(!tl.reversed());
});
});

closeBtn.onclick=function(){
  tl.reversed(!tl.reversed());
};
function revealImg(){
tl.to(".img_name .name",1,{
top:"30px",
ease:"power4.inOut",
});
tl.to(".img_preview_container",1,{
  clipPath:" polygon(0 100%,100% 100%, 100% 100%,0 100%)",
  y:25,
  ease:"power4.inOut",
},"<");
tl.to(".img_modal",0.005,{
  opacity: 1,
  ease:"none",
  pointerEvents: "all",
  delay:-0.125,
});
tl.to(".img_view",1,{
  clipPath:" polygon(0 0,100% 0, 100% 100%,0 100%)",
  y:25,
  ease:"power4.inOut",
},"<");
tl.to(".close_btn .btn",1,{
  bottom:"0",
  ease:"power4.inOut",
},"<");

tl.to(".modal_name",1,{
  top:"0",
  ease:"power4.inOut",
},"<").reverse()
}
revealImg()















// const ImgNames = document.querySelectorAll(".img_name");
// // console.log(ImgNames);
// const ImgPreviewContainer = document.querySelector(".img_preview_container");
// const tl =gsap.timeline({paused:true});
// // console.log(ImgPreviewContainer);
// const ImgViewContainer=document.querySelector
// (".img_modal .img_view");
// const closeBtn = document.querySelector(".close_btn");
// const modalName = document.querySelector(".modal_name");
// // console.log(modalName);
// ImgNames.forEach((ImgName)=> {
//   ImgName.addEventListener("mouseover",()=>{
//     const dataImg = ImgName.getAttribute("data-img");
//     // console.log(dataImg);
//     ImgPreviewContainer.innerHTML=`
//     <img src="/img/${dataImg}.png" alt="">`
//   });
//   ImgName.addEventListener("click",()=>{
//     const dataImg = ImgName.getAttribute("data-img");
//     ImgViewContainer.innerHTML = `<img src="/img/${dataImg}.png" alt="">`;
//    const NAme = ImgName.querySelector(".name").textContent;
//    modalName.textContent= NAme;
//    tl.reversed(!tl.reversed());
//   });
// });

// closeBtn.onclick = function (){
//     tl.reversed(!tl.reversed());
// };
// function revealImg(){
//     tl.to(".img_name .name",1,{
//         top:"100",
//         ease:"power4.inOut",
//     });
//     tl.to(".img_preview_container",1,{
//     clipPath:"polygon(0 100%,100% 100%, 100% 100%, 0 100%)",
//     y:25,
//     ease:"power4.inOut",
//     },"<");
//     tl.to(".img_modal", 0.005,
//     {
//         opacity:1,
//         ease:"none",
//         PointerEvents:"auto",
//         delay:-0.125,
//     });

//     tl.to(".img_view",1,{
//         clipPath:"polygon(0 0,100% 0, 100% 100%, 0 100%)",
//         y:25,
//         ease:"power4.inOut",
//     },"<");
//      tl.to(".close_btn .btn",1,{
//         top:"0",
//         ease:"power4.inOut"
//      },"<");
//      tl.to(".modal_name",1,{
//         top:"0",
//         ease:"power4.inOut"
//      },"<").reverse();
// };
// revealImg();
