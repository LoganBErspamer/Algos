let x=1216
let text=x.toString()

var isPalindrome = function(x) {
    let i=0
    let j=text.length-1
    let palindrome=true
    while(i<text.length-1 && j>i){
        if(text[i]!==text[j]){
            palindrome=false
        }
        i++;
        j--;
    }
    return palindrome
};

console.log(isPalindrome(x))

