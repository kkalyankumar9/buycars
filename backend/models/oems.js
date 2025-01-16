const mongoose = require("mongoose");

const OEMSpecSchema = new mongoose.Schema({
  model: String,
  year: Number,
  listPrice: Number,
  colors: [String],
  mileage: Number,
  power: Number,
  
  maxSpeed: Number,
  
});


const OEMSModel = new mongoose.model("OEMSpec", OEMSpecSchema);

module.exports = { OEMSModel };
