const express = require('express');
const { registerUser, authUser, allUsers } = require('../controllers/userController');
const { middleWare } = require('../middleware/authMiddleware');


const router = express.Router();

router.route("/").post(registerUser).get(middleWare, allUsers);
router.post("/login", authUser);


module.exports = router;