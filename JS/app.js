const h2 = document.querySelector("h2");

function merryChristmas() {
  const christMas = new Date("2022-12-25");
  const date = new Date();
  const dDayCalculator = christMas - date; //자바스크립트는 밀리세컨즈 단위로 나타낸다.
  const dDay = String(Math.floor(dDayCalculator / (1000 * 60 * 60 * 24)));
  const dHours = String(
    Math.floor((dDayCalculator / (1000 * 60 * 60)) % 24)
  ).padStart(2, "0");
  const dMinutes = String(
    Math.floor((dDayCalculator / (1000 * 60)) % 60)
  ).padStart(2, "0");
  const dSeconds = String(Math.floor((dDayCalculator / 1000) % 60)).padStart(
    2,
    "0"
  );
  h2.innerText = `Merry Christ Mas!\n${dDay}:${dHours}:${dMinutes}:${dSeconds}`;
}

setInterval(merryChristmas, 1000);
