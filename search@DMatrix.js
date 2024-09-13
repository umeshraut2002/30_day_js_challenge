function search(mat, target){
    let row = 0; 
    let col = mat[0].length - 1;
    console.log("I am col length",col);
    

    while(row < mat.length && col >= 0){
        console.log("I inside loop mat length",mat.length);
        
        if(mat[row][col] === target){
            return true;
        }
        else if(mat[row][col] > target){
            console.log(mat[row][col]);
            
           col--;
        }
        else {
            row++;
        }
    }
    return false;
}

const mat = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
// const mat = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];

const target = 5;


console.log(search(mat, target));

