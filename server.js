"use strict";
const express = require("express");
const compression = require("compression");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const APP_CONFIG = require("./config/appConfig");
const modeconfig = require('./config/env_mode.json')
const expressJwt = require("express-jwt");
const jwtLib = require("./public/jwtlib");
var session = require('express-session');

app.use(compression());
app.use(cors(APP_CONFIG.CROS_OPTIONS));
app.use(bodyParser.json({
  limit: '50mb'
}));
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: false,
  parameterLimit: 1000000
}));
//app.use(bodyParser({ limit: '50mb' }));

app.use(
  APP_CONFIG.PREFIX,
  expressJwt({ secret: APP_CONFIG.JWT_SECRET_KEY }).unless({
    path: APP_CONFIG.AUTH_URL
  })
);

app.use(session({
  secret: 'SOMETHING VERY SECRET',
  resave: true,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 1200000,
  }
}));

app.use(function (req, res, next) {
  if (new Date().getTime > (req.session.cookie.expires).getTime()) {
    res.status(401).send({
      data: "Session Expire. Please login via LTI to use this application."
    })
  }
  else {
    next();
  }
});

app.use(function (err, req, res, next) {
  jwtLib.errorVerification(err, req, res, next);
});

app.use(function (req, res, next) {
  jwtLib.authenticate(req, res, next);
});

require("./app")(app);

const port = process.env.PORT || 2040;
app.listen(port, function () {
  console.log('Currently running in ' + modeconfig.ENVMODE + ' Mode');
  console.log("Pearson api listening on port " + port + "!");
});
