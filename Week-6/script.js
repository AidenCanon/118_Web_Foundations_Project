// const assignment1Score = 41;
// const assignment2Score = 40;

// console.log("Assignment 1 Score:", assignment1Score);
// console.log("Assignment 2 Score:", assignment2Score);

// const totalScore = assignment1Score + assignment2Score;
// console.log("Total Score:", totalScore);

// if (totalScore >= 80) {
//     console.log("Grade: A");
// } else if (totalScore >= 70) {
//     console.log("Grade: B");
// } else if (totalScore >= 60) {
//     console.log("Grade: C");
// } else if (totalScore >= 50) {
//     console.log("Grade: D");
// } else {
//     console.log("Grade: F");
// }
const changeGoalButton = document.getElementById("changeGoal");
const goalParagraph = document.getElementById("goal");

function changeGoal() {
    goalParagraph.textContent = "This is the new goal! Im thinking about adding a way to track progress on the homepage.";
}

changeGoalButton.addEventListener("click", changeGoal);

const resetGoalButton = document.getElementById("resetGoal");
function resetGoal() {
    goalParagraph.textContent = "This page will allow users to input to there task/ todo list but to see the actual list they will have to go to the Task/ To Do page.";
}
resetGoalButton.addEventListener("click", resetGoal);