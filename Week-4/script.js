const assignment1Score = 41;
const assignment2Score = 40;

console.log("Assignment 1 Score:", assignment1Score);
console.log("Assignment 2 Score:", assignment2Score);

const totalScore = assignment1Score + assignment2Score;
console.log("Total Score:", totalScore);

if (totalScore >= 80) {
    console.log("Grade: A");
} else if (totalScore >= 70) {
    console.log("Grade: B");
} else if (totalScore >= 60) {
    console.log("Grade: C");
} else if (totalScore >= 50) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}