//import { v4 as uuidv4 } from 'uuid';

var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require('uuid');

var database = require("../database");

router.post("/login", function (request, response, next) {
  var user_email_address = request.body.user_email_address;

  var user_password = request.body.user_password;

  if (user_email_address && user_password) {
    query = `
        SELECT * FROM user_login 
        WHERE user_email = "${user_email_address}" AND user_password = "${user_password}"
        `;

    database.query(query, function (error, data) {
      if (data.length === 1) {
        // data e un array cu userii gasiti
        const key = uuidv4();
        request.session.user_id = key 
        response.status(200).json({key: key})
      } else {
        response.status(404); 
      }
      response.end();
    });
  } else {
    response.status(400).send("Please Enter Email Address and Password Details");
    response.end();
  }
});

router.get("/logout", function (request, response, next) {
  request.session.destroy();

  response.status(200);
});

module.exports = router;
