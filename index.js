setInterval(() => {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrotation = 30 * htime + mtime / 2;
  mrotation = 6 * mtime;
  srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

let a;
let date;
let time;
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();

  const hours24 = a.getHours();
  const minutes = a.getMinutes();
  const seconds = a.getSeconds();

  const ampm = hours24 >= 12 ? "PM" : "AM";

  const hours12 = hours24 % 12;
  const displayHours12 = hours12 ? hours12 : 12; // the hour '0' should be '12'

  time24 =
    (hours24 < 10 ? "0" + hours24 : hours24) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  time12 =
    displayHours12 +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds) +
    " " +
    ampm;

  document.getElementById("time").innerHTML =
    "<strong>24-Hour: " +
    time24 +
    "<br>12-Hour: " +
    time12 +
    "<br>Day —> " +
    date +
    "</strong>";
}, 1000);
