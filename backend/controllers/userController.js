const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')
const generateToken = require('../config/generateToken');


const registerUser = asyncHandler(async (req, res) => {
    const {  name, email, password, pic } = req.body;

    if (!name || !email || !password ) {
        res.status(400).json({
            message: `Please enter all the required fields`
        })
        
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400).json({
            message: `User already exists`
        })
    }

    const user = await User.create({
        name,
        email,
        password,
        pic
    });

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
            message: `User created successfully`
        });
    } else {
        res.status(400).json({
            message: `Failed to create user`
        })
    }
});

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({
            message: `Please enter all the required fields`
        })
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
            message: `User logged in successfully`,
        });
    } else if ( password != user.password || email != user.email) {
        res.status(400).json({
            message: `Invalid credentials. Please try again`
        });
    } else {
        res.status(400).json({
            message:`User not found`
        });
    }
})

module.exports = { registerUser, authUser };