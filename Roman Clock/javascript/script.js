setInterval(setClock,1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]'); //we can write .second(class name also)

function setClock(){
  const currentDate = new Date();
  const secondsRatio = currentDate.getSeconds()/60;
  // console.log(secondsRatio*360);
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; //we add secondRatio for smooth rotation otherwise it will increase in sudden
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand,secondsRatio)
  setRotation(minuteHand,minutesRatio)
  setRotation(hourHand,hoursRatio)

}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation',rotationRatio * 360)
}

// window.addEventListener("load",setClock());
// or
setClock();
