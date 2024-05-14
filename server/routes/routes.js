const express=require('express')
const userController = require('../controller/user-controller.js');

const router=express.Router()

router.post('/add',userController.addUser)
router.get('/all',userController.getUser)
router.get('/:id',userController.getSingle)
router.post('/:id',userController.edit)
router.delete('/:id',userController.deleteUser)
module.exports=router