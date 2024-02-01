const timer = ({
  timerDaysId,
  timerHoursId,
  timerMinutesId,
  timerSecondsId,
  deadline,
}) => {
  const timerDays = document.getElementById(timerDaysId);
  const timerHours = document.getElementById(timerHoursId);
  const timerMinutes = document.getElementById(timerMinutesId);
  const timerSeconds = document.getElementById(timerSecondsId);

  console.log(timerDays);
  console.log(timerHours);
  console.log(timerMinutes);
  console.log(timerSeconds);

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let diff = dateStop - dateNow;

    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor(timeRemaining / 60 / 60 / 24);
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    let nullDays = days;
    nullDays > -1 && nullDays < 10 && diff >= 0
      ? (nullDays = `${'0' + days}`)
      : diff < 0
      ? (nullDays = `00`)
      : (nullDays = `${days}`);

    let nullHours = hours;
    nullHours > -1 && nullHours < 10 && diff >= 0
      ? (nullHours = `${'0' + hours}`)
      : diff < 0
      ? (nullHours = `00`)
      : (nullHours = `${hours}`);

    let nullMinutes = minutes;
    nullMinutes > -1 && nullMinutes < 10 && diff >= 0
      ? (nullMinutes = `${'0' + minutes}`)
      : diff < 0
      ? (nullMinutes = `00`)
      : (nullMinutes = `${minutes}`);

    let nullSeconds = seconds;
    nullSeconds > -1 && nullSeconds < 10 && diff >= 0
      ? (nullSeconds = `${'0' + seconds}`)
      : diff < 0
      ? (nullSeconds = `00`)
      : (nullSeconds = `${seconds}`);

    return {
      timeRemaining,
      nullDays,
      nullHours,
      nullMinutes,
      nullSeconds,
      diff,
    };
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.diff < 0) {
      clearInterval(timerId);
    }

    timerDays.textContent = getTime.nullDays;
    timerHours.textContent = getTime.nullHours;
    timerMinutes.textContent = getTime.nullMinutes;
    timerSeconds.textContent = getTime.nullSeconds;
  };

  //setInterval(updateClock, 1, deadline);

  const timerId = setInterval(updateClock, 1000, deadline);
};

export default timer;
