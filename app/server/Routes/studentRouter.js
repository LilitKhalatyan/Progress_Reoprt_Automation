const express = require('express');
const verify = require('../Middlewares/verify');
const studentController = require('../Controllers/studentController');
const { verifyIt } = verify;
const { addOne, getAll, getOne, updateOne, deleteOne } = studentController;

const router = express.Router();

router.post('/add', verifyIt, addOne);
router.get('/all', verifyIt, getAll);
router.get('/:id', verifyIt, getOne);
router.put('/:id', verifyIt, updateOne);
router.delete('/:id', verifyIt, deleteOne);


module.exports = router;