// You have an array of numbers. Use the map() function to create a new array where each number is increased by its index in the array
// Expected Outpur
// number = [10, 21, 32, 43]

const numbers = [10, 20, 30, 40];

const inc = numbers.map((num, i) => {
    return num + i;
})

console.log(inc);
