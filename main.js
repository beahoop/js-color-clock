// console.log(new Date().getHours().getMinutes().getSeconds());

// setInterval(function(){ console.log(new Date()); }, 1000);
//I want the cosole log to only give back just the time
// then i want to set it to a Variables
// the var should replace 00:00:00 in the html

  function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.querySelector('.clock-display').innerHTML = hour + " : " + min + " : " + sec;
  //adding time to the div
    var t = setTimeout(function(){ currentTime() }, 1000);
    //setting timer
    function percentage(num){
      return (num/60).toString() + "em";
    }

    var progressBarFull = document.querySelector('.clock-progress-bar');
   progressBarFull.style.width = percentage(sec);
   //needs to return the sec percent as a data type css can read

  // Using the percent above, dynamically modify the length of the timer bar
  // // document.querySelector('.clock-progress-bar').innerHTML =
    console.log(percentage(sec));
    // document.getElementsByClassName('clock-progress-bar').innerHTML = percentage(sec);


}
function updateTime(x) {
  if (x < 10) {
    return "0" + x;
  }
  else {
    return x;
  }
}

currentTime(); /* calling currentTime() function to initiate the process */


//console.log the percentage of a minute that the current seconds represents (e.g., if 30 seconds have elapsed, console.log 0.5)




//are you hovering, then update when you are hovering
// am i hovering, if I am hovering give me the time, if i am not hovering give me the hexcode
//mouseover, mouseout
