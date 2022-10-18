const express = require("express");
const { Login, checkJWT, logout } = require("../controllers/auth");
const protect = require("../middlewares/protect");

const router = express.Router();

// to verify every auth everytine client refresh
router.post("/check", protect, checkJWT);

router.post("/login", Login);
router.post("/logout", logout);

module.exports = router;
