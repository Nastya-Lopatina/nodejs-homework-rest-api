
const { getListContacts } = require('./getListContacts')

const getContactById = async (contactId) => {
  const contacts = await getListContacts()
  const contact = contacts.find((contact) => contact.id === Number(contactId))
  console.log(contact)
  return contact
}

module.exports = { getContactById }
