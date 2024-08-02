

function getDate (dateStr){

    var day = dateStr.substring(0,2)

    var month = dateStr.substring (3,5) ;

    var year = dateStr.substring(6);

    var date = new Date (year, month - 1 , day);

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log(days[date.getDay()]);
    return days[date.getDay()];

};


// }



function ValidDate(strDate) {
    if (strDate.length == 10 && strDate.charAt(2) == "-" && strDate.charAt(5) == "-") {
        if (strDate.substring(0, 2) > 0 && strDate.substring(0, 2) < 31) {
            if (strDate.substring(3, 5) > 0 && strDate.substring(3, 5) < 12) {
                return true;
            }
        }

    }
    else { return false; }

}


var userInput = prompt("Please, Enter your Birthday Date");
if(ValidDate(userInput)){
    alert(getDate(userInput))
}else
{
    alert("invalid date format")
}
    


// function ValidDate (strDate) {
//     if (strDate.lenght ==10  || strDate.charAt(2) == "-" ||  strDate.charAt(5) == "-" ){
//     if (strDate.substring(0,2) > 0 && strDate.substring(0,2) < 31 ) {
//         if (strDate.substring(3,5) > 0 && strDate.substring(3,5) < 12 ) {
//             return true;
//         }
//     }

//     }
//     else {return false;}

//     }




// // getDate("17-10-1996");

// // validation for numbers


//     do {var userInput = prompt("Please, Enter your Birthday Date");}
//     while (!ValidDate(userInput));

//     if (ValidDate(userInput)) {
//         var x = getDate(userInput)

//         console.log(x);
//         alert (x)
//     }
// else {
// alert ("error")