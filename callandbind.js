function setUserName(username){
    this.username = username;
}

function createUserName(username, email, number){
    setUserName.call(this, username);
    this.email = email;
    this.number = number;
}

const chai = new createUserName("umesh", "@gmail.com", 3888383449);

console.table(chai);

const tea = new setUserName("vihaan")

console.log(tea);
