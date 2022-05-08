const router = require('express').Router();
const loginRoute = require('./loginRoute');
const postRoute = require('./postRoute');
const signupRoute = require('./signupRoute');


router.use('/login', loginRoute);
router.use('/post', postRoute);
router.use('/signup', signupRoute);

module.exports = router;