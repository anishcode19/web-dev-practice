setInterval(setTime,1000);

const hourHand = document.querySelector('#hour_hand');
const minuteHand = document.getElementById('minute_hand');
const secondHand = document.getElementById('second_hand');
const ampm = document.getElementById('AM_PM');

function setTime(){
  const currentDate = new Date();
  let hour = currentDate.getHours();
  if(hour >= 12){
    hour= hour%12;
    ampm.innerHTML ="PM";
  }else {
    hour= hour;
    ampm.innerHTML ="AM";
  }


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
