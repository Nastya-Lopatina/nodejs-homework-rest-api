const fs = require('fs/promises')
const path = require('path')
const contactsPath = path.resolve('../../db/contacts.json')

const { getContactById } = require('./getContactById')
const { getListContacts } = require('./getListContacts')

const updateContact = async (contactId, body) => {
  const contacts = await getListContacts()
  const contact = await getContactById(contactId)

  const updateContact = { ...contact, ...body }
  const updateContactList = contacts.filter(contact => contact.id !== Number(contactId))

  await fs.writeFile(contactsPath, JSON.stringify([...updateContactList, updateContact]), 'utf-8')
  return updateContact
}

module.exports = { updateContact }
