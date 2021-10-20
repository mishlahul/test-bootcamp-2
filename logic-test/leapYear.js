// fungsi leapYear, mengembalikan nilai tahun kabisat dengan input tertentu
function leapYear(year1, year2) {
    let leap = []
    for(var i= year1+1; i<=year2; i++) {
        if (i%4 == 0) {
            leap.push(i)
        }
    }
    let list = leap.join(", ")
    return list
}
console.log(leapYear(1900,2020))