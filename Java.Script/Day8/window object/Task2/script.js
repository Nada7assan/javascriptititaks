var btn = document.getElementsByTagName("button")[0];
var clockDiv = document.getElementsByClassName("clock")[0];
var divAlert = document.getElementsByClassName("alert")[0];
var timer;

function startTime() {
    var date = new Date();
    clockDiv.innerHTML = date.toLocaleTimeString();
}
 

btn.addEventListener("click", function () {
    divAlert.innerHTML = "Clock Started";

   timer = setInterval(() => {
        startTime();
    }, 1000);
})

// Stop
document.addEventListener("keydown",function(e){
    e.preventDefault();
if (e.code === "KeyW" && e.altKey === true){
    divAlert.textContent = "Clock Stopped";
clearInterval(timer);
}
})

