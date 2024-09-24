// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
        user: 'mmayorf@outlook.com',  // Your email address
        pass: 'your-email-password'    // Your email password (for testing, consider using app-specific passwords or OAuth)
    }
});

// API route to handle email sending
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;

    // Set up email options
    const mailOptions = {
        from: email,
        to: 'mmayorf@outlook.com',  // Your receiving email address
        subject: `New message from ${name}`,
        text: `You have a new message from ${name} (${email}): \n\n${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, message: 'Failed to send message' });
        }
        console.log('Email sent:', info.response);
        return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
