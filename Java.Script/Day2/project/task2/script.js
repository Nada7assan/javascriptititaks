alert("Welcome to my site");
do {
    var res = prompt("Please enter your name");
    var colorName = prompt("choose a color red, green or blue");
}
while(isFinite(res) && isFinite(colorName));

switch (colorName) {
    case "red":
        document.write("<h2 style='color:" + colorName + ";'> Welcom " + res + "<h2>");
        break;
    case "green":
        document.write("<h2 style='color:" + colorName + ";'> Welcom " + res + "<h2>");
        break;
    case "blue":
        document.write("<h2 style='color:" + colorName + ";'> Welcom " + res + "<h2>");
        break;
    default:
        document.write("<h2>Welcom " + res + "<h2>");
        break;
}










