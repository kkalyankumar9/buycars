const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
});

const UserBlackListModule = new mongoose.model("userBlacklist", blacklistedTokenSchema);
module.exports = { UserBlackListModule };
