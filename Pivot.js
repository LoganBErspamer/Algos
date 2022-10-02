nums = [1,7,3,6,5,6]

var pivotIndex = function(nums) {
    let rightsum=0
    let leftsum= 0
    for(i=0;i<nums.length;i++){
        rightsum+=nums[i]
    }
    for(j=0; j<nums.length; j++){
        rightsum=rightsum-nums[j];
        console.log(rightsum)
        if(rightsum == leftsum){
            return j;
        }
        leftsum+=nums[j]
        console.log(leftsum)
    }
    return -1
};

console.log(pivotIndex(nums))
