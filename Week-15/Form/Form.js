const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const topic = document.getElementById('topicInput').value;
    const message = document.getElementById('message');
    message.textContent = `Form submitted with Name: ${name} and Topic: ${topic}`;
};

document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);