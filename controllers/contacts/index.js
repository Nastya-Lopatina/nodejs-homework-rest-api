const { getContacts, getById } = require('./getContacts')
const { postContact } = require('./postContact')
const { patchContactById } = require('./updateContact')
const { deleteContact } = require('./deleteContact')
const { patchContactStatus } = require('./patchContactStatus')

module.exports = {
  getContacts,
  getById,
  postContact,
  patchContactById,
  deleteContact,
  patchContactStatus
}
