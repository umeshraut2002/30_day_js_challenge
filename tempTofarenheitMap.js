// You are given an array of temperatures in Celsius. Use the map() function to convert each temperature to Fahrenheit.
// To convert Celsius to Fahrenheit, use: F = C * 9/5 + 32.

const celTemp = [0, 10, 20, 30, 40];

const converted = celTemp.map((ele) => {
    let result = 0;
    result = ele * 9 / 5 + 32;
    return result;
});

console.log(converted);
