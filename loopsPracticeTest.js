// ### Question:
// You are given an array of objects where each object represents a student with properties: `name`,
// `marks` (an array of numbers), and `age`. Write a function that:

// 1. **Using `for...of` loop:** Calculates and returns the total marks scored by all students combined.
// 2. **Using `for...in` loop:** Returns an object containing each student's name and their average marks.
// 3. **Using `forEach` loop:** Filters out students who have an average mark of less than 50 and returns
// their names in an array.

// ### Input:
// An array of student objects, for example:
// ```javascript
// const students = [
//     { name: 'Alice', marks: [85, 78, 92], age: 20 },
//     { name: 'Bob', marks: [65, 72, 80], age: 22 },
//     { name: 'Charlie', marks: [45, 30, 50], age: 21 },
//     { name: 'David', marks: [90, 88, 92], age: 23 }
// ];
// ```

// ### Requirements:
// - **for...of**: Sum all marks from all students.
// - **for...in**: Compute average marks per student and return an object with the student names as keys and their average marks as values.
// - **forEach**: Return an array of names of students who have an average mark below 50.

// ### Expected Output:
// ```javascript
// // Using for...of
// totalMarks: 825

// // Using for...in
// averageMarks: {
//     Alice: 85,
//     Bob: 72.33,
//     Charlie: 41.67,
//     David: 90
// }

// // Using forEach
// studentsBelow50: ['Charlie']
// ```

// ### Function Signature:
// ```javascript
// function calculateTotalMarks(students) {
//     // Implementation with for...of
// }

// function getAverageMarks(students) {
//     // Implementation with for...in
// }

// function filterLowScoringStudents(students) {
//     // Implementation with forEach
// }
// ```

// ### Solution Approach:

// 1. **For...of Loop**: Iterates over each student object in the array and sums up all the marks.
// 2. **For...in Loop**: Iterates over the properties of each student object, computing the average marks.
// 3. **ForEach Loop**: Iterates over the array and filters out students with average marks below 50.

// ### Challenge:
// Implement the solution and ensure that the loops are used correctly to practice and reinforce your understanding of these loops in different scenarios.

const students = [
  {
    name: "Alice",
    marks: [85, 78, 92],
    age: 20,
  },

  {
    name: "Bob",
    marks: [65, 72, 80],
    age: 22,
  },

  {
    name: "Charlie",
    marks: [45, 30, 50],
    age: 21,
  },
  {
    name: "David",
    marks: [90, 88, 92],
    age: 23,
  },
];

//  calculating sum of all marks combined

function sumOfAllMarks(students) {
  let total = 0;

  for (const student of students) {
    let marks = student.marks;

    // console.log(marks);

    for (const mark of marks) {
      total += mark;
    }
  }

  return total;
}

console.log("Total MArks is : ", sumOfAllMarks(students));

// calculating an average of each element by using for... in loop

function getAverageOfAllMarks(students) {
  let averages = {};

  for (const student of students) {
    let sum = 0;

    for (let index in student.marks) {
      // console.log(student.marks[index]);
      // console.log("Index", index);

      sum += student.marks[index];

      // console.log("Sums",sum);
    }

    const average = sum / student.marks.length;
    averages[student.name] = Math.floor(average);
  }

  return averages;
}

console.log(getAverageOfAllMarks(students));

// lower scoring students for filter

function filterLowerScore(students) {
  let lowerScore = [];

  students.forEach((student) => {
    let sum = 0;

    student.marks.forEach((mark) => {
      sum += mark;
    });

    const average = sum / student.marks.length;

    if (average < 50) {
      lwerScore.push(student.name, Math.floor(average));
    } else {
      return average;
    }
  });

  return lowerScore;
}

console.log("score below fifty is: ",filterLowerScore(students));
