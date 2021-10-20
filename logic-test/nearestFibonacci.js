// fungsi nearestFibonacci, mencari nilai bilangan fibonacci terdekat dari jumlah digit dalam array yang diberikan dan mengembalikan nilai selisihnya
let array = [15, 1, 3]
function nearestFibonacci(arr) {
    let num = 0
    for(i=0; i<arr.length; i++) {
        num += arr[i]
    }
    let fib = [0, 1]
    while (fib[fib.length-1] < num) {
        var add = fib[fib.length-1] + fib[fib.length-2]
        fib.push(add)
    }
    return fib[fib.length-1]-num
}
console.log(nearestFibonacci(array))