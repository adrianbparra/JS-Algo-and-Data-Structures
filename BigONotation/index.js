// Which one is the best function?

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <=n; i++){
        total += i;
    }

    return total
}

function addUpToTwo(n) {
    return n * (n + 1) / 2
}

let t1 = Date.now();
addUpTo(6)
let t2 = Date.now();

// console.log(`Time Elapsed: ${t2-t1 / 1000} seconds.`)

// console.log(addUpToTwo(6))

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

// console.log(subtotals([1,2,3,4,5,6]))

// Space Complexity

// number, null , undefined, boolean is constant



// logarithms
// what is log
// log2(8) = 3   --------->  2^3 = 8
// 2 to what power equals 8
