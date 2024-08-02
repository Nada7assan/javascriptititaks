do {
var res = prompt("Enter any word to determine whether it is palindrome or not");
} while (isFinite(res));
var caseConsider = confirm("Do you need to consider case sensetive or not");

var reverseRes = res.split('').reverse().join('');

if (caseConsider) {
    if (res == reverseRes) {
        document.write("The word " + res + " is a plaindrome");
    }
    else {
        document.write("The word " + res + " is not a plaindrome");
    }
}
else {
    if (res.toLowerCase() == reverseRes.toLowerCase()) {

        document.write("The word " + res + " is a plaindrome");
    }
    else {
        document.write("The word " + res + " is not a plaindrome");
    }


}






