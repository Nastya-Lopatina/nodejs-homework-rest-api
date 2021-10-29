const { addValidation, patchContactValidation } = require('./validationContacts')
const { signUpUser, repeatVerify } = require('./validationUsers')
module.exports = {
  addValidation,
  patchContactValidation,
  signUpUser,
  repeatVerify
}
