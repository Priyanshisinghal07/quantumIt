
const express = require("express")
const {Register,Login} = require("../controller/user.controller")
const router = express.Router()

router.post('/signup',Register)
router.post('/signin', Login)

module.exports = router