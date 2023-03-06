const express = require('express');
const validator = require('express-joi-validation').createValidator({})
const router = express.Router();
const listsValidator = require('../helpers/validators/lists.validator');


router.get('/', (req, res) => {

});


router.post('/', validator.body(listsValidator), (req, res) => {

});


router.put('/:id', validator.body(listsValidator), (req, res) => {

});


module.exports = router;