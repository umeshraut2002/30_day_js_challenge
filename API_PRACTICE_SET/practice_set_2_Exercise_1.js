// this is the exercise of 2nd practice set exercise 1

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise is resolved");       
    }, 2000)
    resolve();
}).then(() => {
    console.log("Response Sucessfully added");
}).catch((error) => {
    console.log(`Something went wrong ${error}`);
}).finally(() => {
    console.log("i am executed");
})