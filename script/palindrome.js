let word = "good"
console.log(word)
let len= word.length
//console.log(len)
wordRev = ""
while(len>0){wordRev += word[len-1]; len = len-1 ;
}
if (wordRev == word) {console.log("this is a palindrome")}
else {console.log("not a palindrome this time")}





