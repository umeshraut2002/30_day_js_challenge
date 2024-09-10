function user(studentName, id, rollNumber, marks){
    this.studentName = studentName;
    this.id = id;
    this.rollNumber = rollNumber;
    this.marks = marks;

    return this;
}

const user1 = new user("umesh", 123, 45, 85);
const user2 = new user("vihaan", 354, 77, 70);
console.table(user1);
console.table(user2);

