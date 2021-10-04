const { addContact } = require('../model/contacts/addContact')

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