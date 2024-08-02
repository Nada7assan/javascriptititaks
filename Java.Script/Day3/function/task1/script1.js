function test2Parameters (x,y) {
    if (arguments.length !== 2) {
        throw ("error, only accept 2 parameters")
    }
    sum = x + y;
    return sum
}

// test1

// console.log (test2Parameters (5,10,16));

// test2
console.log (test2Parameters (5,16));
