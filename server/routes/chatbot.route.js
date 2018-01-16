import express from 'express';
import chatbotCtrl from '../controllers/chatbot.controller';

const router = express.Router();

router.route('/').post(chatbotCtrl.chatbotReply);

export default router;