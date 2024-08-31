// You have an array of colors. Use splice() to remove two elements starting from index 
// 1 and then add two new colors at that position.
// Task:
// Remove "green" and "blue" from the array.
// Add "purple" and "pink" at the same position.

/*
Expected Output:
["red", "purple", "pink", "yellow"]
*/

let colors = ["red", "green", "blue", "yellow"];

console.log(colors);

console.log(`Rmoving green and blue ${colors.splice(1, 2)} after array is ${colors}`);

console.log("Adding Purple and pink on the same position");

colors.splice(1, 0, "purple", "pink");

console.log(colors);
