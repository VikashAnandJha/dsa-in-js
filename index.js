// factorial

let n = 5;

function isPrime(n) {
    let res;
    if (n < 2) return false
    else {

        for (i = 2; i < n; i++) {
            if (n % i == 0) return false
        }


        return true
    }





    return res;

}

console.log(isPrime(1))