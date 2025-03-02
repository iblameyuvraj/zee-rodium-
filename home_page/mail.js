document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("287Q8a5FSHJTJ6gZX"); // Your EmailJS User ID

    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Send email using EmailJS
        emailjs.send("service_mv12v2c", "template_bqnhyjv", {
            name: name,
            email: email,
            message: message,
        }).then(
            function (response) {
                alert("Message sent successfully!");
                document.getElementById("contact-form").reset();
            },
            function (error) {
                alert("Failed to send message. Please try again.");
                console.error("EmailJS Error:", error);
            }
        );
    });

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});