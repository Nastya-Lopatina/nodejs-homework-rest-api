const { getListContacts } = require('./getListContacts')
const { getContactById } = require('./getContactById')
const { removeContact } = require('./removeContact.js')
const { addContact } = require('./addContact.js')
const { updateContact } = require('./updateContact.js')
const { updateStatusContact } = require('./updateStatusContact.js')

module.exports = {
  getListContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact
}
