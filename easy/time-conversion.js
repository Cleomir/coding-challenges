// Convert 12-hour time format to 24-hour time format
// 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock
function timeConversion(s) {
  //  get hour and period
  let hour = Number(s.slice(0, 2));
  const period = s.slice(s.length - 2);
  let stringHour = "";

  //  convert to 24-hour format
  if (hour === 12 && period === "AM") {
    stringHour = "00";
  } else if (hour === 12 && period === "PM") {
    stringHour = "" + hour;
  } else if (period === "PM") {
    hour += 12;
    stringHour = "" + hour;
  } else {
    // AM case
    stringHour = "0" + hour;
  }

  // return the 24-hour format
  return stringHour.concat(s.slice(2, s.length - 2));
}

console.log(timeConversion("07:05:45PM")); // 19:05:45
console.log(timeConversion("12:00:00AM")); // 00:00:00
console.log(timeConversion("12:00:00PM")); // 12:00:00
console.log(timeConversion("06:40:03AM")); // 06:40:03
