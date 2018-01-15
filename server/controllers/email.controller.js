const nodemailer = require('nodemailer');

import Email from '../models/email.model';


function sendEmailRequest(req, res, next) {
// create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'infoweraisethebarr@gmail.com', // generated ethereal user
            pass: '0115HomepageTeam' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOption1 = {
        from: '"Raise the Barr" <infoweraisethebarr@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'do-not-reply Request Confirmation', // Subject line
        text: "Hello " + req.body.firstname + ", \n\nYou have requested a demo. We'll contact you soon.\n\nBest,\nRaise the Barr", // plain text body
    };

    let mailOption2 = {
        from: '"Raise the Barr" <infoweraisethebarr@gmail.com>', // sender address
        to: 'jinhang91@hotmail.com', // manager address
        subject: 'Request email from user', // Subject line
        text: "A user requests a demo, user's email address is " + req.body.email + ". User name is " + req.body.firstname, // plain text body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOption1, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    transporter.sendMail(mailOption2, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}

function sendEmailBeta(req, res, next) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'infoweraisethebarr@gmail.com', // generated ethereal user
            pass: '0115HomepageTeam' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOption1 = {
        from: '"Raise the Barr" <infoweraisethebarr@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'do-not-reply Request Confirmation', // Subject line
        text: "Hello " + req.body.firstname + ", \n\nYou have requested a beta version of our product. We'll contact you soon.\n\nBest,\nRaise the Barr", // plain text body
    };

    let mailOption2 = {
        from: '"Raise the Barr" <infoweraisethebarr@gmail.com>', // sender address
        to: 'jinhang91@hotmail.com', // manager address
        subject: 'Request email from user', // Subject line
        text: "A user requests a beta version of our product, user's email address is " + req.body.email + ". User name is " + req.body.firstname, // plain text body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOption1, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    transporter.sendMail(mailOption2, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}

function sendEmailContact(req, res, next) {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'infoweraisethebarr@gmail.com', // generated ethereal user
            pass: '0115HomepageTeam' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOption1 = {
        from: '"Raise the Barr" <infoweraisethebarr@gmail.com>', // sender address
        to: req.body.email, // list of receivers
        subject: 'do-not-reply Request Confirmation', // Subject line
        text: "Hello " + req.body.firstname + ", \n\nYou have left a message to us. We'll contact you soon.\n\nBest,\nRaise the Barr", // plain text body
    };

    let mailOption2 = {
        from: '"Raise the Barr" <infoweraisethebarr@gmail.com>', // sender address
        to: 'jinhang91@hotmail.com', // manager address
        subject: 'Message from user', // Subject line
        text: "A user leaves message to us: " + req.body.message + "\n User's email address is " + req.body.email + ". User name is " + req.body.firstname, // plain text body
    }

    // send mail with defined transport object
    transporter.sendMail(mailOption1, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    transporter.sendMail(mailOption2, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
}

export default { sendEmailRequest, sendEmailBeta, sendEmailContact };