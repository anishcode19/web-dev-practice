const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById("btn");
const color= document.querySelector(".color");

btn.addEventListener("click",function(){
  // we randomly genrate our hex value

  let hexVal="#";
  for (var i = 0; i < 6; i++) {
    hexVal=hexVal+hex[getRandomNumber()];
  }
  document.body.style.backgroundColor=hexVal;
  color.textContent=hexVal;
})

function getRandomNumber(){
  return Math.floor(Math.random() * hex.length);
}
