const express = require("express");
const Evidence = require("../../models/evidence");

const evidencerouter = express.Router();

// Add evidence to a case
evidencerouter.post("/cases/:caseId/evidence", async (req, res) => {
  try {
    const evidence = new Evidence({ ...req.body, caseId: req.params.caseId });
    await evidence.save();
    res.status(201).json(evidence);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all evidence for a case
evidencerouter.get("/cases/:caseId/evidence", async (req, res) => {
  try {
    const evidence = await Evidence.find({ caseId: req.params.caseId });
    res.json(evidence);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single evidence
evidencerouter.get("/:evidenceId", async (req, res) => {
  try {
    const evidence = await Evidence.findById(req.params.evidenceId);
    if (!evidence) return res.status(404).json({ error: "Evidence not found" });
    res.json(evidence);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = evidencerouter;
