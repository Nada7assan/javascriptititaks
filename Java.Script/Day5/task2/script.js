function validName (name) {
    var nameRegex =  /^[a-zA-Z]+$/;
    if (nameRegex.test(name)) {
return true;
    }
    else { return false;}
}


// // Ask the user for number of persons wanted to be entered

do {
    var input = prompt ("How Many persons you wanna enter");
}
while (isNaN(input) || input <= 0 );


var numInput = Number (input);

// ask for users’ information

var arrName = []
var arrAge = []

for (var i = 0 ; i < numInput ; i++)
    
    {do {var userName = prompt ("Enter name for person " + (i + 1) + ":")

     }
    while (isFinite(userName) || userName.length < 3 || userName.length >= 10  || !validName(userName));
        arrName.push(userName);
      
    do {
        var userAge = prompt ("Enter age for person " + (i + 1) +":")
    }    
    while (isNaN(userAge) || userAge <= 10 || userAge >= 60 )
        arrAge.push(Number(userAge));
}


console.log(arrName.length);

// print users’ information in HTML Table
var tbody = document.getElementsByTagName('tbody')[0];

for (var i =0 ; i < arrName.length  ; i++)
{
   var tr = document.createElement('tr');
   tr.innerHTML = "<td>" + arrName[i] + "</td><td>" + arrAge[i] + "</td>";
   tbody.appendChild(tr);
   
} 
var table = document.querySelector('.table');
table.style.visibility = 'visible';




