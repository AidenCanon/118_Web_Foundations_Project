const changeGoalButton = document.getElementById("changeGoal");
const goalParagraph = document.getElementById("goal");

function changeGoal() {
    // console.log("In changeGoal function");
    goalParagraph.textContent = "This is the new goal! Im thinking about adding a way to track progress on the homepage.";
    // console.log("out of changeGoal function");
}

changeGoalButton.addEventListener("click", changeGoal);


const resetGoalButton = document.getElementById("resetGoal");
function resetGoal() {
    // console.log("In resetGoal function");
    goalParagraph.textContent = "This page will allow users to input to there task/ todo list but to see the actual list they will have to go to the Task/ To Do page.";
    // console.log("out of resetGoal function");
}
resetGoalButton.addEventListener("click", resetGoal);