const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    ownerEmail: {
      type: String,
      required: true,
    },
    questions: { type: Array, default: [] },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("question", questionSchema);
