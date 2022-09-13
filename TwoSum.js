nums = [3,2,4]
var twoSum = function(nums, target) {
    for(i=0;i<nums.length-1;i++){  
        temp1=nums[i]
        for(j=nums.length-1;j>i;j--){
            temp2=nums[j]
            if(j==i){
                continue
            }
            if(temp1+temp2==target){
                return [i,j]
            }
        }
    }
    return "cannot add to target"
};

console.log(twoSum(nums, 6))