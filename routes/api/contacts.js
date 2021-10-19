const express = require('express')
const router = express.Router()
const path = require('path')

const controllers = path.resolve('../../controllers/contacts/index.js')
const validation = path.resolve('../../middlewares/validation/validationContacts.js')
const authorizationPath = path.resolve('../../middlewares/authorization/authorization.js')

const controllsContacts = require(controllers)
const validationPath = require(validation)
const { authorization } = require(authorizationPath)

router.get('/', authorization, controllsContacts.getContacts)
router.get('/:contactId', authorization, controllsContacts.getById)
router.post('/', authorization, validationPath.addValidation, controllsContacts.postContact)
router.patch('/:contactId', authorization, validationPath.patchContactValidation, controllsContacts.patchContactById)
router.patch('/:contactId/favorite', authorization, validationPath.patchContactValidation, controllsContacts.patchContactFavorite)
router.delete('/:contactId', authorization, controllsContacts.deleteContact)

module.exports = router
