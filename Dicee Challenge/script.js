
window.addEventListener("DOMContentLoaded",function(){
  const player1img = document.querySelector(".img1");
  player1img.setAttribute("src",`images/dice${player1Random}.png`);

  const player2img = document.querySelector(".img2");
  player2img.setAttribute("src",`images/dice${player2Random}.png`);
});

const player1Random = randomNum();
const player2Random = randomNum();

function randomNum(){
  return Math.floor((Math.random()*6)+1);
}

if(player1Random>player2Random){
  document.querySelector(".result").innerHTML="♦Player 1 is winner."
}else if(player1Random < player2Random){
  document.querySelector(".result").innerHTML="Player 2 is winner.♦"
}else{
  document.querySelector(".result").innerHTML="Draw!"
}
