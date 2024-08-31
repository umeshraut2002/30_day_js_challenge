// Filter Numbers Greater Than a Threshold Question:
// You have an array of numbers. Use the filter() function to create a new array that 
// contains only numbers greater than a given threshold.
// Threshold:15
// Expected Output:
// [20, 25, 30]


const numbers = [5, 10, 15, 20, 25, 30];

const result = numbers.filter((num) => {
    let threshold = 15;

    return num > threshold;

})

console.log(result);
