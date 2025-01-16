const mongoose = require("mongoose");

const dealSchema = mongoose.Schema(
  {

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: /^\S+@\S+\.\S+$/,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      trim: true,
    }
    
  },
  {
    versionKey: false,
  }
);

const DealModel = new mongoose.model("dealerData", dealSchema);

module.exports = { DealModel };
