// singleton obects 

// const newUser = new Object();

// console.log(newUser);

// non singletone objects 

const metaUser = {};

metaUser.userName = "vihaan123";
metaUser.email = "some@gmail.com";
metaUser.password = "pass@123";
metaUser.follower = "1k";
metaUser.post = "100";

console.log(metaUser);

const pistaUser = {
    "User name ": "vihaan123",
    "user id ": 1234,
    passwor: "Pass!@@#$@@",
    email: "wrong@gmail.com",
    follower: "20k",
    post: 150,
    reels: 20,
    theme: "Dark theme High Contrast"
}

for(const pista in pistaUser){
    console.log(pista, pistaUser[pista]);   
}

// Nested object 

const nest = {
    fullName: {
        firstName: {
            name: "Umesh",

            middleName: {
                midname: "babanraoji",

                lastName: {
                    lastN: "RAut"
                }
            }
        }
    }
}


console.log(nest.fullName.firstName.middleName);

