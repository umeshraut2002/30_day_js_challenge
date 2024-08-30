// Calculate the Sum of Squares

const sumOfSquare = function(array){
    let result = 0;
    array.forEach(element => {
        result += element * element;    
    });
    return result;
}

const numbers = [1, 2, 3, 4];

console.log(sumOfSquare(numbers));
