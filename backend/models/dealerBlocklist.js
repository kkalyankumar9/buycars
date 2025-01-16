const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
});

const DealerBlackListModule = new mongoose.model("blacklistDealer", blacklistedTokenSchema);
module.exports = { DealerBlackListModule };
