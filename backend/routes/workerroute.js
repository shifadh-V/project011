const express=require('express')
const router=express.Router()
const workercontroller=require('../controllers/workercontroller')

router.post('/crteworker',workercontroller.createworker)

module.exports = router