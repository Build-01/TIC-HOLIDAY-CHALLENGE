// Wait for the DOM content to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Get a reference to the form element by its ID
    const signupForm = document.getElementById("signupForm");

    // Add an event listener for the 'submit' event on the form
    signupForm.addEventListener("submit", function(event) {
        // Prevent the form from submitting the traditional way (page refresh)
        event.preventDefault();

        // 3. Get the values from the form inputs
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
    

        // 4. Trigger the alert button functionality
        alert(`Sign Up Successful!\n\nUsername: ${username}\nEmail: ${email}`);

 
    });
});
