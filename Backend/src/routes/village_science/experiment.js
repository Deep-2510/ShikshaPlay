const express = require("express");
const Evidence = require("../../models/evidence");
const experimentrouter = express.Router();

// Run simulated experiment
experimentrouter.post("/run", async (req, res) => {
  const { sampleType, input } = req.body;
  try {
    let result;

    if (sampleType === "water" && input === "pH") {
      result = { test: "pH", value: 5.2, unit: "pH scale" };
    } else if (sampleType === "soil" && input === "nitrogen") {
      result = { test: "Nitrogen", value: 30, unit: "ppm" };
    } else {
      result = { message: "No simulation available for this test" };
    }

    res.json({ sampleType, input, result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = experimentrouter;