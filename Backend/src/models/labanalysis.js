const mongoose = require("mongoose");
const LabAnalysisSchema = new mongoose.Schema({
  evidenceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Evidence",
    required: true,
  },
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  performedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // player/scientist who ran the test
  },
  testType: {
    type: String,
    enum: ["Chemical", "Biological", "Microscopic", "WaterQuality", "SoilTest", "Other"],
    required: true,
  },
  procedure: {
    type: [String], // step-by-step method
  },
  results: {
    textSummary: String, // plain language summary
    numericFindings: [
      {
        label: String, // e.g. "Nitrogen Level", "Bacteria Count"
        value: Number,
        unit: String, // e.g. "ppm", "CFU/mL"
      },
    ],
    conclusion: String, // e.g. "Likely fungal infection due to spore presence"
  },
  verified: {
    type: Boolean,
    default: false, // true when approved/validated by system or expert NPC
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("LabAnalysis", LabAnalysisSchema);