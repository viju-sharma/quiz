const jwt_decode = require("jwt-decode");
const signJWT = require("../middlewares/signJwt");
const User = require("../models/userModel");
//login
exports.Login = async (req, res, next) => {
  const { googleToken } = req.body;
  try {
    const decoded = await jwt_decode(googleToken);
    const { email_verified, email, name, picture } = decoded;
    const user = await User.findOne({ email }).select("_id email name picture");

    if (!user) {
      const userSchema = new User({ email_verified, email, name, picture });
      const newUser = await userSchema.save();
      const jwtToken = signJWT(newUser._id);
      res.cookie("token", jwtToken, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      });
      return res.status(200).json(newUser);
    } else {
      const jwtToken = signJWT(user._id);
      res.cookie("token", jwtToken, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
      });
      return res.status(200).json(user);
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Internal server error" });
  }
};

exports.checkJWT = (req, res) => {
  const user = req.user;
  res.status(202).json(user);
};

exports.logout = async (req, res) => {
  res.clearCookie("token");
  return res.status(201).send({ message: "Logged Out Succesfully" });
};
