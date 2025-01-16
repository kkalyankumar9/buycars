const express = require("express");


const { dealerAuth } = require("../middleware/dealerMiddleware");
const { InventoryModel } = require("../models/inventoryModel");
const { DealModel } = require("../models/dealerModel");

const dealCrudRoutes = express.Router();



dealCrudRoutes.get("/get", async (req, res) => {
    
  try {
    const data = await InventoryModel.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

dealCrudRoutes.post("/create", dealerAuth, async (req, res) => {
    try {
      const {
        title,
        description,
        price,
        mileage,
        color,
        kmsDriven,
        registrationPlace,
        majorScratches,
        originalPaint,
        accidentsReported,
        previousBuyers,
        userID
      } = req.body;
  
      const data = new InventoryModel({
        title,
        description,
        price,
        mileage,
        color,
        kmsDriven,
        registrationPlace,
        majorScratches,
        originalPaint,
        accidentsReported,
        previousBuyers,
        userID
      });
  
      await data.save();
      res.status(201).send({ msg: "New inventory item has been created.", data });
    } catch (error) {
      res.status(500).send({ error: "Failed to create inventory item. " + error.message });
    }
  });
  

dealCrudRoutes.patch("/update/:id",dealerAuth, async (req, res) => {
  const { id } = req.params;

  try {
    const data = await InventoryModel.findOne({ _id: id });
    if (!data) {
      return res.status(404).send({ error: "Task not found" });
    }
    if (data.userID !== req.body.userID) {
      return res.status(403).send({ error: "Not authorized" });
    }
    await InventoryModel.findByIdAndUpdate(id, req.body);
    res.status(200).send({ msg: `Task with id ${id} has been updated` });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

dealCrudRoutes.delete("/delete/:id",dealerAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const data = await InventoryModel.findOne({ _id: id });
    if (!data) {
      return res.status(404).send({ error: "Task not found" });
    }
    if (data.userID !== req.body.userID) {
      return res.status(403).send({ error: "Not authorized" });
    }
    await InventoryModel.findByIdAndDelete(id);
    res.status(200).send({ msg: `Task with id ${id} has been deleted` });
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

module.exports = { dealCrudRoutes };
