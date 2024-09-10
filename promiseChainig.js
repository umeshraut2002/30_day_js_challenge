const firstPromise = new Promise((resolve, reject) => {
    resolve(Math.round(Math.random() * 20));
})
firstPromise.then((integer) => {
    return new Promise((resolve, reject) => {
        resolve(integer * Math.round(Math.random() * 50));
    })
}).then((result) => {
    console.log(result);
})