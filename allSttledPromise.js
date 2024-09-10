// advane promise handling multiple promises 

const promise1 = new Promise((resolve) => {
    resolve('Promise is Resolved');
})

const promise2 = new Promise((reject) => {
    reject('Promise is Reject');
})
Promise.allSettled([promise1, promise2]).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log("Something went wrong");
    
})