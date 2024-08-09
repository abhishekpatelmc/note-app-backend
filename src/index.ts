import express, { Express, Request, Response } from "express";
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;

const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Note App Backend" });
});

app.listen(PORT, () => {
  console.log(`Server started running on ${PORT}`);
});
