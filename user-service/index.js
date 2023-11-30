const express = require("express");
const { connect } = require("mongoose");
const User = require("./model/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

connect("mongodb://127.0.0.1:27017/Chat")
  .then(() => {
    console.log("user-service connected to db");
  })
  .catch((e) => {
    console.log(e);
  });

app.post("/register", (req, res) => {
  const { firstName, lastName, email, password, adresse, birthDate, image } =
    req.body;
  const user = new User({
    firstName,
    lastName,
    email,
    password: bcrypt.hashSync(password, 10),
    adresse,
    birthDate,
    image,
  });
  user
    .save()
    .then((savedUser) => {
      res.send({
        user: savedUser,
        token: jwt.sign({ user: savedUser }, "jwt_key"),
      });
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(5001, () => {
  console.log("User service listenning on port 5001");
});
