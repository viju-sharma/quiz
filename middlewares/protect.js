const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const { cookieParser } = require("../utils/cookieParser");
const protect = async (req, res, next) => {
  // console.log(req)
  const cookies = req.headers.cookie;
  try {
    const cookieObj = cookieParser(cookies);
    const token = cookieObj["token"];
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(400).send("Wrong Token");
      }
      const user = await User.find({ _id: decoded.id });
      if (!user) return res.status(404).send("Unauthorized");
      req.user = user;
      next();
    });
  } catch (err) {
    console.log(err);
    res.status(401).send("wrong token");
  }
};
module.exports = protect;
