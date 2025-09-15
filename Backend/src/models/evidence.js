const mongoose = require("mongoose");

const EvidenceSchema = new mongoose.Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Sample", "Image", "Report", "Measurement", "Other"],
    required: true,
  },
  description: {
    type: String,
  },
  collectedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // player who found it
    required: true,
  },
  collectedAt: {
    type: Date,
    default: Date.now,
  },
  testData: {
    // scientific-style structured data
    observations: [String], // e.g. "Leaf spots visible", "Water pH = 5.2"
    numericResults: [
      {
        label: String, // e.g. "pH", "Temperature"
        value: Number,
        unit: String, // e.g. "°C", "pH scale"
      },
    ],
    fileLink: String, // link to uploaded lab report/image
  },
  verified: {
    type: Boolean,
    default: false, // becomes true when game engine/lab confirms it's valid
  },
});

module.exports = mongoose.model("Evidence", EvidenceSchema);
