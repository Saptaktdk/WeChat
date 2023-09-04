const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            minPoolSize: 1,
		    maxPoolSize: 10
        });

        console.log(`MongoDB connected successfully`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit();
    }
};

module.exports = connectDB;