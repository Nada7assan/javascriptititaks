function numberValue () {
for (var i =0 ; i< arguments.length; i++) {
    if (typeof arguments[i] != "number" ){
        throw ("error, this is not a number")
       }
       
}
 
}

numberValue(125);