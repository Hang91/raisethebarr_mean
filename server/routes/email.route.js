import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import paramValidation from '../config/param-validation';
import authCtrl from '../controllers/auth.controller';
import config from '../config/config';
import emailCtrl from '../controllers/email.controller';

const router = express.Router();

//POST 

router.route('/')
    .post(emailCtrl.sendEmail, function(){
        console.log("route to email");
    });

export default router;