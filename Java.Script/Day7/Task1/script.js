let input = document.getElementsByTagName("input");
var errMsg = document.getElementsByTagName("span");
var btn = document.querySelector("input[type='submit']");
var tbody = document.getElementsByTagName('tbody')[0];
var table =  document.getElementsByTagName("table")[0];

btn.addEventListener("click",function(e){
    // name
    if (input[0].value === ""){
       e.preventDefault();
       errMsg[0].innerText = "This Feild is required";
    }
    else if (isFinite(input[0].value)){ 
        e.preventDefault();
        errMsg[0].innerText = "Characters only";
    }
    else {errMsg[0].style.display="none";
    input[0].value == "";
    }
    // age
    if (input[1].value === ""){
        e.preventDefault();
        errMsg[1].innerText = "This Feild is required";
     }
     else if (isNaN(input[1].value)){ 
         e.preventDefault();
         errMsg[1].innerText = "Numbers only";
     }
     else {errMsg[1].style.display="none";
     }
    //  mail
    if (input[2].value === ""){
        e.preventDefault();
        errMsg[2].innerText = "This Feild is required";
     }
     else if (!validEmail(input[2].value)){
        errMsg[2].innerText = "Please Follow the rule ";
     }
     else {errMsg[2].style.display="none";
     }

     if (input[0].value !== "" && input[1].value !== "" && validEmail(input[2].value)){
        
        table.style.visibility = 'visible';
        var tr = document.createElement('tr');
         tr.innerHTML = "<td>" + input[0].value + "</td><td>" + input[1].value + "</td><td>" + input[2].value + "</td>";
         tbody.appendChild(tr);
         console.log("click");
         reset();
     }
     
     
})

input[4].addEventListener("click",function(){
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
    errMsg[0].style.display="none";
    errMsg[1].style.display="none";
    errMsg[2].style.display="none";
})

function validEmail (email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
return true;
    }
    else { return false;}
}

function reset (){
    input[0].value = "";
    input[1].value = "";
    input[2].value = "";
}



