const express=require('express');

const router=express.Router();

const homeController=require('../controller/home_controller');

router.get('/',homeController.home);

router.post('/create-task',homeController.create);

//router.post('/delete-task/:id',homeController.delete);

router.post('/delete-task',homeController.delete);
router.use('/user',require('./user'));

module.exports=router;