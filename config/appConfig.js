"use strict";
const prefix = '';
module.exports = {
  EXPIRES: 86400,
  JWT_SECRET_KEY: 'Integra-$PearsonLTI',
  PREFIX: prefix,
  LTI_WEBSITE: 'http://localhost:2020',
  PSVC_WEBSITE: 'http://localhost:2060',
  MailTemplate: {
    "ForgotPassword": 1,
    "AdminUserCreation": 2,
    "ChangePassword": 3
  },
  AUTH_URL: [
    prefix + '/getAllSMSUsers',
    prefix + '/getAllCourseForUser',
    prefix + '/lti',
    prefix + '/ltiGenerateToken',
    prefix + '/adminAuthenticate',
    prefix + '/forgotPassword',
    prefix + '/'
  ],
  CROS_OPTIONS: {
    origin: ["http://localhost:2020", "http://localhost:2060"],
    allowedHeaders: [
      "Content-Type",
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Authorization",
      "ud",
      "X-Requested-With",
      "Access-Control-Allow-Credentials"
    ],
    EXPOSEDHEADERS: ["Authorization"],
    ALLOWEDMETHODS: ["GET,HEAD,OPTIONS,POST,PUT,PATCH"],
    credentials: true,
  },
  defaultPassword: 'Password@123',
  isDefault: true
};
