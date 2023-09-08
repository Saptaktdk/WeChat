const express = require('express');
const { middleWare } = require('../middleware/authMiddleware');
const { 
    accessChat, 
    getChats, 
    createGroupChat, 
    renameGroup, 
    addToGroup,
    removeFromGroup
 } = require("../controllers/chatController");


const router = express.Router();

router.route('/').post(middleWare, accessChat);
router.route('/').get(middleWare, getChats);
router.route('/group').post(middleWare, createGroupChat);
router.route('/rename').put(middleWare, renameGroup);
router.route('/groupadd').put(middleWare, addToGroup);
router.route('/groupremove').put(middleWare, removeFromGroup);


module.exports = router; 