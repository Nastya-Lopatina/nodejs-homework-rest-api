
const express = require('express')
const router = express.Router()

const { signUp, signIn, signOut, getUser, uploadingAvatars } = require('../../controllers/users/index.js')
const { signUpUser } = require('../../middlewares/validation/validationUsers.js')
const { authorization } = require('../../middlewares/authorization/authorization.js')
const { uploadgAvatar } = require('../../middlewares/uploadFiles/uploadAvatar.js')

// const {logout} = require('../../model/users/index')
router.post('/signup', signUpUser, signUp)
router.post('/login', signUpUser, signIn)
router.post('/logout', authorization, signOut)
router.get('/current', authorization, getUser)
router.patch('/avatars', [authorization, uploadgAvatar.single('avatar')], uploadingAvatars)

module.exports = router
