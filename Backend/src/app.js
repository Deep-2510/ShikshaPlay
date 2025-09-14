// Backend/src/app.js

const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors'); // Don't forget cors middleware!

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(cors()); // Enable CORS for frontend communication

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://shubh:Shubham388450@cluster0.kqqa2.mongodb.net/shikshaplay?retryWrites=true&w=majority");
        console.log("Database connected successfully to MongoDB Atlas!");
    } catch (error) {
        console.error("Error connecting to the database:", error);
        process.exit(1); // Exit process if database connection fails
    }
}

// Connect to DB and then start the server
connectDB().then(() => {
    // This line imports auth.js, which in turn imports User.js
    app.use("/api", require("./routes/auth.js")); 

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});

// Basic root route
app.get('/', (req, res) => {
    res.send('ShikshaPlay Backend is running and connected to MongoDB Atlas!');
});