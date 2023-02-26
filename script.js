import playList from './playList.js';

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
function setLocalStorageName() {
  localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorageName)

function getLocalStorageName() {
  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }
}
window.addEventListener('load', getLocalStorageName)

const body = document.querySelector('body');

function getRandomNum(min = 1, max = 20) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNum = getRandomNum();

function setBg() {
  const timeOfDay = getTimeOfDay();
  const bgNum = randomNum + '';
  const picNum = bgNum.padStart(2, "0");

  const url = `https://marinapolishchuk.github.io/stage1-tasks/images/${timeOfDay}/${picNum}.jpg`

  const img = new Image();
  img.src = url;
  img.onload = () => {
    body.style.backgroundImage = `url('${url}')`;
  };
}
setBg();

const nextBt = document.querySelector('.slide-next');
nextBt.addEventListener('click', () => {
  randomNum++;
  if (randomNum > 20) {
    randomNum = 1
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

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
city.value = "Minsk";
const windSpeed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');



async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=d07b334afb5ad289e48086333ead8f2a&units=metric`;
  const res = await fetch(url);
  const data = await res.json();

  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  windSpeed.textContent = `Wind speed: ${data.wind.speed}m/c`;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
}
getWeather()

function setCity(event) {
  if (event.code === 'Enter') {
    getWeather();
    city.blur();
  }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);


function setLocalStorage() {
  localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)

function getLocalStorage() {
  if (localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getLocalStorage)



const quotes = document.querySelector('.quote');
const author = document.querySelector('.author');
let quotesNumber = getRandomNum(0, 50);
let quotesData = [];

async function getQuotes() {
  const quotesUrl = 'data.json';
  const res = await fetch(quotesUrl);
  quotesData = await res.json();
  newQuotes();
  
}
getQuotes();

function newQuotes(){
  const q = quotesData[quotesNumber];
  quotes.textContent = q.text;
  author.textContent = q.author;
}

const changeQuoteEl = document.querySelector('.change-quote');
changeQuoteEl.addEventListener('click', () => {
  quotesNumber++;

  if (quotesNumber>50){
    quotesNumber = 0;
  }
  newQuotes();
})

const audioButton = document.querySelector('.play.player-icon');
const audio = document.querySelector('audio');
let isPlay = false;
let songCount =4;
let audioNum = getRandomNum(0, songCount-1);

function playAudio() {
  audio.currentTime = 0;
  audio.play();
  isPlay=true;
  audioButton.classList.add('pause');
  activePlayItem();
}
function pauseAudio() {
  audio.pause();
  isPlay = false;
  audioButton.classList.remove('pause');
  activePlayItem();
}

function playPause(){
  if (!isPlay){
    playAudio();
    
  } else{
    pauseAudio();
  }
}

function toggleBtn() {
  playPause();

}
audioButton.addEventListener('click', toggleBtn);

const nextBtn = document.querySelector('.play-next');
const prevBtn = document.querySelector('.play-prev');
prevBtn.addEventListener('click', playPrev );
nextBtn.addEventListener('click', playNext);

function playNext(){
  audioNum ++;
  if (audioNum >= songCount){
    audioNum=0;
  };
  setAudio();
  playAudio();
}
function playPrev(){
  audioNum--;
  if (audioNum < 0 ) {
    audioNum = songCount-1;
  };
  setAudio();
  playAudio();
}

function setAudio(){
  const url = playList[audioNum].src

  audio.src = url;
}
setAudio();
console.log(playList);

const playListContainer = document.querySelector('.play-list');

for (let i = 0; i < playList.length; i++) {

  const li = document.createElement('li');
  li.classList.add('play-item');
  li.textContent = `${playList[i].title}`;
  playListContainer.append(li);
}

function activePlayItem () {
  const liSet = document.querySelectorAll('.play-item');
  liSet.forEach((el, index) => {
    el.classList.remove('item-active');
    if (index === audioNum && isPlay){
      el.classList.add('item-active');
    }
  })
}
