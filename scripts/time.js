function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  document.getElementById("time").innerHTML = h + ":" + m;
  let t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

startTime();

// For todays date;
let currentdate = new Date();
let currentMonth = 0;
if (currentdate.getMonth() + 1 < 10) {
  currentMonth = "0" + (currentdate.getMonth() + 1);
} else {
  currentMonth = currentdate.getMonth() + 1;
}

let datetime =
  currentdate.getDate() +
  "/" +
  currentMonth +
  "/" +
  currentdate.getFullYear();

document.getElementById("date").innerHTML = datetime;
