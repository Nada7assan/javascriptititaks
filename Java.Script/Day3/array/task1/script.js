
do { var element1 = prompt ("Please, Enter the first number");}
while (isNaN(element1));
   
do { var element2 = prompt ("Please, Enter the Second number");}
while (isNaN(element2));  
   
do { var element3 = prompt ("Please, Enter the Third number");}
while (isNaN(element3));
    
input1 = Number(element1)
input2 = Number(element2)
input3 = Number(element3)  

var inputArr = new Array (input1, input2, input3) ;

var sum = inputArr [0] + inputArr [1] + inputArr [2]
 var multi = inputArr [0] * inputArr [1] + inputArr [2]
 var div = inputArr [0] / inputArr [1] / inputArr [2]


document.write ("<h1>Adding -- Multiplying -- and dividing 3 values</h1><hr>")
document.write ("<h4 style='color:red;'>sum of the 3 values "+ input1 + "+" + input2 + "+" + input3 + "=" + sum + "</h4>")
document.write ("<h4 style='color:red;'>multiplication of the 3 values "+ input1 + "*" + input2 + "*" + input3 + "=" + multi + "</h4>")
if (input2 === 0 || input3 === 0) {
    document.write ("<h4>Error, Can't devide by zero</h4>")
}
else {document.write ("<h4 style='color:red;'>multiplication of the 3 values "+ input1 + "/" + input2 + "/" + input3 + "=" + div + "</h4>")}
