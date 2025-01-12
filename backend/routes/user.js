const express = require('express')
const router = express.Router();

const { createUser } = require('./../controllers/createUser')
const { getAllUsers } = require('./../controllers/getAllUsers')

router.post('/createUser', createUser);
router.get('/getallUsers', getAllUsers);


module.exports = router;

