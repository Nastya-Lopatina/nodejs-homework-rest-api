const { removeContact } = require('../../model/contacts/index')

const deleteContact = async (req, res, next) => {
  try {
    const result = await removeContact(req.params.contactId)

    if (!result) {
      return res.status(404).json({ message: 'Not found' })
    }

    res.status(200).json({ message: 'contact deleted' })
  } catch (error) {
    next(error)
  }
}

module.exports = { deleteContact }
