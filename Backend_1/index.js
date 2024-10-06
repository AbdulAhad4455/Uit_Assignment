const express = require("express");
const cors = require("cors");

const userRouter = require("./routes/users");
const todoRouter = require("./routes/todos");

require("./db");

const app = express();

app.use(express.json());
app.use(cors());


app.use(userRouter);
app.use(todoRouter);

  app.use("*", (req, res) => {
    res.send("Not Found!");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});