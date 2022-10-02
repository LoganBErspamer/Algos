

s="MCMXCIV"


var romanToInt = function(s) {
    let numbers={
        I:1,
        V:5,
        X:10,
        L:50,
        C:100,
        D:500,
        M:1000,
        IV:4,
        IX:9,
        XL:40,
        XC:90,
        CD:400,
        CM:900,
    }

    let count= 0

    for(let i =0; i<s.length;i++){
        if(numbers[s[i]]<numbers[s[i+1]]){
            if(s[i+1]=== undefined){
                count+=numbers[s[i]]
            }
            count+=numbers[s[i]+s[i+1]]
            i++
        }else{
            count+=numbers[s[i]]
        }
    }
    return count
};

console.log(romanToInt(s))