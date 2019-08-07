document.addEventListener("DOMContentLoaded", function(event) { 
  changeTime();
  var divseconds = document.getElementById("seconds");
  var secbutton = document.getElementById("secbutton")
  secbutton.addEventListener("click", function() {
    toggleDisplay(divseconds, secbutton)
  });
  setInterval(function(){ 
    changeTime();
   }, 1000);
 });

function changeTime(){
  const date = new Date;
  const days = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function toggleDisplay(element, button){
  if (element.style.display === "none") {
    element.style.display = "block";
    button.innerHTML = "Switch Seconds OFF"
  } else {
    element.style.display = "none";
    button.innerHTML = "Switch Seconds ON"
  }
}