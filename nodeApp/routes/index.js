//import { v4 as uuidv4 } from 'uuid';

var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

var database = require("../database");

router.post("/login", function (request, response, next) {
  if (request.session.key) {
    response.status(400).send('User already logged in');
    return;
  }

  var user_email_address = request.body.user_email_address;

  var user_password = request.body.user_password;

  if (user_email_address && user_password) {
    query = `
        SELECT * FROM users
        WHERE email = "${user_email_address}" AND password = "${user_password}"
        `;

    database.query(query, function (error, data) {
      if (error) {
        response.status(500).send(error);
        return
      }
      if (data.length === 1) {
        // data e un array cu userii gasiti
        const key = uuidv4();
        request.session.key = key;
        response.status(200).json({ key: key });
      } else {
        response.status(404);
      }
      response.end();
    });
  } else {
    response
      .status(400)
      .send("Please Enter Email Address and Password Details");
    response.end();
  }
});

router.get("/logout", function (request, response, next) {
  request.session.destroy();

  response.status(200);
  response.end();
});

module.exports = router;
