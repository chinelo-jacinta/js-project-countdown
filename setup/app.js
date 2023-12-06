// const months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'August',
//   'September',
//   'October',
//   'November',
//   'December',
// ];
// const weekdays = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];
// const giveaway = document.querySelector('.giveaway');
// const deadline = document.querySelector('.deadline');
// const item = document.querySelectorAll('.deadline-format h4');
// const futureDate = new Date(2024, 10, 19, 17, 30, 0);
// // const futureDate = new Date(2023, 6, 20, 12, 30, 0);
// const year = futureDate.getFullYear();
// const date = futureDate.getDate();
// const hours = futureDate.getHours();
// const minutes = futureDate.getMinutes();
// // getting month
// let month = futureDate.getMonth();
// month = months[month];
// // getting day
// let day = futureDate.getDay();
// day = weekdays[day];
// giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minutes}pm`;

// // countDown section
// const futureTime = futureDate.getTime();
// function getRemainingTime() {
//   const presentTime = new Date().getTime();
//   const t = futureTime - presentTime;
//   // calculating milli secs
//   // 1s=1000ms
//   // 1m= 60s
//   // 1h= 60m
//   // 1d= 24hr

//   // converting them to milli secs
//   const oneDay = 24 * 60 * 60 * 1000;
//   const oneHour = 60 * 60 * 1000;
//   const oneMinute = 60 * 1000;
//   //for days
//   let days = t / oneDay;
//   days = Math.floor(days);
//   //for hours
//   let hours = (t % oneDay) / oneHour;
//   hours = Math.floor(hours);
//   let minutes = (t % oneHour) / oneMinute;
//   minutes = Math.floor(minutes);
//   let secs = (t % oneMinute) / 1000;
//   secs = Math.floor(secs);

//   // formatting to tens
//   function format(item) {
//     if (item < 10) {
//       return `0${item}`;
//     }
//     return item;
//   }

//   // set values arrays
//   const values = [days, hours, minutes, secs];
//   item.forEach(function (item, index) {
//     item.innerHTML = format(values[index]);
//   });
//   if (t < 0) {
//     deadline.innerHTML = `<h4 class="expired" >SORRY THIS GIVEAWAY ENDED</h4>`;
//   }
// }
// // setting countdown
// let countDown = setInterval(getRemainingTime, 1000);
// getRemainingTime();

//============================================
//============================================
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const item = document.querySelectorAll('.deadline-format h4');
const futureDate = new Date(2023, 6, 25, 0, 4, 0);
// const futureDate = new Date(2023, 6, 22, 17, 30, 0);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const day = weekdays[futureDate.getDay()];
giveaway.textContent = `someone becomes a year older on ${day}, ${date} ${month}`;

// for the countdown
function getCountDown() {
  const futureTime = futureDate.getTime();
  const presentTime = new Date().getTime();
  const t = futureDate - presentTime;
  // converting time to millisecs
  // 1sec= 1000ms
  // 1min = 60secs
  // 1hr = 60mins
  // 1day = 24hrs

  // now convert the millisecs in t to days,hours,minutes and secs
  const oneDay = 24 * 60 * 60 * 1000;
  const forHour = 60 * 60 * 1000;
  const ForMin = 60 * 1000;

  // for days
  const days = Math.floor(t / oneDay);
  // for hours
  // that means divide t( which is the millsecs of future date) by oneDay then provide the remainder and then further divide the remainder by forHour to get the remaining hours values after minusing d days
  const hours = Math.floor((t % oneDay) / forHour);
  // for minutes
  const minute = Math.floor((t % forHour) / ForMin);
  // for minutes
  const secs = Math.floor((t % ForMin) / 1000);

  // formating number to tens
  function formating(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }

  // iterate over the items
  const values = [days, hours, minute, secs];
  item.forEach(function (item, index) {
    item.textContent = formating(values[index]);
  });
  if (t < 0) {
    deadline.innerHTML = `<h4 class="expired" >HAPPY HAPPY BIRTHDAY DADDY🎉✨.
    i pray all your wishes come true. 

    you will forever be my superhero!💕
    </h4>
    `;
  }
}
const countDown = setInterval(getCountDown, 1000);
getCountDown();
