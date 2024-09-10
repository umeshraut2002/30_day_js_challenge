// handling errors in promise 

const justPromise = new Promise((resolve, reject) => {
    reject()
})
.then((response) => {
    console.log(response);
    
})
.catch((error) => {
    console.log("Something Went a Wrong",error);
})