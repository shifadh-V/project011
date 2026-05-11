const express = require('express')
const router = express.Router();
const workercontroller = require('../controllers/workercontroller')
const authmiddleware=require('../middlewares/middleware')

router.post('/createworker', workercontroller.createworker)
router.post('/loginworker', workercontroller.login)

module.exports = router;