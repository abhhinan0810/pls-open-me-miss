const noBtn=document.getElementById("noBtn");
const yesBtn=document.getElementById("yesBtn");
const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const msg=document.getElementById("message");

const messages=[
"Oh c'mon👉👈",
"Pretty please?🎀",
"Nthuvadeyy🥲",
"Hear me out...",
"Angana paranja patoolaaa😗",
"vazhakk idan alla🫠",
"fine, your choice now🙂"
];

let count=0;
let yesSize=1;

noBtn.addEventListener("click",(e)=>{
e.preventDefault();

if(count<6){
msg.textContent=messages[count];

const maxX=window.innerWidth-150;
const maxY=window.innerHeight-100;

noBtn.style.left=Math.random()*maxX+"px";
noBtn.style.top=Math.random()*maxY+"px";

yesSize+=0.15;
yesBtn.style.transform=`scale(${yesSize})`;
}

count++;
});

yesBtn.addEventListener("click",()=>{
page1.classList.add("hidden");
page2.classList.remove("hidden");
});

const dateSelect=document.getElementById("dateSelect");
dateSelect.innerHTML='<option value="I will call you">📞 I will call you</option>';

for(let i=0;i<21;i++){
let d=new Date();
d.setDate(d.getDate()+i);
let option=document.createElement("option");
option.value=d.toDateString();
option.textContent=d.toDateString();
dateSelect.appendChild(option);
}

const timeSelect=document.getElementById("timeSelect");
timeSelect.innerHTML='<option value="I will call you">📞 I will call you</option>';

for(let h=5;h<=22;h++){
let option=document.createElement("option");
let display=(h>12?h-12:h)+":00 "+(h>=12?"PM":"AM");
option.value=display;
option.textContent=display;
timeSelect.appendChild(option);
}