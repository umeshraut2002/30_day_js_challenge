const { log } = require("console");

function singleNUmber(nums){
    let single = 0;

    for(let i = 0; i < nums.length; i++){
        console.log(single^= nums[i]);
    }
    return single;
}

const nums = [4, 1,2,2,1,3];

console.log(singleNUmber(nums))