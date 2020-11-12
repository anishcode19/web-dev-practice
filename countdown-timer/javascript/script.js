const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timesItem = document.querySelectorAll(".deadline-format h4");

let currentDate = new Date(2020, 11, 24, 11, 30, 0);
// console.log(currentDate);


const year = currentDate.getFullYear();//20202
const hour = currentDate.getHours();
const minute = currentDate.getMinutes();
const date = currentDate.getDate();

const day = weekdays[currentDate.getDay()];
const month = months[currentDate.getMonth()]

// console.log(year);
giveaway.textContent = `giveaway starts on ${day}, ${date} ${month} ${year}, ${hour}:${minute}am`;

// future time in miliseconds
const futureTime = currentDate.getTime();
// console.log(futureTime);
function getRemaindingTime() {
  const today = new Date().getTime();
  // console.log(today);
  const timeRemain = futureTime - today;
  const oneDay = 24 * 60 * 60 *1000;
  let daysRemaining = Math.floor(timeRemain / oneDay);
  // console.log(daysRemaining);
  const oneHour = 60 * 60 *1000;
  let hourRemaining = Math.floor(timeRemain / oneHour);
  console.log(hourRemaining);
  const oneMinute = 60 *1000;
  let minuteRemaining = Math.floor(timeRemain / oneMinute);
  console.log(minuteRemaining);
  const oneSecond = 1000;
  let secondRemaining = Math.floor(timeRemain / oneSecond);
  console.log(secondRemaining);
}

window.addEventListener("load",getRemaindingTime());
