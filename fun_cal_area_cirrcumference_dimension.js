// You are given an array of radii for multiple circles: [3, 1, 2, 4].Write JavaScript functions to calculate the following properties for each circle using higher - order functions

let radi = [3,1,2,4];

const area = function(radi){ 
    return Math.PI * radi * radi;
}

const circumference = function (radi){
    return 2 * Math.PI * radi;
}

const diameter = function (radi){
    return 2 * radi;
} 


function calculate(radi, logic){
    const output = [];
    for(let i = 0; i < radi.length; i++){()
        output.push(Math.floor(logic(radi[i])));
    }
    return output;
};

console.log(`Area is ${calculate(radi, area)}`);
console.log(`Circumference is ${calculate(radi, circumference)}`);
console.log(`Diameter is ${calculate(radi, diameter)}`);


