const { user } = require('../../db/userMadel')
const bcrypt = require('bcrypt')

const registration = async ({ password, email, subscription }) => {
  const isUserExisted = await user.findOne({ email })
  if (isUserExisted) {
    return null
  }

  // eslint-disable-next-line new-cap
  const newUser = await new user({
    password: await bcrypt.hash(password, 10),
    email,
    subscription
  })

  await newUser.save()
  return newUser
}

module.exports = {
  registration
}
