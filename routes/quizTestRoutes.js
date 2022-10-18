const express = require("express");
const {
  addQuiz,
  getAllQuizs,
  getQuizById,
} = require("../controllers/quizTestController");
const protect = require("../middlewares/protect");

const router = express.Router();

// to verify every auth everytine client refresh
router.post("/addQuiz", protect, addQuiz);
router.get("/getAllQuizs", protect, getAllQuizs);
router.get("/test/:id", protect, getQuizById);

module.exports = router;
