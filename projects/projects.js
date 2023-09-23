const elems = document.querySelectorAll(".elems");
const imageDiv= document.querySelector("#image");
// console.log(elems);
elems.forEach(function(elem){
    // console.log(elem);
    // console.log(H,W,Img);
    elem.addEventListener("mouseenter", function(){

        let Img = elem.getAttribute("data-image");
        let H = elem.getAttribute("data-height");
        let W = elem.getAttribute("data-width");
imageDiv.style.backgroundImage =`url(${Img})`

    })
    document.addEventListener("mousemove",function(dets){
        // console.log(dets);
        imageDiv.style.left=`${dets.x-120}px`
        imageDiv.style.top=`${dets.y-150}px`
       
    })
})