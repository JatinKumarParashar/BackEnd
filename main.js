const imgs=document.getElementById('imgs');

const img=document.querySelectorAll('#imgs img');
let index=0;
function carousel(){
index++;
if(index>=img.length){
    index=0;
}
imgs.style.transform=`translateX(${-index*500}px)`;
}
setInterval(carousel,1000);