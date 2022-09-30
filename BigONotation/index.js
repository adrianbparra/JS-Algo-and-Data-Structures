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

console.log(`Time Elapsed: ${t2-t1 / 1000} seconds.`)

// console.log(addUpToTwo(6))


