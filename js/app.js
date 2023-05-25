// --------------------- DOM ---------------------- //
const times = document.querySelectorAll('.times-box p');
const hrs = document.querySelector('.times-hrs-text');
const min = document.querySelector('.times-min-text');
const sec = document.querySelector('.times-sec-text');

const startBtn = document.querySelector('.start-btn');
const disStartBtn = document.querySelector('.start-btn-disabled');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const disResetBtn = document.querySelector('.reset-btn-disabled');

// --------------------- 변수 ---------------------- //
let isPaused = false;
let intervalId;

// ---------- 타이머 버튼 클릭 이벤트 -------------- //
times.forEach((time) => {
  time.addEventListener('click', (el) => {
    startBtn.classList.remove('hidden');
    disStartBtn.classList.add('hidden');
    resetBtn.classList.remove('hidden');
    disResetBtn.classList.add('hidden');
    if (el.target === sec) {
      const addTime = parseInt(sec.textContent) + 10;
      if (addTime > 60) {
        sec.textContent = '00';
      } else {
        sec.textContent = addTime;
      }
    } else if (el.target === min) {
      const addTime = parseInt(min.textContent) + 1;
      if (addTime > 60) {
        min.textContent = '00';
      } else {
        if (addTime < 10) min.textContent = `0${addTime}`;
        else min.textContent = addTime;
      }
    } else if (el.target === hrs) {
      const addTime = parseInt(hrs.textContent) + 1;
      if (addTime > 60) {
        hrs.textContent = '00';
      } else {
        if (addTime < 10) hrs.textContent = `0${addTime}`;
        else hrs.textContent = addTime;
      }
    }
  });
});

// -------------------- 리셋 ------------------ //
resetBtn.addEventListener('click', () => {
  hrs.textContent = '00';
  min.textContent = '00';
  sec.textContent = '00';
  clearInterval(intervalId);
});

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  startTimer();
});
pauseBtn.addEventListener('click', () => {
  pauseBtn.classList.add('hidden');
  startBtn.classList.remove('hidden');
  pauseTimer();
});

function startTimer() {
  let hours = parseInt(hrs.textContent);
  let minutes = parseInt(min.textContent);
  let seconds = parseInt(sec.textContent);

  intervalId = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      sec.textContent = seconds < 10 ? `0${seconds}` : seconds;
    } else {
      seconds = 59;
      sec.textContent = seconds;
      if (minutes > 0) {
        minutes--;
        min.textContent = minutes < 10 ? `0${minutes}` : minutes;
      } else {
        minutes = 59;
        min.textContent = minutes;
        if (hours > 0) {
          hours--;
          hrs.textContent = hours < 10 ? `0${hours}` : hours;
        } else {
          clearInterval(intervalId);
          resetBtn.click();
          startBtn.classList.remove('hidden');
          pauseBtn.classList.add('hidden');
        }
      }
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(intervalId);
}
