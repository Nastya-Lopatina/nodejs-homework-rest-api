
const { getListContacts, getContactById } = require('../../model/contacts')

const getContacts = async (req, res, next) => {
  try {
    const contacts = await getListContacts(req.params.contactId)
    res.status(200).json({ contacts, message: 'success' })
  } catch (error) {
    console.log(error.message)
  }
}

const getById = async (req, res, next) => {
  try {
    const contact = await getContactById(req.params.contactId)

    if (!contact) {
      res.status(404).json({ message: 'Not found' })
      return
    }

    res.json(contact).status(200)
  } catch (error) {
    next(error)
  }
}

module.exports = { getContacts, getById }
