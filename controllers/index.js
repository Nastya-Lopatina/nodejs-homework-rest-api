const { getContacts, getById } = require('./getContacts')
const { postContact } = require('./postContact')
const { patchContactById } = require('./updateContact')
const { deleteContact } = require('./deleteContact')

module.exports = {
  getContacts,
  getById,
  postContact,
  patchContactById,
  deleteContact
}