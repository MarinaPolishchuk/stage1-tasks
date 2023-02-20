const time = document.querySelector('.time');
const day = document.querySelector('.date');
const greeting = document.querySelector('.greeting');

function showTime() {
  const date = new Date();
  const currentTime = date.toLocaleTimeString();
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}`;
  greeting.textContent = greetingText;
  showDate();
}
showTime();

function showDate() {
  const date = new Date();
  const options = { weekday: "long", month: 'long', day: 'numeric' };
  const currentDate = date.toLocaleDateString('en-US', options);
  day.textContent = currentDate;
}

function getTimeOfDay() {
  const date = new Date();
  const hours = date.getHours();
  let result = '';

  if (hours >= 6 && hours < 12) {
    result = 'morning'
  } else if (hours >= 12 && hours < 18) {
    result = 'afternoon'
  } else if (hours >= 18 && hours < 24) {
    result = 'evening'
  } else {
    result = 'night'
  }
  return result;

}

const name = document.querySelector('.name');

function setLocalStorage() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorage)

const body = document.querySelector('body');


function getRandomNum(min = 1, max = 20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNum = getRandomNum();

function setBg() {
  const timeOfDay = getTimeOfDay();
  const bgNum = randomNum +'';
  const picNum = bgNum.padStart(2,"0");

  const url = `https://marinapolishchuk.github.io/stage1-tasks/images/${timeOfDay}/${picNum}.jpg`

  const img = new Image();
  img.src = url;
    img.onload = () => {
      body.style.backgroundImage = `url('${url}')`;
  };
}
setBg();

const nextBt = document.querySelector('.slide-next');
nextBt.addEventListener ('click', ()=> {
  randomNum++;
  if(randomNum>20){
    randomNum =1
  }
  setBg();
})

const prevBt = document.querySelector('.slide-prev');
prevBt.addEventListener('click', () => {
  
  if (randomNum > 1) {
    randomNum--;
  } else {
    randomNum = 20
  }
  setBg();
})

