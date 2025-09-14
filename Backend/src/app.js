// server.js (Combined API and Game Server)
// This file now runs your Express API and your Socket.IO game logic together.

const express = require('express');
const http = require('http');
const { Server } = require("socket.io");
const mongoose = require('mongoose');
const cors = require('cors');

// --- Basic Setup ---
const app = express();
app.use(cors({
    origin: "http://127.0.0.1:5500" // Explicitly allow your game_tester.html origin
}));  // Allow requests from your frontend
app.use(express.json()); // To parse JSON bodies
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        // Change the origin from a wildcard to the specific one from the error
        origin: "http://127.0.0.1:5500", 
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;
// Replace with your actual MongoDB connection string. Use environment variables for this in production.
const MONGO_URI = "mongodb://127.0.0.1:27017/number_ninja"; 

// --- Database Connection (from your app.js) ---
async function connectDB(){
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Database connected successfully");
    } catch(error){
        console.error("Error connecting to the database", error);
        process.exit(1); // Exit process with failure
    }
}
connectDB();


// --- Mongoose Schemas (You would typically put these in separate files) ---
const Student = require('./models/student.js'); // Assuming your model is in './models/Student.js'

const GameSchema = new mongoose.Schema({
    status: { type: String, enum: ["waiting", "in-progress", "finished"], default: "waiting" },
    players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
    playerInfo: { type: Map, of: { score: Number, streak: Number } },
    currentQuestion: { type: String },
    _currentAnswer: { type: Number, select: false },
    difficulty: { type: Number, default: 1 },
    turn: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
}, { timestamps: true });

const Game = mongoose.model('Game', GameSchema);


// --- Express API Routes ---
// Using the authentication routes from your routes/auth.js file
app.use("/", require("./routes/auth.js")); // Make sure this path is correct

app.get('/', (req, res) => {
    res.send('Number Ninja Server is running!');
});

// New endpoint to find a game that is waiting for a second player
app.get('/api/games/find', async (req, res) => {
    try {
        const waitingGame = await Game.findOne({ status: 'waiting', players: { $size: 1 } });
        if (waitingGame) {
            res.json({ gameId: waitingGame._id });
        } else {
            res.status(404).json({ message: 'No available games found.' });
        }
    } catch (error) {
        console.error("Error finding game:", error);
        res.status(500).json({ message: 'Server error' });
    }
});


// --- Math Problem Generator ---
function generateProblem(difficulty) {
    const num1 = Math.floor(Math.random() * 10) + (difficulty * 5);
    const num2 = Math.floor(Math.random() * 10) + (difficulty * 5);
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    let question = `${num1} ${operation} ${num2}`;
    let answer = eval(question);
    return { question, answer };
}


// --- Socket.IO Real-time Logic ---
io.on('connection', (socket) => {
    console.log(`A user connected: ${socket.id}`);

    socket.on('createGame', async (data) => {
        try {
            const { userId } = data;
            const { question, answer } = generateProblem(1);
            const newGame = new Game({
                players: [userId],
                playerInfo: { [userId]: { score: 0, streak: 0 } },
                currentQuestion: question,
                _currentAnswer: answer,
                turn: userId,
            });
            await newGame.save();
            socket.join(newGame._id.toString());
            socket.emit('gameCreated', { gameId: newGame._id.toString(), playerInfo: { [userId]: { score: 0, streak: 0 } } });
            console.log(`Game created with ID: ${newGame._id} by user ${userId}`);
        } catch (error) {
            console.error(error);
            socket.emit('error', { message: 'Could not create game.' });
        }
    });

    socket.on('joinGame', async (data) => {
        try {
            const { gameId, userId } = data;
            const game = await Game.findById(gameId);
            if (!game || game.status !== 'waiting' || game.players.length !== 1) {
                return socket.emit('error', { message: 'Game not available to join.' });
            }
            if (game.players[0].toString() === userId) {
                 return socket.emit('error', { message: 'You cannot join your own game.'});
            }
            game.players.push(userId);
            game.playerInfo.set(userId, { score: 0, streak: 0 });
            game.status = 'in-progress';
            await game.save();
            socket.join(gameId);
            console.log(`User ${userId} joined game ${gameId}. Game is now in progress.`);
            io.to(gameId).emit('gameStateUpdate', {
                gameId: game._id.toString(),
                status: game.status,
                players: game.players,
                playerInfo: Object.fromEntries(game.playerInfo),
                currentQuestion: game.currentQuestion,
                turn: game.turn,
            });
        } catch (error) {
            console.error("Join game error:", error);
            socket.emit('error', { message: 'Could not join game.' });
        }
    });

    socket.on('submitAnswer', async (data) => {
        try {
            const { gameId, userId, answer } = data;
            const game = await Game.findById(gameId).select('+_currentAnswer');
            if (!game || game.status !== 'in-progress' || game.turn.toString() !== userId) {
                return socket.emit('error', { message: 'Invalid move.' });
            }
            const isCorrect = (parseInt(answer) === game._currentAnswer);
            let playerInfo = game.playerInfo.get(userId);
            if (isCorrect) {
                playerInfo.streak += 1;
                playerInfo.score += 10 + (playerInfo.streak * 2);
            } else {
                playerInfo.streak = 0;
            }
            game.playerInfo.set(userId, playerInfo);
            const { question, answer: newAnswer } = generateProblem(game.difficulty + (isCorrect ? 1 : 0));
            game.currentQuestion = question;
            game._currentAnswer = newAnswer;
            game.difficulty = Math.min(game.difficulty + (isCorrect ? 1 : 0), 10);
            const otherPlayerId = game.players.find(p => p.toString() !== userId);
            game.turn = otherPlayerId;
            await game.save();
            io.to(gameId).emit('gameStateUpdate', {
                playerInfo: Object.fromEntries(game.playerInfo),
                currentQuestion: game.currentQuestion,
                turn: game.turn,
            });
        } catch (error) {
            console.error(error);
            socket.emit('error', { message: 'Error submitting answer.' });
        }
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});


// --- Start Server ---
// We use 'server.listen' here because it's the http server that Socket.IO is attached to.
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

