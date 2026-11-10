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