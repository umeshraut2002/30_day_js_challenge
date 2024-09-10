function matrix(nums, k){
    const arr = [];

    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j <nums[i].length; j++){
            arr.push(nums[i][j]);
        }
    }

    // arr.sort((a, b) => a - b)

    return arr[k];
    
    
}

const mat = [[1,5,9],[10,11,13],[12,13,15]];

const k = 8;

console.log(matrix(mat, k));
