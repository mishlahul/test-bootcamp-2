//fungsi palindrome, mengecek apakah jika urutan huruf pada suatu kata dibalik akan menghasilkan kata yang sama

function palindrome(str) {
    let strLower = str.toLowerCase()
    let arr = strLower.split("")
    let arrNew = []

    // merubah urutan huruf
    for(var i=strLower.length-1;i>=0;i--) {
        arrNew.push(arr[i])
    }
    const arrJoin = arr.join(",")
    const arrNewJoin = arrNew.join(",")
    if (arrJoin == arrNewJoin) {
    return true
    } else {
    return false
    }
}
console.log(palindrome('Kasur ini rusak')) // output: true