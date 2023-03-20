//Prompt the user to enter a student's marks out of 100
let grade = prompt("enter student marks 0-100");

// Check if the grade is greater than 79, if it is print Grade A
if (grade > 79) {
  console.log("Grade A")
} 
// If the grade is between 60 and 79 (inclusive), print Grade 
else if (grade >= 60 && grade <= 79) {
    console.log("Grade B")
} 
//  If the grade is between 50 and 59 (inclusive), print Grade C
else if (grade >= 50 && grade <= 59) {
    console.log("Grade C");
} 
// If the grade is between 40 and 49 (inclusive), print Grade D
else if (grade >= 40 && grade <= 49) {
    console.log("Grade D");
} 
// If the grade is less than 40, print Grade E
else {
    console.log("Grade E");
}

