const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    picture: {
      type: String,
    },
    email_verified: { type: Boolean, default: false },
    questions: [{ type: Schema.Types.ObjectId, ref: "question" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", usersSchema);
