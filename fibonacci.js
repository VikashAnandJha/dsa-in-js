let n = 2;

function fibonacci(n) {
    let result = []
    for (let i = 0; i < n; i++) {

        if (i > 1) {

            result.push(result[i - 1] + result[i - 2])

        } else {

            result.push(i)
        }


    }
    return result;
}


console.log("result", fibonacci(3))