document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send form data to the backend (AJAX request)
    const response = await fetch('https://your-server-url/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    });

    const result = await response.json();
    if (result.success) {
        document.getElementById('statusMessage').innerText = "Message sent successfully!";
    } else {
        document.getElementById('statusMessage').innerText = "Failed to send the message.";
    }

    // Reset form after submission
    document.getElementById('contactForm').reset();
});