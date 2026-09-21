const changeGoalButton = document.getElementById("changeGl");
const goalParagraph = document.getElementById("goal");

function changeGoal() {
    goalParagraph.textContent  "This is the new goal! Im thinking about adding a way to track progress on the homepage.";
}

changeGoalButton.addEventListener("click", changeGoal);

const resetGoalButton = document.getElementById("esetGoal");
function resetGoal() {
    goalParagraph.textContent = "This page will allow users to input to there task/ todo list but to see the actual list they will have to go to the Task/ To Do page.";
}
resetGoalButton.addEventListener("click", resetGoal);