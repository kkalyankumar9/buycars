const express = require("express");
const { OEMSModel } = require("../models/oems");

const oemsRouter = express.Router();


oemsRouter.get("/count", async (req, res) => {
  try {
    const count = await OEMSModel.countDocuments(); // Count all documents in the OEMSModel collection
    res.status(200).json({ totalModels: count });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch OEM model count. " + error.message });
  }
});



oemsRouter.get("/specs", async (req, res) => {
  try {
    const { model, year } = req.query;

    // Validate query parameters
    if (!model || !year) {
      return res.status(400).json({ error: "Model and year are required." });
    }

    // Find the OEM specs matching the query
    const specs = await OEMSModel.findOne({ model: model, year: parseInt(year) });

    if (!specs) {
      return res.status(404).json({ message: `OEM Specs not found for ${model} ${year}` });
    }

    res.status(200).json(specs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch OEM specs. " + error.message });
  }
});
oemsRouter.get("/get", async (req, res) => {
  try {
    const data = await OEMSModel.find();
    console.log(data)
     // Count all documents in the OEMSModel collection
    res.status(200).json({ data: data });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch OEM model count. " + error.message });
  }
});
module.exports = oemsRouter;
