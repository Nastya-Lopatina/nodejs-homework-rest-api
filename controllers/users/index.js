const { signUp } = require('./signUp')
const { signIn } = require('./signIn')
const { signOut } = require('./signOut')
const { getUser } = require('./getUser')
const { uploadingAvatars } = require('./uploadingAvatars')

module.exports = {
  signUp,
  signIn,
  signOut,
  getUser,
  uploadingAvatars
}
