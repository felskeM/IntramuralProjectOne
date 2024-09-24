document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can implement form submission to an API or send the data via email
    alert(`Thanks, ${name}. Your message has been sent!`);

    // Reset form after submission
    document.getElementById('contactForm').reset();
});