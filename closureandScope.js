// lexical scope 

function outer(){
    let name = "Umesh";

    function inner(){

        let id = 123;

        console.log("Inner", name);
    }

    function innerTwo(){
        console.log("Id", id);
        
    }

    inner();
    innerTwo();
}

outer();

console.log(name);

// Analogy: 
/*
childs can take from the parents is ok
but prents can not take from the child
but know the things siblings can not be share with each other 

*/

// closure

function closerOouterFun(){
    let name = "umesh";

    function displayName(){
        console.log("Access Got it", name);
    }

    return displayName();

}

const fun = closerOouterFun();

closerOouterFun();