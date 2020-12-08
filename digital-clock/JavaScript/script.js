setInterval(setTime,1000);

const hourHand = document.querySelector('#hour_hand');
const minuteHand = document.getElementById('minute_hand');
const secondHand = document.getElementById('second_hand');

function setTime(){
  const currentDate = new Date();
  const hour = currentDate.getHours();
  // console.log(hour);
  hourHand.innerHTML = hour;
  const minute = currentDate.getMinutes();
  // console.log(minute);
  minuteHand.innerHTML = minute;
  const second = currentDate.getSeconds();
  // console.log(second);
  secondHand.innerHTML = second;
}

window.addEventListener("load",setTime());
