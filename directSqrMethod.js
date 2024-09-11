// num = 5;
// num.sqred();
// output : 25


Object.prototype.sqred = function (number){
    console.log(`${this ** 2}`);
    
}

const num = 34;
num.sqred();


// Object.prototype.exactLength = function (){
//     console.log(`${this.trim().length}`);
    
// }

// const myname = "vihaan    ";

// myname.exactLength();