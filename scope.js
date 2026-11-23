var x = 10;
let y = 10;
console.log(x);

function scope () {
    var y = 12;

    if (true) {
        var z = 10;
        let a = 11
    }
    console.log(`function x ${z}`);
}
scope();
console.log(y);