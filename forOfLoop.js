// its just an syntax 

// const arr = [1, 2, 3, 4, 5, 6];

// for(const element of arr) {
//     console.log(element)
// }

const map = new Map();

map.set('name', "umesh")
map.set('middlename', "babanraoji")
map.set('lastname', "Raut")

console.log(map);

console.log("using for loop");

for(const [key, value] of map){
    console.log([key, value])
}

// 
// 
// 
// forEach loop here ---

// const ranArr = [1, 2, 3, 4, 5, 6];

// for(const key in ranArr){
//     console.log(key, value);
    
// }