const mongoose = require("mongoose");

const ClueSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  text: {
    type: String,
    required: true, // e.g. "Leaves are showing yellow patches near the roots"
  },
  type: {
    type: String,
    enum: ["Observation", "NPC Dialogue", "Document", "Location Hint"],
    default: "Observation",
  },
  linkedEvidence: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Evidence",
    },
  ],
  discoveredBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // who found it
  },
  discoveredAt: {
    type: Date,
    default: Date.now,
  },
  importance: {
    type: String,
    enum: ["Low", "Medium", "High"], // how critical the clue is to solving case
    default: "Medium",
  },
  status: {
    type: String,
    enum: ["Hidden", "Found", "Used"],
    default: "Hidden",
  },
});

module.exports = mongoose.model("Clue", ClueSchema);
