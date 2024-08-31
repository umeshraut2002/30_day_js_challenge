// You have an array of numbers. Use the filter() function to create a new array that contains only the even numbers.
// Task:
// Write a function that filters out the odd numbers, keeping only the even numbers using filter().
// Expected Output:
// [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filt = numbers.filter((num) => {
    if((num%2) === 0){
        return num;
    }

    else{
        return 0;
    }
})

console.log(filt);
