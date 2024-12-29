const express = require("express");
const { resolve } = require("path");
const connectDB = require("./db");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3010;

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

connectDB();

app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
