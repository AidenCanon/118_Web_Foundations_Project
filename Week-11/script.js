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
    goalParagraph.textContent = "Changing goal...";
    
    setTimeout(() => {
        goalParagraph.textContent = "This is the new goal! Im thinking about adding a way to track progress on the homepage.";
    }, 2000);
    
}

changeGoalButton.addEventListener("click", changeGoal);

const resetGoalButton = document.getElementById("resetGoal");
function resetGoal() {
    goalParagraph.textContent = "Resetting goal...";
    
    setTimeout(() => {
        goalParagraph.textContent = "The Goal Has Been Reset. This page will allow users to input to there task/ todo list but to see the actual list they will have to go to the Task/ To Do page.";
    }, 2000);
}
// Ensure that the event listeners are only added if the elements exist
// In case of problems with finding the elements, the following checks and event listener additions are commented out in case there needed.
// if (!goalParagraph) {
//     console.error('Could not find the goal paragraph (#goal).');
// }

// if (!changeGoalButton) {
//     console.error('Could not find the change button (#changeGoal).');
// } else if (goalParagraph) {
//     changeGoalButton.addEventListener("click", changeGoal);
// }

// if (!resetGoalButton) {
//     console.error('Could not find the reset button (#resetGoal).');
// } else if (goalParagraph) {
//     resetGoalButton.addEventListener("click", resetGoal);
// }
resetGoalButton.addEventListener("click", resetGoal);

const fetchPostButton = document.getElementById("fetchPost");
const fetchOutput = document.getElementById("fetchOutput");
async function fetchPost() {
    fetchOutput.textContent = "Loading...";
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) throw new Error('Network response was not ok');
        const json = await response.json();
        fetchOutput.textContent = json.title + " - " + json.body;
    } catch (error) {
        fetchOutput.textContent = "Error fetching post: " + error.message;
    }
}

fetchPostButton.addEventListener("click", fetchPost);