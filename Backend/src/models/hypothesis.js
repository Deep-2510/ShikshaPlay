const mongoose = require("mongoose");

const HypothesisSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  proposedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // who came up with the hypothesis
    required: true,
  },
  statement: {
    type: String,
    required: true, // e.g. "The crop is infected due to fungal spores in the soil"
  },
  linkedEvidence: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Evidence",
    },
  ],
  supportingAnalysis: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LabAnalysis",
    },
  ],
  status: {
    type: String,
    enum: ["Proposed", "Testing", "Accepted", "Rejected"],
    default: "Proposed",
  },
  reasoning: {
    assumptions: [String], // e.g. "High humidity favors fungal growth"
    logicalSteps: [String], // structured reasoning flow
    counterArguments: [String], // what might disprove it
  },
  testedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // who tested this hypothesis
  },
  testedAt: {
    type: Date,
  },
  conclusion: {
    type: String, // outcome of testing
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hypothesis", HypothesisSchema);
