const authenticationController = require('../controllers/authenticationController');
const express = require('express');

const authenticationRouter = express.Router();

authenticationRouter.post('/login', authenticationController.login)

module.exports = authenticationRouter;

