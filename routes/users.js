const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile', passport.checkAuthentication, usersController.profile);

router.get('/sign-up', passport.alreadyAuthenticated, usersController.signUp);
router.get('/sign-in', passport.alreadyAuthenticated, usersController.signIn);
router.get('/sign-out',usersController.destroySession);

router.post('/create',usersController.create);

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'}
) , usersController.createSession);

module.exports = router;