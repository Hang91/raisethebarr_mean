import express from 'express';
import validate from 'express-validation';
import expressJwt from 'express-jwt';
import config from '../config/config';
import emailCtrl from '../controllers/email.controller';

const router = express.Router();

//POST 

router.route('/request').post(emailCtrl.sendEmailRequest);

router.route('/beta').post(emailCtrl.sendEmailBeta);

router.route('/contact').post(emailCtrl.sendEmailContact);

export default router;