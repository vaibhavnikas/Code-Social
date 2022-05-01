const express = require('express');
const passport = require('../config/passport-local-strategy');

const router = express.Router();

const commentsController = require('../controllers/comments_controller');

router.use('/create', passport.checkAuthentication, commentsController.create);

module.exports = router;