const Question = require("../models/questionsModel");
const User = require("../models/userModel");
exports.addQuiz = async (req, res) => {
  const { subject, questions } = req.body;
  const user = req.user[0];
  console.log(user);
  try {
    const questionSchema = new Question({
      subject,
      questions,
      ownerEmail: user.email,
    });
    const questionObj = await questionSchema.save();
    await User.findByIdAndUpdate(user._id, {
      $push: { questions: questionObj._id },
    });
    return res.status(200).send({ message: "added succesfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: "could Not save" });
  }
};

exports.getAllQuizs = async (req, res) => {
  const user = req.user[0];
  const savedUser = await User.findById(user._id).populate("questions");
  if (!savedUser) return res.status(404).send({ message: "user not found" });
  res.status(200).json(savedUser.questions);
};

exports.getQuizById = async (req, res) => {
  const id = req.params.id;
  const question = await Question.findById(id);
  if (!question)
    return res.status(404).send({ message: "Requested Quit Not Found" });
  return res.status(200).json(question.questions);
};
