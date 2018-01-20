import express from 'express';

import emailRoutes from './email.route';
import chatbotRoutes from './chatbot.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  {
    console.log('receive health-check'),
    res.send('OK')
  }
);

// mount user routes at /users
// router.use('/users', userRoutes);

// mount auth routes at /auth
// router.use('/auth', authRoutes);

// router.use('/posts', postRoutes);

//mount email routes at /email
router.use('/email', emailRoutes);

//mount chatbot routes at /chatbot
router.use('/chatbot', chatbotRoutes);

export default router;
