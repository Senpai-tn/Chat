const express = require("express");
const { connect } = require("mongoose");
connect("mongodb://127.0.0.1:27017/Chat")
  .then(() => {
    console.log("user-service connected to db");
  })
  .catch((e) => {
    console.log(e);
  });

const app = express();

app.get("/", (req, res) => {
  res.send("hello from user-service");
});
app.listen(5001, () => {
  console.log("User service listenning on port 5001");
});
