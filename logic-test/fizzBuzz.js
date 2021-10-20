// fungsi fizzBuzz, mengembalikan sebuah array dengan sedikit modifikasi pada indeks tertentu dengan input sebuah angka
function fizzBuzz (n) {
    output = []
    for(i=1; i<=n; i++) {
        switch(true) {
            case(i%3==0 && i%5==0):
                output.push("FizzBuzz")
                break
            case(i%3==0):
                output.push("Fizz")
                break
            case(i%5==0):
                output.push("Buzz")
                break
            default:
                output.push(i)
                break
        }
    }
return output
}
console.log(fizzBuzz(15))