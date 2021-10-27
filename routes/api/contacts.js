const express = require('express')
const router = express.Router()

const {
  getContacts,
  getById,
  postContact,
  patchContactById,
  deleteContact,
  patchContactStatus
} = require('../../controllers/contacts/index.js')

const { addValidation, patchContactValidation } = require('../../middlewares/validation/index.js')

const { authorization } = require('../../middlewares/authorization/authorization.js')

router.get('/', authorization, getContacts)
router.get('/:contactId', authorization, getById)
router.post('/', authorization, addValidation, postContact)
router.patch('/:contactId', authorization, patchContactValidation, patchContactById)
router.patch('/:contactId/favorite', authorization, patchContactValidation, patchContactStatus)
router.delete('/:contactId', authorization, deleteContact)

module.exports = router
