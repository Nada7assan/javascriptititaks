var arr = [];
function sorting() {
  
for (var i=0 ; i<5 ;i++){
  do {
    var input = prompt ("Please, Enter Five numbers");

  }
  while (isNaN(input)) 
    arr.push(input)
 
}

}

sorting()



document.write ("<h1>Sorting</h1><hr>");
document.write ("<h4 style='color:red;'>You've entered the value of "+ arr + "</h4>");
var arrAscending = arr.sort(function(a, b){return a - b});
document.write ("<h4 style='color:red;'>Your value after being sorted ascending "+ arrAscending +"</h4>");
var arrDescending = arr.sort(function(a, b){return b - a});
document.write ("<h4 style='color:red;'>Your value after being sorted descending "+ arrDescending +"</h4>");




