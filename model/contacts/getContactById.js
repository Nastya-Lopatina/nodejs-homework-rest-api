const { getlistContacts } = require('./getListContacts')

const getContactById = async (contactId) => {
  const contacts = await getlistContacts()
  const contact = contacts.find((contact) => contact.id === Number(contactId))
  console.log(contact)
  return contact
}

module.exports = { getContactById }
