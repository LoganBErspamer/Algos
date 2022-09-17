s="bbbaaaba"
t="aaabbbba"


var isIsomorphic = function(s, t) {
    if(s.length!==t.length){
        return false
    }
    let arr1=[]
    let arr2=[]
    let count1=0
    let count2=0
    for(i=0;i<s.length;i++){
        if(!arr1.includes(s[i])){
            arr1.push(s[i])
        }
        if(arr1.includes(s[i])){
            count1++
        }
    }
    for(j=0;j<t.length;j++){
        if(!arr2.includes(t[j])){
            arr2.push(t[j])
        }
        if(arr2.includes(t[j])){
            count2++
        }
    }
    console.log(count1)
    console.log(count2)
    if(arr1.length!==arr2.length){
        return false
    }
    return true
};
console.log(isIsomorphic(s,t))

//INCOMPLETE ATM