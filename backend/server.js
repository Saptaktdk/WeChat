const express = require('express');
const dotenv = require('dotenv');
const connectDB = require("./config/db");
const userRouter = require("./routes/userRouter");

const app = express();
dotenv.config();

//? Connect to the database
connectDB();

//? To accept data from frontend
app.use(express.json());

//? API routes
app.use('/api/user', userRouter);

const PORT = process.env.PORT || 5000;

//? Listen to port 5000
app.listen(PORT, console.log(`Server listening on port ${PORT}`));