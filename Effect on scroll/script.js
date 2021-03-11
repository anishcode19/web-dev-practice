const skewedOne = document.querySelector(".skewedOne");
const skewedTwo = document.querySelector(".skewedTwo");

window.addEventListener("scroll",function(){
  const value1 = -15 + window.scrollY/45;
  const value2 = 15 - window.scrollY/45;
  skewedOne.style.transform = "skewY("+ value1 +"deg)";
  skewedTwo.style.transform = "skewY("+ value2 +"deg)"
})
