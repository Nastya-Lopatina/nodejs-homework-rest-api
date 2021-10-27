const { user } = require('../../db/userMadel')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')

const registration = async ({ password, email, subscription }) => {
  const isUserExisted = await user.findOne({ email })
  if (isUserExisted) {
    return null
  }

  // eslint-disable-next-line new-cap
  const newUser = await new user({
    password: await bcrypt.hash(password, 10),
    email,
    subscription,
    avatarURL: gravatar.url(email, null, false),
  })

  await newUser.save()
  return newUser
}

module.exports = {
  registration
}
