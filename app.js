const express = require("express");

const bodyParser = require("body-parser");

const cors = require("cors");

const logger = require("morgan");

const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

// handle incoming Requests
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizTestRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

// Serve Static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose
  .connect(process.env.MONGODB_CLUSTER)
  .then(() => {
    console.log("database connected");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log("server is spinning on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
