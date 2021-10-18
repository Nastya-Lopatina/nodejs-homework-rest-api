const express = require('express')
const router = express.Router()
const path = require('path')

const controllers = path.resolve('../../controllers/contacts/index.js')
const validation = path.resolve('../../middlewares/validation/validationContacts.js')

const controllsContacts = require(controllers)
const validationPath = require(validation)

router.get('/', controllsContacts.getContacts)
router.get('/:contactId', controllsContacts.getById)
router.post('/', validationPath.addValidation, controllsContacts.postContact)
router.patch('/:contactId', validationPath.patchContactValidation, controllsContacts.patchContactById)
router.patch('/:contactId/favorite', validationPath.patchContactValidation, controllsContacts.patchContactFavorite)
router.delete('/:contactId', controllsContacts.deleteContact)

module.exports = router
