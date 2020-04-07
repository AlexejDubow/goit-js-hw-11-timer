"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  start() {
    const timerInterval = setInterval(() => {
      const marcupId = document.querySelector(this.selector);
      const marcupDays = marcupId.querySelector('[data-value="days"]');
      const marcupHours = marcupId.querySelector('[data-value="hours"]');
      const marcupMinutes = marcupId.querySelector('[data-value="mins"]');
      const marcupSeconds = marcupId.querySelector('[data-value="secs"]');

      const time = this.targetDate - Date.now();

      if (time === 0 || time < 0) {
        clearInterval(timerInterval);
        marcupDays.innerHTML = "00";
        marcupHours.innerHTML = "00";
        marcupMinutes.innerHTML = "00";
        marcupSeconds.innerHTML = "00";
      } else {
        const days = this.padStart(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.padStart(
          Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        const mins = this.padStart(
          Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
        );
        const secs = this.padStart(Math.floor((time % (1000 * 60)) / 1000));

        marcupDays.innerHTML = days;
        marcupHours.innerHTML = hours;
        marcupMinutes.innerHTML = mins;
        marcupSeconds.innerHTML = secs;
      }
    }, 1000);
  }

  padStart(item) {
    return String(item).padStart(2, "0");
  }
}

const mewTimer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Apr 08, 2021"),
});

mewTimer.start();
