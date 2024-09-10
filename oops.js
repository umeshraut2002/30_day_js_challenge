function user(studentName, id, rollNumber, marks){
    this.studentName = studentName;
    this.id = id;
    this.rollNumber = rollNumber;
    this.marks = marks;

    return this;
}

const user1 = new user("umesh", 123, 45, 85,555);
const user2 = new user("vihaan", 354, 77, 70, 777);
console.table(user1 instanceof user);
console.table(user2);

