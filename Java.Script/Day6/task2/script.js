
var input = document.getElementById("Answer");

input.addEventListener ("keydown" , function(e){
  e.preventDefault();
})

function EnterNumber(num) {
  input.value += num
}

var arrOperator = ["+","-","/","*"]

function EnterOperator(operator) {
  
if(!arrOperator.includes(input.value[input.value.length - 1])) {
  input.value += operator;

}}

function EnterClear() {
  input.value = "";
}

function EnterEqual() {

  if (eval(input.value) == "Infinity") {
    input.value = "Error"
  }
 else {input.value = eval(input.value)}
}






