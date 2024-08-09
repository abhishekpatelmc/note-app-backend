const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Note App Backend" });
});

app.listen(PORT, () => {
  console.log(`Server started running on ${PORT}`);
});
