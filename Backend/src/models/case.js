const mongoose = require("mongoose");

const CaseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    enum: ["Crop Disease", "Water Contamination", "Power Outage", "Other"],
  },
  description: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    default: "Easy",
  },
  status: {
    type: String,
    enum: ["Unsolved", "In Progress", "Solved"],
    default: "Unsolved",
  },
  clues: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clue",
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // player who discovered/reported
    required: true,
  },
  solvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // player who solved it
  },
  solution: {
    hypothesis: String,
    stepsTaken: [String],
    finalAnswer: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Case", CaseSchema);
