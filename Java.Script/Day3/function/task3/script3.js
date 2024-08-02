
function getargs() {
    var arr = [];

   for (let i = 0; i < arguments.length; i++) {
   arr.push(arguments[i]);

   }
   
arr.reverse();
document.write(arr)

}

getargs(1,2,3,4,5)

