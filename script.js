const pages=document.querySelectorAll(".page");
let current=0;

function showPage(i){
  pages.forEach((page,index)=>{
    page.classList.toggle("active",index===i);
  });
}

function nextPage(){
  if(current<pages.length-1){
    current++;
    showPage(current);
  }
}

/* Floating Hearts */
const container=document.querySelector(".hearts");
const icons=["❤","💖","💕","💗"];

function createHeart(){
  const h=document.createElement("div");
  h.className="heart";
  h.innerHTML=icons[Math.floor(Math.random()*icons.length)];
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(12+Math.random()*18)+"px";
  h.style.animationDuration=(4+Math.random()*4)+"s";
  container.appendChild(h);
  setTimeout(()=>h.remove(),8000);
}

setInterval(createHeart,500);
showPage(0);