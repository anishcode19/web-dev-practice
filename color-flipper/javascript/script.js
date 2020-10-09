const colors =['#fff','#f1f5f8','green','red',"rgba(133,122,200)","#f15025"];

const btn = document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
  // get ramdom number between 0 and 3
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor=colors[randomNumber];
  color.textContent=colors[randomNumber];
})


function getRandomNumber(){
  return Math.floor(Math.random() * colors.length);
}
