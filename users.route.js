const express = require('express');
const validator = require('express-joi-validation').createValidator({})
const router = express.Router();
const usersController = require('../controllers/users.controller');
const usersValidator = require('../helpers/validators/users.validator');

router.get('/', (req, res) => {
    return usersController.getAllUsers(req, res);
});


router.post('/', validator.body(usersValidator), (req, res) => {
    return usersController.createUser(req, res);
});

router.get('/:id', (req, res) => {
    return usersController.getUserById(req, res);
});

router.put('/:id', validator.body(usersValidator), (req, res) => {
    
}); 

module.exports = router;