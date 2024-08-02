do {
var userInput  = prompt ("Please, Enter the value of a circle's radius"); 
radius = Number(userInput);
}
while (userInput <= 0 || isNaN(userInput))
var area = Math.PI * Math.pow(radius,2);
alert ("The area of the circle is " + area);






