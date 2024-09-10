// 3. Promise Chaining
// Create two Promises that resolve sequentially, passing the result of the first Promise to the second
// one

const firstpromise = new Promise((resolve, reject) => {
    console.log("Promise is resolved");
    
    resolve(5)
})
firstpromise.then((number) => {
    return new Promise((resolve) => {
        resolve(number * 2);
    })
}).then((result) => {
    console.log(result);
    
})

