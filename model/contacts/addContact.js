const fs = require('fs/promises')
const path = require('path')

const contactsPath = path.resolve('./db/contacts.json')

const { getListContacts } = require('./getListContacts')

const addContact = async ({ name, email, phone }) => {
  const contacts = await getListContacts()
  const createId = contacts.length + 1
  const contact = {
    createId,
    name,
    email,
    phone,
  }
  const newContactsList = [...contacts, contact]
  await fs.writeFile(contactsPath, JSON.stringify(newContactsList), 'utf-8')
  return contact
}

module.exports = { addContact }
