const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema({
  title: String,
  image: String,
  price: Number,
  mileage: Number,
  color: String,
  kmsDriven: Number,
  majorScratches: Boolean,
  originalPaint: Boolean,
  accidentsReported: Number,
  previousBuyers: Number,
  registrationPlace: String,
  userID:String

});
const InventoryModel = new mongoose.model("inventoryData", InventorySchema);
module.exports = {InventoryModel}
