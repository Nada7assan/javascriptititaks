function changeColor (){
var r = Math.floor(Math.random() * 256);
var g = Math.floor(Math.random() * 256);
var b = Math.floor(Math.random() * 256);
var color = "rgb(" + r + "," + g + "," + b + ")";
return color;
}


var divv = document.getElementById('orignal');


divv.addEventListener ("click" , function(){

    var copyDiv = divv.cloneNode(); 
    copyDiv.style.backgroundColor = changeColor();
    copyDiv.innerText = "This is copy container";

    document.body.appendChild(copyDiv); 
    
})


























