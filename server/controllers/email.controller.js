const nodemailer = require('nodemailer');

import Email from '../models/email.model';


function sendEmailRequest(req, res, next) {
    console.log(req.body.email);
}

function sendEmailBeta(req, res, next) {
    console.log('send beta');
}

function sendEmailContact(req, res, next) {
    console.log('send contact');
}

export default { sendEmailRequest, sendEmailBeta, sendEmailContact };