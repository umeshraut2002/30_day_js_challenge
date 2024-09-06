function duplicate(nums){
    for(let i = 1; i<= nums.length; i++){
        if(nums[i] === nums[i+1]){
            // console.log(nums[i]);
            
        }
        else{
            console.log(nums[i]);
            
        }
    }

}

const nums = [3,3,3,3,3,3,3];

console.log(duplicate(nums));
