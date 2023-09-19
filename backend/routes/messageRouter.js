const express = require('express');
const { middleWare } = require('../middleware/authMiddleware');
const { sendMessage, allMessages } = require('../controllers/messageController');


const router = express.Router();  

router.route('/').post(middleWare, sendMessage);
router.route('/:chatId').get(middleWare, allMessages);

module.exports = router;