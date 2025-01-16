const jwt = require("jsonwebtoken");
const {  UserBlackListModule } = require("../models/userBlackList");

const userAuth = async (req, res, next) => {
  // const headers = req.headers.authorization;
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(400).json({ msg: "Token not found, please login" });
    } else {
      const isBlacklisted = await UserBlackListModule.findOne({ token });
      if (isBlacklisted) {
        return res.status(400).json({ msg: "Token blacklisted, login again" });
      }
      const decode = jwt.verify(token, process.env.SECRETKEY);

      req.body.userID = decode.userID;
     
      next();
    }
  } catch (error) {
    res.status(500).send("Internal server error!");
    console.log(error);
  }
};
module.exports = { userAuth };
