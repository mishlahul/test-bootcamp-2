// fungsi reverseWord, untuk membalikkan urutan huruf dalam suatu kata
function reverseWord(str) {
    let words = str.split(" ")
    console.log(str)
    let reversedSentence = []
    for(i=0; i<words.length; i++) {
        let loweredWord = words[i].toLowerCase()
        if(words[i]!=loweredWord) {
            let alphas = loweredWord.split("")
            let reversedWord = []
            for(j=alphas.length-1; j>=0; j--) {
                reversedWord.push(alphas[j])
            }
            let upper = reversedWord[0].toUpperCase()
            reversedWord[0] = upper
            finalWord = reversedWord.join("")
            reversedSentence.push(finalWord)
        } else {
            let alphas = words[i].split("")
            let reversedWord = []
            for(j=alphas.length-1; j>=0; j--) {
                reversedWord.push(alphas[j])
                finalWord = reversedWord.join("")
            }
            reversedSentence.push(finalWord)
        }
    }
    let finalSentence = reversedSentence.join(" ")
    return finalSentence
}
console.log(reverseWord("I am A Great human"))