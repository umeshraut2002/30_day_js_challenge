// its a garbage code for practice 

const sym = Symbol("pass");

const studentData = {
    name: "umesh",
    middle: "babanraoji",
    surname: "Raut",
    [sym]: "pass",
    email: "uraut6044@gmail.com",
    PNR: 2141351242054,
    sem: "7th",
}

for(const student in studentData){
    console.log(student, studentData[student]);
        
}


// changing email for new email 

studentData.email = "umesh@microsoft.com";

console.log(studentData.email);

// lock the object by using freez 

// Object.freeze(studentData);

// studentData.name = "vihaan";

// console.log(studentData.name);


studentData.greeting = function(){
    console.log("Hey js World");
}

console.log(studentData.greeting());

studentData.greetTwo = function(){
    console.log(`hey js User, ${this.name} `);
    
}

console.log(studentData.greetTwo());
