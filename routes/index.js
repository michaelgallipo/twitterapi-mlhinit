const express = require('express');
const router = express.Router();
const userFunctions = require('../controllers/userController');

// router.get('/users', userFunctions.listAllUsers)
// router.post('/users', userFunctions.createUser)

router.get('/:twitterId', userFunctions.findUser)


module.exports = router;