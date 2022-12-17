const dotenv = require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/task.routes");

const app = express();
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:5000",
      "https://mern-stack-app-sna9.onrender.com/",
    ],
  })
);
app.use("/api/tasks", taskRoutes);
// function looger(req, res, next) {
//   console.log("middleware running");
//   console.log(req.method);
//   next();
// }

// development
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    );
  });
} else {
}

// // Routes
// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

const PORT = process.env.PORT || "4000";
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
