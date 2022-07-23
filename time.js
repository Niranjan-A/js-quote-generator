let today = new Date();

function showTime() {
  let currentHour = today.getHours(); // 0 - 23
  let currentMinutes = today.getMinutes(); // 0 - 59
  let currentSession = "AM";

  if (currentHour == 0) {
    currentHour = 12;
  }

  if (currentHour > 12) {
    currentHour = currentHour - 12;
    currentSession = "PM";
  }

  currentHour = currentHour < 10 ? "0" + currentHour : currentHour;
  currentMinutes = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

  let currentTime = currentHour + ":" + currentMinutes + " " + currentSession;
  document.getElementById("clock").textContent = currentTime;
  setTimeout(showTime, 1000);
}

function showDayAndDate() {
  let currentDate = today.getDate(); // 0 - 31
  let currentMonth = today.getMonth() + 1; // 0 - 11
  let currentYear = today.getFullYear(); // Current year
  const DAYS_OF_THE_WEEK = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let dayIndex = today.getDay();
  let currentDay = DAYS_OF_THE_WEEK[dayIndex];

  currentDate = currentDate < 10 ? "0" + currentDate : currentDate;
  currentMonth = currentMonth < 10 ? "0" + currentMonth : currentMonth;

  document.getElementById("day-and-date").textContent =
    currentDay + ", " + currentDate + "/" + currentMonth + "/" + currentYear;
}

showTime();
showDayAndDate();
