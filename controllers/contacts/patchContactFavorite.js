const { addContact } = require('../../model/contacts/index.js')

const postContact = async (req, res, next) => {
  try {
    const newContact = await addContact(req.body)
    res.status(201).json(newContact)
  } catch (error) {
    next(error)
  }
}

module.exports = {
  postContact
}
