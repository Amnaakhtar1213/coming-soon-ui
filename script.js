const launchDate = new Date(2026, 8, 15, 12, 0);

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const emailForm = document.getElementById("email-form");
const successMsg = document.getElementById("success");

console.log(successMsg);

function updateCountdown() {
  const now = new Date();
  const timeDiff = launchDate - now;

  if (timeDiff <= 0) {
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    return;
  }
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");


}

updateCountdown();
setInterval(updateCountdown, 1000);


emailForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const button = emailForm.querySelector("button");
  button.innerHTML = "<i class='fa-solid fa-spinner fa-spin'></i>";
  button.disabled = true;

  setTimeout(() => {
    emailForm.classList.add("hidden");
    successMsg.classList.remove("hidden");
  }, 1000);
})