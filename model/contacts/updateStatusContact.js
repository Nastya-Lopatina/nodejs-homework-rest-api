const { Contact } = require('../../db/contactModel.js')

const updateStatusContact = async (contactId, body) => {
  const updateContact = await Contact.findByIdAndUpdate(contactId, { $set: body })
  return updateContact
}

module.exports = { updateStatusContact }
