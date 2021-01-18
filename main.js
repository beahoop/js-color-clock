const clock = document.querySelector('.clock');

let isHovering = false;
const clockDisplay = document.querySelector('.clock-display')
const progressBar = document.querySelector('.clock-progress-bar')


function  setDate(){
const now = new Date();
let seconds, hour, mins;

if(isHovering){
  seconds = ('0' + now.getSeconds().toString(16)).slice(-2);
  mintues = ('0' + now.getMinutes().toString(16)).slice(-2);
  hour = ('0' + now.getHours().toString(16)).slice(-2);
  clock.style.backgroundColor = `#${hour}${mintues}${seconds}`
} else {
  seconds = ('0' + now.getSeconds()).slice(-2);
  mintues = ('0' + now.getMinutes()).slice(-2);
  hour = ('0' + now.getHours()).slice(-2);

}
console.log(isHovering);


clockDisplay.innerHTML = `${hour}:${mintues}:${seconds}`
progressBar.style.width = `${seconds/60 *14}rem`;


}
clock.addEventListener('mouseover', () => isHovering = true);
clock.addEventListener('mouseout', ()=> isHovering = false);


setInterval(setDate, 1000);
