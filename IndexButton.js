document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded
    console.log("DOM fully loaded and parsed");


    // Create a new button
    var button = document.createElement('button');

    // Set the text for the button
    button.textContent = 'Push';

    // Add a class to the button
    button.className = 'button';

    // Add an event listener to react to clicks
    button.addEventListener('click', function(event) {
        // Navigate to the main page (main.html)
        window.location.href = 'main.html';
    });

    // Find the element where the button should be inserted (for example, .container)
    var container = document.querySelector('.container');

    // Append the button to the container
    container.appendChild(button);
});