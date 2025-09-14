// Backend/src/routes/auth.js

const express = require('express');
const router = express.Router();
// This path is correct: from auth.js (in src/routes), go up one level (to src), then into 'models' folder
const User = require('../models/User'); // CORRECT import for User.js

// Route to check if any users exist (for initial signup prompt)
router.get('/check-users', async (req, res) => {
    try {
        const userCount = await User.countDocuments();
        res.json({ usersExist: userCount > 0 });
    } catch (error) {
        console.error('Error checking user existence:', error);
        res.status(500).json({ message: 'Server error during user check.' });
    }
});

// Register Route
router.post('/register', async (req, res) => {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!['student', 'teacher'].includes(role)) {
        return res.status(400).json({ message: 'Invalid role provided.' });
    }

    try {
        let user = await User.findOne({ $or: [{ username }, { email }] });
        if (user) {
            return res.status(400).json({ message: 'Username or Email already exists.' });
        }

        user = new User({
            username,
            email,
            password,
            role
        });

        await user.save();
        res.status(201).json({ message: 'Registration successful!', userId: user._id });

    } catch (err) {
        console.error('Error during registration:', err.message);
        res.status(500).json({ message: 'Server error during registration.' });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    if (!usernameOrEmail || !password) {
        return res.status(400).json({ message: 'Please enter all fields.' });
    }

    try {
        const user = await User.findOne({
            $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid Credentials.' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Credentials.' });
        }

        res.json({ message: 'Logged in successfully!', user: { id: user._id, username: user.username, role: user.role } });

    } catch (err) {
        console.error('Error during login:', err.message);
        res.status(500).json({ message: 'Server error during login.' });
    }
});

module.exports = router;