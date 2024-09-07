var threeSum = function(nums) {
    let res = new Array();

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 2; k < nums.length;  k++){
                res = nums[i] + nums[j] + nums[k];
            }
        }
    }

    return res.map(num => parseInt(num));
};

let nums = [1, -2, 3, 4 , 5];

console.log(threeSum(nums));
