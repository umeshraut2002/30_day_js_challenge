// You have an array of numbers. Use the map() function to create a new array where each number is squared.
// Write a function that squares each number in the array using map().



const numbers = [1, 2, 3, 4, 5];

const square = numbers.map((num) => {
    return num * num;
});

console.log(square);
