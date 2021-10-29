const { user } = require('../../db/userMadel.js')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')

const { nanoid } = require('nanoid')
const sgMail = require('@sendgrid/mail')

const registration = async ({ password, email, subscription }) => {
  const isUserExisted = await user.findOne({ email })
  if (isUserExisted) {
    return null
  }

  const verifyToken = nanoid()

  // eslint-disable-next-line new-cap
  const newUser = await new user({
    password: await bcrypt.hash(password, 10),
    email,
    subscription,
    avatarURL: gravatar.url(email, null, false),
    verifyToken,
  })

  await newUser.save()

  const msg = {
    to: email,
    from: 'juk3z1973@gmail.com',
    subject: 'Спасибо за регистрацию',
    text: `нажмите эту ссылку, чтобы подтвердить свой профиль <a href="http://localhost:3001/api/users/verify/${verifyToken}">Confirm</a>`,
    html: `нажмите эту ссылку, чтобы подтвердить свой профиль <a href="http://localhost:3001/api/users/verify/${verifyToken}">Confirm</a>`,

  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  await sgMail.send(msg)

  return newUser
}
module.exports = {
  registration
}
