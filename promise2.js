new Promise(function(resolve, reject){
    setTimeout(intervalID = function (){
        console.log("Async Tas 2 Is On Load... ");
        resolve();
    }, 1000);

    clearInterval(intervalID);
}).then(function () {
    console.log("Promise is Resolved SucessFully");
});

// data consumed by promise 

new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({
            username: "Uraut2838473",
            email: "uraut6044@gmail.com",
            location: "india"
        })
    }, 2000)
}).then(function(user){
    console.log(user);
    
})