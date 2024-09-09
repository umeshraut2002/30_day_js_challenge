fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    if(!response.ok){
        throw new Error("Network response not ok")
    }
    return response.json();
})
.then((data) => {
    if(data.key === 'weather'){
    console.log(data.followers);
    }
    else{
        console.log("No Weather Keyword Are include");
        
    }
})
.catch((error) => {
    console.error("Something wenr Wrong",error)
})
.finally(() => {
    console.log("Finally Executed");
    
})