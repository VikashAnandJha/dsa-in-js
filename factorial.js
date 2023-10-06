// factorial

let n = 5;

function fact(n) {
    if (n == 0) return 1;
    let res = 1;
    for (let i = n; i >= 1; i--) {
        // res = n * fact(n - 1)
        res = res * i


    }

    return res;

}

console.log(fact(5))