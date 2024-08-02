do {
    var input = prompt ("Please, Write anything");
}
while (isFinite(input));
var count = 0
function countE (input)
{
    for (var i = 0; i< input.length ; i++ ) {
        
        if ( input[i].toLowerCase() == "e") {
            count++;
        }
    }
   return count;
    };

var eCount = countE(input);
    document.write ("The numer of 'E' in the word equal " + eCount)
