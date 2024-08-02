var input = document.querySelector("input");

input.addEventListener("keydown",function(e){
    if (isNaN(e.key) && e.key != "Backspace"){      
    e.preventDefault();
    }
})