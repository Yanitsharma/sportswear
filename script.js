// JavaScript for form submission handling
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Fetch form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Just a basic console log for demonstration purposes
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);

    // You can add further processing or send data to a server here
    // For example, using Fetch API or submitting via AJAX
    // This is a basic demonstration, adjust as needed for your use case
});
