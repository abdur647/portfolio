const express = require('express');
const path=require('path');
const nodemailer = require('nodemailer');

const app= express();

// app.use(express.static(path.join(__dirname, 'Public')));
app.use(express.static('../Public'));
app.set("view engine", 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up your Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // e.g., 'Gmail', 'Outlook', etc.
    auth: {
        user: 'christopher@gmail.com', // your email address
        pass: '123@123', // your email password or an app-specific password
    },
});

// Define a route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'admin@gmail.com', // admin's email address
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Email could not be sent: ' + error);
            res.status(500).send('Email could not be sent.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});



app.get("/about",(req,resp)=>{
    console.warn(__dirname); 
    resp.sendFile(path.join(__dirname, 'Public', 'about.html'));
})
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Handle the form data here (e.g., send an email or save to a database)

    res.send('Form submitted successfully.'); 
});
app.listen(4002,()=>{
    console.warn("Connected"); 
    console.warn("Connected");  
}); 


