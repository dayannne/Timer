// ---------- DOM --------------- //
const hrs = document.querySelector('.times-hrs-text');
const min = document.querySelector('.times-min-text');
const sec = document.querySelector('.times-sec-text');

const startBtn = document.querySelector('.start-btn');
const disStartBtn = document.querySelector('.start-btn-disabled');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const disResetBtn = document.querySelector('.reset-btn-disabled');

// ---------- 타이머 버튼 클릭 이벤트 -------------- //
sec.addEventListener('click', () => {
  startBtn.classList.remove('hidden');
  disStartBtn.classList.add('hidden');
  resetBtn.classList.remove('hidden');
  disResetBtn.classList.add('hidden');

  addTime = parseInt(sec.textContent) + 10;
  if (addTime > 60) {
    sec.textContent = '00';
  } else {
    sec.textContent = addTime;
  }
});
min.addEventListener('click', () => {
  startBtn.classList.remove('hidden');
  disStartBtn.classList.add('hidden');
  resetBtn.classList.remove('hidden');
  disResetBtn.classList.add('hidden');
  addTime = parseInt(min.textContent) + 1;
  if (addTime > 60) {
    min.textContent = '00';
  } else {
    if (addTime < 10) min.textContent = `0${addTime}`;
    else min.textContent = addTime;
  }
});
hrs.addEventListener('click', () => {
  startBtn.classList.remove('hidden');
  disStartBtn.classList.add('hidden');
  resetBtn.classList.remove('hidden');
  disResetBtn.classList.add('hidden');
  addTime = parseInt(hrs.textContent) + 1;
  if (addTime > 60) {
    hrs.textContent = '00';
  } else {
    if (addTime < 10) hrs.textContent = `0${addTime}`;
    else hrs.textContent = addTime;
  }
});
// -------------------- 리셋 ------------------ //
resetBtn.addEventListener('click', () => {
  hrs.textContent = '00';
  min.textContent = '00';
  sec.textContent = '00';
});

startBtn.addEventListener('click', () => {
  startBtn.classList.add('hidden');
  pauseBtn.classList.remove('hidden');
  startTimer();
});
pauseBtn.addEventListener('click', () => {
  pauseBtn.classList.add('hidden');
  startBtn.classList.remove('hidden');
});

function startTimer() {}
function setTimeInterval() {}
