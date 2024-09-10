fetch('https://openweathermap.org/api')
.then((response) => {
    if(!response.ok){
        throw new Error(`${response.Error}`)
    }

    return response.json();
})
.then((data) =>{
    console.log(data);
})
.catch((error) => {
    console.error(error)
})
.finally(() => {
    console.log("I am Finaaly and I am Executed i dont care whatever")
})