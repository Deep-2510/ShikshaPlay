const express = require("express");
const Hypothesis = require("../../models/hypothesis");

const hypothesisrouter = express.Router();

// Submit hypothesis for a case
hypothesisrouter.post("/cases/:caseId/hypotheses", async (req, res) => {
  try {
    const hypothesis = new Hypothesis({
      ...req.body,
      caseId: req.params.caseId,
    });
    await hypothesis.save();
    res.status(201).json(hypothesis);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all hypotheses for a case
hypothesisrouter.get("/cases/:caseId/hypotheses", async (req, res) => {
  try {
    const hypotheses = await Hypothesis.find({ caseId: req.params.caseId });
    res.json(hypotheses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single hypothesis details
hypothesisrouter.get("/:hypothesisId", async (req, res) => {
  try {
    const hypothesis = await Hypothesis.findById(req.params.hypothesisId);
    if (!hypothesis)
      return res.status(404).json({ error: "Hypothesis not found" });
    res.json(hypothesis);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = hypothesisrouter;
