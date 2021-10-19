const { Contact } = require('../../db/contactModel')

const updateContact = async (contactId, body, owner) => {
  await Contact.findByIdAndUpdate({ _id: contactId, owner }, { $set: body })
  return Contact.findOne({ _id: contactId, owner })
}

module.exports = {
  updateContact
}
