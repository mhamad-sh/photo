let saturate=document.getElementById("saturate");
let contrast=document.getElementById("contraste");
let brightness=document.getElementById("brightness");
let sepia=document.getElementById("sepia");
let grayscale=document.getElementById("grayscale");
let blur=document.getElementById("blur");
let huerotate=document.getElementById("hue-rotate");
let upload =document.getElementById("upload");
let download =document.getElementById("download");
let img =document.querySelector("img");
let reset =document.querySelector("span");
let imgbox =document.querySelector(".img-box");
const canvas=document.getElementById("canvas");
const ctx=canvas.getContext('2d');
window.onload=function(){
    download.style.display='none';
    reset.style.display='none';
    imgbox.style.display='none';
}
function resetvalue(){
img.style.filter="none";
saturate.value='100';
contrast.value='100';
brightness.value='100';
sepia.value='0';
grayscale.value='0';
blur.value='0';
huerotate.value='0';
}
upload.onchange=function(){
    resetvalue()
    download.style.display='block';
    reset.style.display='block';
    imgbox.style.display='block';
    let file=new FileReader();
    file.readAsDataURL(upload.files[0])
    file.onload=function(){
        img.src=file.result
    }
}
let filters = document.querySelectorAll("ul li input")
filters.forEach(filter=>{
    filter.addEventListener('input',function(){
       ctx.filter =`
       saturate(${saturate.value}%)
       contrast(${contrast.value}%)
       brightness(${brightness.value}%)
       sepia(${sepia.value}%)
       grayscale(${grayscale.value}%)
       blur(${blur.value}px)
       hue-rotate(${huerotate.value}deg)
       `
       ctx.drawImage(img,0,0,canvas.height,canvas.width)

    })
})
download.onclick=function(){
    download.href=canvas.toDataURL()
}
img.onload=function(){
    canvas.width=img.width;
    canvas.height=img.height;
    ctx.drawImage(img,0,0,canvas.height,canvas.width)
    img.style.display='none';
}





















//  saturate.addEventListener("input",function(){
//     img.style.filter=`saturate(${saturate.value}%)`
// });
// contrast.addEventListener("input",function(){
//     img.style.filter=`contrast(${contrast.value}%)`
// });
// brightness.addEventListener("input",function(){
//     img.style.filter=`brightness(${brightness.value}%)`
// });
// sepia.addEventListener("input",function(){
//     img.style.filter=`sepia(${sepia.value}%)`
// });
// grayscale.addEventListener("input",function(){
//     img.style.filter=`grayscale(${grayscale.value}%)`
// });
// blur.addEventListener("input",function(){
//     img.style.filter=`blur(${blur.value}px)`
// });
// huerotate.addEventListener("input",function(){
//     img.style.filter=`hue-rotate(${huerotate.value}deg)`
// });

