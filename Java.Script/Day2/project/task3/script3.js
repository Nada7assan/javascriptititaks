var message = prompt("Enter a message");

for (var i = 0; i < 6; i++) {
    document.write('<h' + (i + 1) + '>' + message + '</h' + (i + 1) + '>');
}