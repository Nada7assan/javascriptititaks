function ValidDate (strDate) {
if (strDate.length ==10  || strDate.charAt(2) == "-" ||  strDate.charAt(5) == "-" ){
if (strDate.substring(0,2) > 0 && strDate.substring(0,2) < 31 ) {
    if (strDate.substring(3,5) > 0 && strDate.substring(3,5) < 12 ) {
        return true;
    }
}

}
else {return false;}

}


do {var userInput = prompt("Please, Enter your Birthday Date");}
while (!ValidDate(userInput));


function dateGet(userInput) {

            var day = userInput.substring(0,2)
           
            var month1 = userInput.substring (3,5) ;
            var month = month1 - 1
           
            var year = userInput.substring(6,10);
    
           return new Date (year, month , day);
    
        };

var dataObj = dateGet(userInput);

if (userInput)
    { alert("Your Date is " + dataObj.toDateString())}
else {alert("Wong Date Format")}















//     function dateGet(userInput) {

//         var day = userInput.substring(0,2)
       
//         var month1 = userInput.substring (3,5) ;
//         var month = month1 - 1
       
//         var year = userInput.substring(6,10);

//        var dataObj =  new Date (year, month , day);
  
//        return new Date (year, month , day);

//     };

//     var dataObj = dateGet(userInput);

//     alert("Your Date is " + dataObj.toDateString())
// }
// else {
//     alert("Wong Date Format")
// }

// validation for numbers
































