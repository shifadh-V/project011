const express=require('express')
const router=express.Router()
const usercontroller=require('../controllers/usercontroller')
const authmiddleware=require('../middlewares/middleware')
const User = require('../models/usermodel')

router.post('/createuser',usercontroller.createuser)
router.post('/loginuser',usercontroller.login)
router.get('/dataread',usercontroller.readdata)
router.put('/update',usercontroller.updata)

module.exports=router;
