const { user } = require('../../db/userMadel')

const logout = async (currentUser) => {
  await user.findByIdAndUpdate({ _id: currentUser.id }, { $set: { token: null } })

  // eslint-disable-next-line no-unused-vars
  const foundUser = await user.findById(currentUser.id)
}

module.exports = {
  logout
}
