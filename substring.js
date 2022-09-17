
let s="aaaaaa"
let t="bbaaaa"

// var isSubsequence = function(s, t) {
//     let subsequence=true
//     let count=0
//     if(s.length==0){
//         return true
//     }
//     if(t.length==0){
//         return false
//     }
//     if(t.length>s.length){
//         return false
//     }
//     for(i=0;i<s.length;i++){
//         if(subsequence==false){
//             return false
//         }
//         for(j=count;j<t.length;j++){
//             if(t[j]==s[i]){
//                 count=j
//                 subsequence=true;
//                 break
//             }
//             console.log(j)
//             if(t[j]!=s[i]){
//                 subsequence=false
//             }
            
//             console.log(count)
//         }     
// }
//     return subsequence
// };

// console.log(isSubsequence(s,t))

//FIRST FAILED ATTEMPT

var isSubsequence = function(s, t){
    i=0
    j=0
    while(i<s.length && j<t.length){
        if(s[i] == t[j]){
            i++
        }
        j++
    }
    if(i==s.length){
        return true
    }else{
        return false
    }
}
console.log(isSubsequence(s,t))