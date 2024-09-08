const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function() {
        console.log("Data is Consumed");

        resolve();
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise is Done");
    
})