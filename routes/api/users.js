
const express = require('express')
const router = express.Router()
const path = require('path')

const controllersPath = path.resolve('../../controllers/users/index.js')
const validationPath = path.resolve('../../middlewares/validation/validationUsers.js')
const authorizationPath = path.resolve('../../middlewares/authorization/authorization.js')

const controllsUsers = require(controllersPath)
const validation = require(validationPath)
const { authorization } = require(authorizationPath)

// const {logout} = require('../../model/users/index')
router.post('/signup', validation.signUp, controllsUsers.signUp)
router.post('/login', validation.signUp, controllsUsers.signIn)
router.post('/logout', authorization, controllsUsers.signOut)
router.get('/current', authorization, controllsUsers.getUser)

module.exports = router
