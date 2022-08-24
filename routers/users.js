const express = require("express");

const router = express.Router();

const usersControllers = require('../controllers/users_controllers');

router.get('/',usersControllers.profile)

module.exports = router;