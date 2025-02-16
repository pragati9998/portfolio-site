// Initialize EmailJS with your Public Key
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("TZoj-pabIy4yeOcQ7"); // Replace with your EmailJS Public Key
});

// Function to send email
function sendEmail(event) {
    event.preventDefault(); // Prevent form submission reload

    emailjs.sendForm("service_anf7chi", "template_d4ug05s", "#contactForm")
        .then(function (response) {
            alert("Email sent successfully!");
            console.log("Success:", response);
        }, function (error) {
            alert("Failed to send email. Try again.");
            console.log("Error:", error);
        });
}

// Attach event listener to form
document.getElementById("contactForm").addEventListener("submit", sendEmail);
