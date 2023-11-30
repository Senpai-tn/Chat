const express = require("express");
var proxy = require("express-http-proxy");

const app = express();
app.use(express.json());
app.use("/user", proxy("127.0.0.1:5001"));

app.listen(5000, () => {
  console.log("Main server listenning on port 5000");
});
