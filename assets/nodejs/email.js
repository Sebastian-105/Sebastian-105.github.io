const nodemailer = require('nodemailer');

// Create a transporter object using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'YourEmailService', // e.g., 'Gmail', 'Yahoo', 'Outlook'
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password',
  },
});

// Email data
const mailOptions = {
  from: 'your_email@example.com',
  to: 'recipient@example.com',
  subject: 'Test Email',
  text: 'This is a test email from Node.js using Nodemailer.',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email: ' + error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
