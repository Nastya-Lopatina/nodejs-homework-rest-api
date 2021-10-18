const { user } = require('../../db/userMadel')

const getUserById = async (currentUser) => {
  const foundUser = await user.findById(currentUser.id)
  return foundUser
}

module.exports = {
  getUserById
}
