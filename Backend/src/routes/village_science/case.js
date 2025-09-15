const Case=require("../../models/case");
const express = require("express");


const caserouter = express.Router();

// Create new case (admin)
caserouter.post("/", async (req, res) => {
  try {
    const newCase = new Case(req.body);
    await newCase.save();
    res.status(201).json(newCase);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List all cases
caserouter.get("/", async (req, res) => {
  const cases = await Case.find();
  res.json(cases);
});

// Get single case details
caserouter.get("/:caseId", async (req, res) => {
  try {
    const gameCase = await Case.findById(req.params.caseId);
    if (!gameCase) return res.status(404).json({ error: "Case not found" });
    res.json(gameCase);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = caserouter;
